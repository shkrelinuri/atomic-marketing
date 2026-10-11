import Reveal from "./Reveal";

// Shared eyebrow + title + intro used at the top of each section.
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-ink/70 dark:text-paper/70">{description}</p>
      )}
    </Reveal>
  );
}
