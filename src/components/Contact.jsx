import { useState } from "react";
import { CheckCircle2, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { contact, site } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const socialIcons = { Github, Linkedin, Instagram, Twitter };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.type) e.type = "Please choose a project type.";
  if (v.message.trim().length < 10) e.message = "Please tell us a bit more (at least 10 characters).";
  return e;
}

const field =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors focus:border-accent dark:bg-paper/5";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      // Focus the first invalid field
      document.getElementById(`field-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    // No backend yet: open the visitor's email client with the message prefilled.
    const body = `${values.message}\n\nFrom: ${values.name} (${values.email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${values.type} enquiry`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
          {sent ? (
            <div role="status" className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
              <CheckCircle2 size={48} className="text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold">Thank you!</h3>
              <p className="mt-2 text-ink/70 dark:text-paper/70">Your email app should open with your message. We will reply soon.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-6 font-semibold text-accent hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="field-name" className="font-semibold">Name</label>
                <input id="field-name" name="name" autoComplete="name" value={values.name} onChange={onChange}
                  aria-invalid={!!errors.name} aria-describedby={errors.name ? "error-name" : undefined}
                  className={`${field} ${border("name")}`} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="field-email" className="font-semibold">Email</label>
                <input id="field-email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "error-email" : undefined}
                  className={`${field} ${border("email")}`} />
                {err("email")}
              </div>
              <div>
                <label htmlFor="field-type" className="font-semibold">Project type</label>
                <select id="field-type" name="type" value={values.type} onChange={onChange}
                  aria-invalid={!!errors.type} aria-describedby={errors.type ? "error-type" : undefined}
                  className={`${field} ${border("type")}`}>
                  <option value="">Select...</option>
                  {contact.projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {err("type")}
              </div>
              <div>
                <label htmlFor="field-message" className="font-semibold">Message</label>
                <textarea id="field-message" name="message" rows={5} value={values.message} onChange={onChange}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined}
                  className={`${field} ${border("message")}`} />
                {err("message")}
              </div>
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full bg-accent px-6 py-3 font-semibold text-white"
              >
                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-300 group-hover:translate-x-0 motion-reduce:transition-none dark:bg-paper" />
                <span className="relative transition-colors duration-300 dark:group-hover:text-ink">Send message</span>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
