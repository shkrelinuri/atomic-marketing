// Italian content. Same shape as content.js; non-text fields are reused from English.
import { en } from "./content";

export const it = {
  navLinks: [
    { label: "Servizi", href: "#services" },
    { label: "Lavori", href: "#portfolio" },
    { label: "Processo", href: "#process" },
    { label: "Prezzi", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  navCta: { label: "Contattaci", href: "#contact" },

  hero: {
    ...en.hero,
    badge: "Disponibile per nuovi progetti",
    headline: "Siti web che rendono la tua attività",
    highlight: "indimenticabile.",
    subtitle:
      "Atomic Marketing progetta e realizza siti web e negozi online veloci e curati per privati e aziende, dall'idea al lancio.",
    primaryCta: { label: "Inizia un progetto", href: "#contact" },
    secondaryCta: { label: "Guarda i nostri lavori", href: "#portfolio" },
    stats: [
      { value: 60, suffix: "+", label: "Progetti completati" },
      { value: 45, suffix: "+", label: "Clienti soddisfatti" },
      { value: 6, suffix: "", label: "Anni di esperienza" },
    ],
  },

  services: {
    eyebrow: "Servizi",
    title: "Tutto ciò che serve per andare online.",
    description: "Da una semplice pagina a un negozio online completo, ci occupiamo di design, sviluppo e lancio.",
    items: [
      { icon: "Globe", title: "Siti web aziendali", description: "Siti professionali e veloci che spiegano cosa fai e trasformano i visitatori in clienti." },
      { icon: "ShoppingCart", title: "Negozi online", description: "E-commerce sicuro, con gestione semplice di prodotti, pagamenti e spedizioni." },
      { icon: "Rocket", title: "Landing page", description: "Pagine singole pensate per convertire, per campagne, lanci ed eventi." },
      { icon: "RefreshCw", title: "Restyling", description: "Dai al tuo vecchio sito un look moderno, più usabilità e tempi di caricamento ridotti." },
      { icon: "Wrench", title: "Manutenzione", description: "Aggiornamenti, backup, sicurezza e piccole modifiche per mantenere il sito in salute." },
      { icon: "Gauge", title: "Velocità e SEO", description: "Ottimizzazione delle prestazioni e struttura adatta ai motori di ricerca, per farti trovare." },
    ],
  },

  portfolio: {
    ...en.portfolio,
    eyebrow: "I nostri lavori",
    title: "Alcuni dei nostri progetti.",
    description: "Una selezione di siti e app che abbiamo realizzato. Clicca su un progetto per vedere altre immagini.",
    projects: en.portfolio.projects.map((p, i) => ({
      ...p,
      description: [
        "Negozio online di moda con homepage editoriale, catalogo prodotti, carrello e pagina contatti.",
        "Gioca a scacchi contro il motore Stockfish o online, con difficoltà regolabile e una scacchiera pulita.",
        "Un quiz tattico di dieci problemi che stima la fascia di rating del giocatore e ne analizza i punti di forza.",
        "Un lettore musicale per le ultime canzoni albanesi, con ricerca, playlist, preferiti e barra di riproduzione.",
        "Sito e pannello per un servizio di proxy datacenter, con piani tariffari e pagamento immediato.",
        "Strumento di analisi dei ritratti che esamina foto frontali e di profilo e offre osservazioni chiare e misurate.",
        "Analizzatore di CV che valuta compatibilità ATS, impatto, chiarezza e parole chiave, con consigli per migliorare.",
      ][i],
    })),
  },

  process: {
    eyebrow: "Processo",
    title: "Semplice, trasparente, senza stress.",
    steps: [
      { title: "Confronto", description: "Parliamo di obiettivi, pubblico e budget per definire esattamente ciò di cui hai bisogno." },
      { title: "Design", description: "Ricevi un mockup pulito da valutare e rifinire finché non ti convince." },
      { title: "Sviluppo", description: "Realizziamo un sito veloce, responsive e accessibile, con aggiornamenti regolari." },
      { title: "Lancio", description: "Testiamo tutto, andiamo online e restiamo al tuo fianco con assistenza dopo il lancio." },
    ],
  },

  skills: { ...en.skills, eyebrow: "Strumenti", title: "Le tecnologie con cui lavoriamo." },

  pricing: {
    eyebrow: "Prezzi",
    title: "Pacchetti chiari, nessuna sorpresa.",
    description: "Prezzi fissi per i progetti più comuni. Serve qualcosa di su misura? Contattaci.",
    plans: [
      {
        ...en.pricing.plans[0],
        name: "Starter",
        description: "Una landing page curata per metterti online.",
        features: ["1 pagina", "Design responsive", "Modulo di contatto", "SEO di base", "Consegna in 1 settimana"],
      },
      {
        ...en.pricing.plans[1],
        name: "Business",
        description: "Un sito completo per un'attività in crescita.",
        features: ["Fino a 6 pagine", "Design personalizzato", "Integrazione CMS", "SEO avanzata", "Configurazione analytics", "30 giorni di assistenza"],
      },
      {
        ...en.pricing.plans[2],
        name: "Store",
        description: "Un negozio online completo, pronto a vendere.",
        features: ["Prodotti illimitati", "Pagamenti e spedizioni", "Design personalizzato", "Ottimizzazione delle prestazioni", "Sessione di formazione", "90 giorni di assistenza"],
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Domande frequenti.",
    items: [
      { q: "Quanto tempo serve per realizzare un sito?", a: "Una landing page richiede circa una settimana; un sito aziendale completo di solito da 3 a 4 settimane, a seconda dei contenuti e dei tempi di feedback." },
      { q: "Devo fornire io i contenuti?", a: "Idealmente sì, ma possiamo aiutarti con i testi e la ricerca delle immagini se necessario." },
      { q: "Il sito funzionerà sui telefoni?", a: "Sempre. Ogni sito è progettato prima di tutto per mobile e testato su dispositivi reali." },
      { q: "Posso modificare il sito da solo in seguito?", a: "Sì. Possiamo configurare un editor semplice per cambiare testi e immagini senza scrivere codice." },
      { q: "Offrite hosting e manutenzione?", a: "Possiamo configurare l'hosting e offrire piani di manutenzione mensili con aggiornamenti, backup e sicurezza." },
    ],
  },

  contact: {
    eyebrow: "Contatti",
    title: "Costruiamo qualcosa insieme.",
    description: "Raccontaci il tuo progetto e ti risponderemo entro un giorno lavorativo.",
    projectTypes: ["Sito aziendale", "Negozio online", "Landing page", "Restyling", "Manutenzione", "Altro"],
  },

  ui: {
    langLabel: "Lingua",
    nav: { openMenu: "Apri il menu", closeMenu: "Chiudi il menu", lightMode: "Passa alla modalità chiara", darkMode: "Passa alla modalità scura" },
    pricing: { popular: "Il più scelto", cta: "Inizia ora" },
    form: {
      name: "Nome",
      email: "Email",
      type: "Tipo di progetto",
      message: "Messaggio",
      select: "Seleziona...",
      send: "Invia messaggio",
      sending: "Invio in corso...",
      errName: "Inserisci il tuo nome.",
      errEmail: "Inserisci un indirizzo email valido.",
      errType: "Scegli il tipo di progetto.",
      errMessage: "Raccontaci qualcosa in più (almeno 10 caratteri).",
      errSend: "Qualcosa è andato storto. Riprova o contattaci su WhatsApp.",
      thanksTitle: "Grazie!",
      thanksText: "Il tuo messaggio è stato inviato. Ti risponderemo presto.",
      another: "Invia un altro messaggio",
    },
    footer: { rights: "Tutti i diritti riservati.", contact: "Contatti" },
    gallery: { close: "Chiudi la galleria", prev: "Immagine precedente", next: "Immagine successiva", view: "Vedi la galleria", of: "di" },
  },
};
