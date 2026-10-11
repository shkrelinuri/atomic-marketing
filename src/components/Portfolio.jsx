import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow={portfolio.eyebrow} title={portfolio.title} description={portfolio.description} />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((p, i) => (
          <Reveal as="li" key={p.title} delay={(i % 3) * 0.1}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} (live site)`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/20 motion-reduce:hover:translate-y-0"
            >
              <img
                src={p.image}
                alt={`Screenshot of ${p.title} website`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
              {/* Hover overlay; also visible on keyboard focus */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
