import { useState } from "react";
import { CheckCircle2, Instagram, Mail, MessageCircle } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const socialIcons = { MessageCircle, Instagram };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors focus:border-accent dark:bg-paper/5";

export default function Contact() {
  const { contact, site, ui } = useContent();
  const f = ui.form;

  const [values, setValues] = useState({ name: "", email: "", type: "", message: "", _honey: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const validate = (v) => {
    const e = {};
    if (v.name.trim().length < 2) e.name = f.errName;
    if (!emailRe.test(v.email.trim())) e.email = f.errEmail;
    if (!v.type) e.type = f.errType;
    if (v.message.trim().length < 10) e.message = f.errMessage;
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`field-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          project_type: values.type,
          message: values.message,
          _subject: `New enquiry from ${values.name} (${values.type})`,
          _replyto: values.email,
          _honey: values._honey, // spam trap, must stay empty
          _template: "table",
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === "false" || data.success === false) throw new Error("send failed");
      setStatus("sent");
      setValues({ name: "", email: "", type: "", message: "", _honey: "" });
    } catch {
      setStatus("error");
    }
  };

  const border = (k) => (errors[k] ? "border-red-500" : "border-ink/15 dark:border-paper/20");
  const err = (k) =>
    errors[k] && (
      <p id={`error-${k}`} role="alert" className="mt-1 text-sm text-red-500">
        {errors[k]}
      </p>
    );

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />
          <Reveal className="mt-10 space-y-6">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-lg font-semibold hover:text-accent">
              <Mail size={20} className="text-accent" aria-hidden="true" />
              {site.email}
            </a>
            <ul className="flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-accent hover:bg-accent hover:text-white dark:border-paper/20"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          {status === "sent" ? (
            <div role="status" className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
              <CheckCircle2 size={48} className="text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold">{f.thanksTitle}</h3>
              <p className="mt-2 text-ink/70 dark:text-paper/70">{f.thanksText}</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-6 font-semibold text-accent hover:underline">
                {f.another}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              {/* Honeypot: hidden from people, filled by bots */}
              <input type="text" name="_honey" value={values._honey} onChange={onChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <div>
                <label htmlFor="field-name" className="font-semibold">{f.name}</label>
                <input id="field-name" name="name" autoComplete="name" value={values.name} onChange={onChange}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? "error-name" : undefined}
                  className={`${field} ${border("name")}`} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="field-email" className="font-semibold">{f.email}</label>
                <input id="field-email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "error-email" : undefined}
                  className={`${field} ${border("email")}`} />
                {err("email")}
              </div>
              <div>
                <label htmlFor="field-type" className="font-semibold">{f.type}</label>
                <select id="field-type" name="type" value={values.type} onChange={onChange}
                  aria-invalid={!!errors.type} aria-describedby={errors.type ? "error-type" : undefined}
                  className={`${field} ${border("type")}`}>
                  <option value="">{f.select}</option>
                  {contact.projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {err("type")}
              </div>
              <div>
                <label htmlFor="field-message" className="font-semibold">{f.message}</label>
                <textarea id="field-message" name="message" rows={5} value={values.message} onChange={onChange}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined}
                  className={`${field} ${border("message")}`} />
                {err("message")}
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-red-500">{f.errSend}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative w-full overflow-hidden rounded-full bg-accent px-6 py-3 font-semibold text-white disabled:opacity-70"
              >
                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-300 group-hover:translate-x-0 motion-reduce:transition-none dark:bg-paper" />
                <span className="relative transition-colors duration-300 dark:group-hover:text-ink">
                  {status === "sending" ? f.sending : f.send}
                </span>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
