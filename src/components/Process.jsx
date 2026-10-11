import { useContent } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Vertical timeline on mobile, 4 columns on desktop.
export default function Process() {
  const { process } = useContent();
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow={process.eyebrow} title={process.title} />

      <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
        {/* Connecting line (desktop) */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-ink/15 dark:bg-paper/15 lg:block" />
        {process.steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.12} className="relative flex gap-5 lg:block">
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-white">
              {i + 1}
            </span>
            <div className="lg:mt-6">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink/70 dark:text-paper/70">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
