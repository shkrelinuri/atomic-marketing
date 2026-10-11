import { Atom } from "lucide-react";
import { navLinks, site } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-paper/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <Atom size={20} className="text-accent" aria-hidden="true" />
          {site.brand}
        </a>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-accent">{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="hover:text-accent">Contact</a>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-ink/60 dark:text-paper/60">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
