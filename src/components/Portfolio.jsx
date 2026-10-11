import { useState } from "react";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project: p }) {
  // Show a placeholder until the screenshot exists in /public/projects
  const [missing, setMissing] = useState(false);

  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.title} (opens in a new tab)`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/20 motion-reduce:hover:translate-y-0 dark:bg-paper/5"
    >
      {missing ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink/40 dark:text-paper/40">
          <ImageOff size={32} aria-hidden="true" />
          <span className="text-sm font-semibold">{p.title}</span>
        </div>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${p.image}`}
          alt={`Screenshot of ${p.title}`}
          loading="lazy"
          onError={() => setMissing(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
      )}
      {/* Hover overlay; also visible on keyboard focus */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/95 via-ink/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="flex items-center justify-between text-white">
          <h3 className="text-xl font-bold">{p.title}</h3>
          <ArrowUpRight size={20} aria-hidden="true" />
        </div>
        <p className="mt-2 text-sm text-white/80">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const { portfolio } = useContent();
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow={portfolio.eyebrow} title={portfolio.title} description={portfolio.description} />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((p, i) => (
          <Reveal as="li" key={p.title} delay={(i % 3) * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
