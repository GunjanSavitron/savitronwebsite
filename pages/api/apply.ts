import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable, { Fields, Files } from "formidable";
import fs from "fs";
import path from "path";

export const config = { api: { bodyParser: false } };

type SuccessResponse = { ok: true };
type ErrorResponse = { ok: false; error: string };

const RECIPIENT = "connect@savitron.ai";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(fields: Fields, key: string): string {
  const v = fields[key];
  return Array.isArray(v) ? v[0] ?? "" : v ?? "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const form = formidable({ maxFileSize: 5 * 1024 * 1024, keepExtensions: true });

  let fields: Fields;
  let files: Files;
  try {
    [fields, files] = await form.parse(req);
  } catch {
    return res.status(400).json({ ok: false, error: "Could not parse form data." });
  }

  const name = field(fields, "name").trim();
  const email = field(fields, "email").trim();
  const phone = field(fields, "phone").trim();
  const role = field(fields, "role").trim();
  const cover = field(fields, "cover").trim();

  if (!name || !email) {
    return res.status(400).json({ ok: false, error: "Name and email are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass) {
    return res.status(500).json({ ok: false, error: "Email service is not configured." });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    requireTLS: port === 587,
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeRole = escapeHtml(role);
  const safeCover = escapeHtml(cover).replace(/\n/g, "<br />");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1C1C1C;">
      <h2 style="color: #B8962E; margin-bottom: 8px;">New Job Application — savitron.ai</h2>
      <table style="border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 6px 16px 6px 0; color: #555;"><strong>Name</strong></td><td style="padding: 6px 0;">${safeName}</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #555;"><strong>Email</strong></td><td style="padding: 6px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #555;"><strong>Phone</strong></td><td style="padding: 6px 0;">${safePhone || "<em>not provided</em>"}</td></tr>
        <tr><td style="padding: 6px 16px 6px 0; color: #555;"><strong>Role Applied For</strong></td><td style="padding: 6px 0;">${safeRole || "<em>not specified</em>"}</td></tr>
      </table>
      ${cover ? `<h3 style="margin-top: 24px; color: #1C1C1C;">Cover Note</h3><p style="line-height: 1.6;">${safeCover}</p>` : ""}
    </div>
  `;

  const textBody = [
    `New Job Application — savitron.ai`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "(not provided)"}`,
    `Role: ${role || "(not specified)"}`,
    ``,
    cover ? `Cover Note:\n${cover}` : "",
  ].filter(Boolean).join("\n");

  // Build attachments from uploaded CV file
  const attachments: { filename: string; content: Buffer }[] = [];
  const cvFile = files["cv"];
  const cvEntry = Array.isArray(cvFile) ? cvFile[0] : cvFile;
  if (cvEntry && cvEntry.filepath) {
    try {
      const content = fs.readFileSync(cvEntry.filepath);
      const filename = cvEntry.originalFilename || path.basename(cvEntry.filepath);
      attachments.push({ filename, content });
    } catch {
      // CV read failed — send without attachment
    }
  }

  try {
    await transporter.sendMail({
      from,
      to: RECIPIENT,
      replyTo: email,
      subject: `Job Application — ${name}${role ? ` (${role})` : ""}`,
      text: textBody,
      html: htmlBody,
      attachments,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Apply form: sendMail failed", err);
    return res.status(500).json({ ok: false, error: "We couldn't send your application. Please try again." });
  }
}
