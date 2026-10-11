import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Atom, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useContent } from "../i18n/LanguageContext";

// Sticky navbar: smooth-scroll links, animated underline, theme toggle, mobile menu.
export default function Navbar({ dark, onToggleTheme }) {
  const { navCta, navLinks, site, ui, toggleLang } = useContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On mobile, close the menu first, then scroll; the native jump gets lost while the menu collapses.
  const goTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.querySelector(href)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", href);
    }, 50);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-ink/10 bg-paper/80 backdrop-blur-md dark:border-paper/10 dark:bg-ink/80"
          : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <Atom size={22} className="text-accent" aria-hidden="true" />
          {site.brand}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative py-1 text-sm font-medium">
                {link.label}
                {/* Animated underline */}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={ui.switchLang}
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-accent/10 hover:text-accent"
          >
            <Languages size={16} aria-hidden="true" />
            {ui.switchLangShort}
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={dark ? ui.nav.lightMode : ui.nav.darkMode}
            className="rounded-full p-2 transition-colors hover:bg-accent/10 hover:text-accent"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={navCta.href}
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            {navCta.label}
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
            className="rounded-full p-2 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => goTo(e, link.href)}
                    className="block py-3 text-lg font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={navCta.href}
                  onClick={(e) => goTo(e, navCta.href)}
                  className="mt-2 block rounded-full bg-accent px-5 py-3 text-center font-semibold text-white"
                >
                  {navCta.label}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
