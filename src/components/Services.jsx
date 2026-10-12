import { Gauge, Globe, RefreshCw, Rocket, ShoppingCart, Wrench } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Maps icon names in the data file to lucide components.
const icons = { Globe, ShoppingCart, Rocket, RefreshCw, Wrench, Gauge };

export default function Services() {
  const { services } = useContent();
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow={services.eyebrow} title={services.title} description={services.description} />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.1}>
              {/* Card lifts with a soft shadow on hover */}
              <article className="group h-full rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-paper/10 dark:bg-paper/[0.03] dark:hover:shadow-black/40">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-ink/70 dark:text-paper/70">{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
