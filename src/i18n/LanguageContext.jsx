import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { en, site } from "../data/content";
import { sq } from "../data/content.sq";

const bundles = { en, sq };
const LanguageContext = createContext(null);

// Starts from the saved choice, otherwise the browser language (Albanian or English).
function initialLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "sq") return saved;
  return navigator.language?.toLowerCase().startsWith("sq") ? "sq" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = useCallback(() => setLangState((l) => (l === "en" ? "sq" : "en")), []);
  const value = useMemo(() => ({ lang, toggleLang, site, ...bundles[lang] }), [lang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// Returns the active-language content plus { lang, toggleLang, site }.
export const useContent = () => useContext(LanguageContext);
