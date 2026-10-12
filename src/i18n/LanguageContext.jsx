import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en, site } from "../data/content";
import { sq } from "../data/content.sq";
import { it } from "../data/content.it";

const bundles = { en, sq, it };

// Shown in the language menu (names are written in their own language)
export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "sq", label: "Shqip" },
  { code: "it", label: "Italiano" },
];

const LanguageContext = createContext(null);

// Starts from the saved choice, otherwise the browser language, otherwise English.
function initialLang() {
  const saved = localStorage.getItem("lang");
  if (saved && bundles[saved]) return saved;
  const browser = navigator.language?.toLowerCase().slice(0, 2);
  return bundles[browser] ? browser : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, site, ...bundles[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// Returns the active-language content plus { lang, setLang, site }.
export const useContent = () => useContext(LanguageContext);
