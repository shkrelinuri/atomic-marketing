import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, Globe, Palette, PenTool, Plus, RefreshCw, Rocket, ShoppingCart, Wrench } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Maps icon names in the data file to lucide components.
const icons = { Globe, ShoppingCart, Rocket, RefreshCw, Wrench, Gauge, PenTool, Palette };

export default function Services() {
  const { services } = useContent();
  // Index of the card whose longer description is open (one at a time)
  const [open, setOpen] = useState(null);
  const listRef = useRef(null);

  // Give every collapsed card the height of the tallest one, so opening a card only grows that card
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const btns = [...list.querySelectorAll("[data-card-button]")];
      btns.forEach((b) => (b.style.minHeight = "0px"));
      const max = Math.max(...btns.map((b) => b.offsetHeight));
      btns.forEach((b) => (b.style.minHeight = `${max}px`));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [services]);

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow={services.eyebrow} title={services.title} description={services.description} />

      <ul ref={listRef} className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((item, i) => {
          const Icon = icons[item.icon];
          const isOpen = open === i;
          return (
            <Reveal as="li" key={item.title} delay={(i % 4) * 0.1}>
              {/* Card lifts with a soft shadow on hover; click opens the longer description */}
              <article
                className={`group rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:bg-paper/[0.03] dark:hover:shadow-black/40 ${
                  isOpen ? "border-accent" : "border-ink/10 dark:border-paper/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${i}`}
                  data-card-button
                  className="block w-full rounded-2xl p-8 text-left"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isOpen ? "bg-accent text-white" : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
                      }`}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <Plus
                      size={20}
                      aria-hidden="true"
                      className={`text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-ink/70 dark:text-paper/70">{item.description}</p>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mx-8 border-t border-ink/10 pb-8 pt-5 text-sm leading-relaxed text-ink/80 dark:border-paper/10 dark:text-paper/80">
                        {item.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
