import { useState } from "react";

interface ContactFormProps {
  handleClose?: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ handleClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      handleClose?.();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const inputCls =
    "w-full px-4 py-2.5 md:py-3 rounded-xl bg-page border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm disabled:opacity-60 disabled:cursor-not-allowed";

  if (status === "success") {
    return (
      <div className="rounded-xl border border-gold/40 bg-gold/5 p-5 md:p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold mb-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-lg md:text-xl font-semibold text-ink mb-1">Message sent</h3>
        <p className="text-sm text-ink-muted mb-4">Thanks for reaching out. Our team will get back to you within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-gold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="cf-name" className="block text-xs font-semibold uppercase tracking-widest text-ink-faint mb-1">Name</label>
        <input id="cf-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={submitting} className={inputCls} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="cf-email" className="block text-xs font-semibold uppercase tracking-widest text-ink-faint mb-1">Email</label>
        <input id="cf-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={submitting} className={inputCls} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="cf-phone" className="block text-xs font-semibold uppercase tracking-widest text-ink-faint mb-1">Phone</label>
        <input id="cf-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={submitting} className={inputCls} placeholder="+91 …" />
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-xs font-semibold uppercase tracking-widest text-ink-faint mb-1">Message</label>
        <textarea id="cf-message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} disabled={submitting} className={inputCls} placeholder="How can we help?" />
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
        {submitting ? (
          <>
            <svg className="animate-spin w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message<span aria-hidden>→</span>
          </>
        )}
      </button>
      <p className="text-xs text-ink-faint text-center">We respond within one business day.</p>
    </form>
  );
}
