import { Check } from "lucide-react";
import { pricing } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

      <ul className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {pricing.plans.map((plan, i) => (
          <Reveal as="li" key={plan.name} delay={i * 0.1}>
            <article
              className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl motion-reduce:hover:translate-y-0 ${
                plan.highlighted
                  ? "border-accent bg-accent text-white shadow-xl shadow-accent/30 lg:scale-105"
                  : "border-ink/10 bg-white hover:shadow-ink/10 dark:border-paper/10 dark:bg-paper/[0.03] dark:hover:shadow-black/40"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-ink px-3 py-1 text-xs font-bold text-white dark:bg-paper dark:text-ink">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/80" : "text-ink/70 dark:text-paper/70"}`}>
                {plan.description}
              </p>
              <p className="mt-6 text-5xl font-extrabold tracking-tight">{plan.price}</p>
              <ul className="my-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={plan.highlighted ? "text-white" : "text-accent"} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.highlighted ? (
                <a
                  href="#contact"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-accent transition-transform hover:scale-[1.03]"
                >
                  Get started
                </a>
              ) : (
                <Button href="#contact" variant="outline">
                  Get started
                </Button>
              )}
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
