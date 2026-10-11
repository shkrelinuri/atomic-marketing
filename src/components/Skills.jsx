import { Atom, Code2, Database, Figma, Gauge, Globe, Search, Server, ShoppingBag, Wind } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = { Atom, Code2, Wind, Server, Database, Figma, ShoppingBag, Globe, Search, Gauge };

// Infinite marquee: the list is rendered twice and translated by -50%.
export default function Skills() {
  const { skills } = useContent();
  const loop = [...skills.items, ...skills.items];
  return (
    <section aria-label="Skills" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={skills.eyebrow} title={skills.title} />
        {/* Clipped to the content width; edges fade out */}
        <Reveal className="group mt-12 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={i}
                aria-hidden={i >= skills.items.length}
                className="mr-4 flex items-center gap-3 rounded-full border border-ink/10 px-6 py-3 font-semibold dark:border-paper/15"
              >
                <Icon size={20} className="text-accent" aria-hidden="true" />
                {s.name}
              </li>
            );
          })}
        </ul>
        </Reveal>
      </div>
    </section>
  );
}
