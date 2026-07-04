import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, phone, message } = (req.body ?? {}) as {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Name, email and message are required." });
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
    console.error("Contact form: missing SMTP env vars");
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
  const safePhone = escapeHtml(phone ?? "");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const textBody = [
    `New enquiry from savitron.ai`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "(not provided)"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1C1C1C;">
      <h2 style="color: #B8962E; margin-bottom: 8px;">New enquiry from savitursolutions.com</h2>
      <table style="border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 6px 12px 6px 0; color: #555;"><strong>Name</strong></td><td style="padding: 6px 0;">${safeName}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #555;"><strong>Email</strong></td><td style="padding: 6px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #555;"><strong>Phone</strong></td><td style="padding: 6px 0;">${safePhone || "<em>not provided</em>"}</td></tr>
      </table>
      <h3 style="margin-top: 24px; color: #1C1C1C;">Message</h3>
      <p style="line-height: 1.6; color: #1C1C1C;">${safeMessage}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from,
      to: RECIPIENT,
      replyTo: email,
      subject: `Website enquiry — ${name}`,
      text: textBody,
      html: htmlBody,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form: sendMail failed", err);
    return res.status(500).json({ ok: false, error: "We couldn't send your message. Please try again or email team@savitursolutions.com directly." });
  }
}
