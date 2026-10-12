import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Images } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";

const src = (path) => `${import.meta.env.BASE_URL}${path}`;

function ProjectCard({ project: p, label, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${p.title}: ${label}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink/5 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/20 motion-reduce:hover:translate-y-0 dark:bg-paper/5"
    >
      <img
        src={src(p.images[0])}
        alt={`Screenshot of ${p.title}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />

      {/* Photo count */}
      {p.images.length > 1 && (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          <Images size={13} aria-hidden="true" />
          {p.images.length}
        </span>
      )}

      {/* Mobile: name slides in as the card scrolls into view */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-5 pb-4 pt-10 text-white md:hidden"
      >
        <h3 className="text-lg font-bold">{p.title}</h3>
        <p className="text-xs text-white/70">{p.tags.join(" · ")}</p>
      </motion.div>

      {/* Desktop: overlay on hover or keyboard focus */}
      <div className="absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-ink/95 via-ink/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
        <h3 className="text-xl font-bold text-white">{p.title}</h3>
        <p className="mt-2 text-sm text-white/80">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

export default function Portfolio() {
  const { portfolio, ui } = useContent();
  const [active, setActive] = useState(null);
  const project = active === null ? null : portfolio.projects[active];

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow={portfolio.eyebrow} title={portfolio.title} description={portfolio.description} />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {portfolio.projects.map((p, i) => (
          <Reveal as="li" key={p.title} delay={(i % 2) * 0.1}>
            <ProjectCard project={p} label={ui.gallery.view} onOpen={() => setActive(i)} />
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {project && <Lightbox project={project} labels={ui.gallery} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
