import { MotionConfig, motion } from "framer-motion";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Skills from "./components/Skills";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    // reducedMotion="user" makes Framer Motion honor prefers-reduced-motion
    <MotionConfig reducedMotion="user">
      {/* Smooth page-load transition */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Navbar dark={dark} onToggleTheme={toggle} />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Process />
          <Skills />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </MotionConfig>
  );
}
