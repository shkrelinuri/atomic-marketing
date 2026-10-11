import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";
import Button from "./Button";
import AnimatedCounter from "./AnimatedCounter";

// Soft gradient blob that drifts slowly. Static when reduced motion is preferred.
function Blob({ className, drift, duration }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={reduce ? undefined : { x: drift[0], y: drift[1], scale: [1, 1.15, 1] }}
      transition={{ duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    />
  );
}

// Staggered fade/slide-up for hero content
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const { hero } = useContent();
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background blobs and floating shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Blob className="-left-24 top-24 h-80 w-80 bg-accent/20" drift={[60, 40]} duration={9} />
        <Blob className="-right-20 bottom-10 h-96 w-96 bg-accent/15" drift={[-50, -60]} duration={11} />
        <motion.div
          className="absolute right-[18%] top-[22%] h-14 w-14 rounded-2xl border-2 border-accent/40"
          animate={reduce ? undefined : { y: [0, -24, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[24%] left-[12%] h-8 w-8 rounded-full border-2 border-accent/40"
          animate={reduce ? undefined : { y: [0, 20, 0], x: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6 py-20"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-1.5 text-sm font-medium dark:border-paper/15"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          {hero.badge}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {hero.headline} <span className="text-accent">{hero.highlight}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg text-ink/70 dark:text-paper/70">
          {hero.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href={hero.primaryCta.href}>
            {hero.primaryCta.label} <ArrowRight size={16} />
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.dl variants={item} className="mt-16 grid max-w-xl grid-cols-3 gap-6">
          {hero.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs text-ink/60 dark:text-paper/60 sm:text-sm">{s.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
