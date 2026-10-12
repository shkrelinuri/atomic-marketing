// Albanian content. Same shape as content.js; non-text fields are reused from English.
import { en, site } from "./content";

export const sq = {
  navLinks: [
    { label: "Shërbimet", href: "#services" },
    { label: "Punimet", href: "#portfolio" },
    { label: "Procesi", href: "#process" },
    { label: "Çmimet", href: "#pricing" },
    { label: "Pyetje", href: "#faq" },
  ],
  navCta: { label: "Na kontaktoni", href: "#contact" },

  hero: {
    ...en.hero,
    badge: "I disponueshëm për projekte të reja",
    headline: "Faqe interneti që e bëjnë biznesin tuaj",
    highlight: "të paharrueshëm.",
    subtitle:
      "Atomic Marketing dizajnon dhe ndërton faqe interneti dhe dyqane online të shpejta e të bukura për individë dhe biznese, nga ideja deri te lançimi.",
    primaryCta: { label: "Fillo një projekt", href: "#contact" },
    secondaryCta: { label: "Shiko punimet tona", href: "#portfolio" },
    stats: [
      { value: 60, suffix: "+", label: "Projekte të përfunduara" },
      { value: 45, suffix: "+", label: "Klientë të kënaqur" },
      { value: 6, suffix: "", label: "Vite përvojë" },
    ],
  },

  services: {
    eyebrow: "Shërbimet",
    title: "Gjithçka që ju duhet për të dalë online.",
    description: "Nga një faqe e thjeshtë deri te një dyqan i plotë online, ne kujdesemi për dizajnin, zhvillimin dhe lançimin.",
    items: [
      { icon: "Globe", title: "Faqe për biznese", description: "Faqe profesionale e të shpejta që shpjegojnë çfarë bëni dhe i kthejnë vizitorët në klientë." },
      { icon: "ShoppingCart", title: "Dyqane online", description: "E-commerce i sigurt me menaxhim të lehtë të produkteve, pagesave dhe dërgesave." },
      { icon: "Rocket", title: "Faqe uebi (landing)", description: "Faqe të fokusuara për konvertim, për fushata, lançime dhe evente." },
      { icon: "RefreshCw", title: "Ridizajnim", description: "Jepini faqes suaj të vjetër një pamje moderne, përdorim më të mirë dhe shpejtësi më të lartë." },
      { icon: "Wrench", title: "Mirëmbajtje", description: "Përditësime, kopje rezervë, siguri dhe ndryshime të vogla që faqja juaj të qëndrojë në formë." },
      { icon: "Gauge", title: "Shpejtësi dhe SEO", description: "Optimizim i performancës dhe strukturë miqësore për kërkim që t'ju gjejnë më lehtë." },
    ],
  },

  portfolio: {
    ...en.portfolio,
    eyebrow: "Punimet tona",
    title: "Disa nga projektet tona.",
    description: "Një përzgjedhje faqesh dhe aplikacionesh që kemi ndërtuar. Klikoni një projekt për më shumë foto.",
    projects: en.portfolio.projects.map((p, i) => ({
      ...p,
      description: [
        "Dyqan online mode me faqe kryesore editoriale, katalog produktesh, shportë blerjesh dhe faqe kontakti.",
        "Luaj shah kundër motorit Stockfish ose online, me vështirësi të rregullueshme dhe një tabelë të pastër.",
        "Luajtës muzike për këngët më të reja shqiptare, me kërkim, playlista, të preferuara dhe shirit luajtjeje.",
        "Faqe dhe panel për një shërbim proxy datacenter, me plane çmimesh dhe pagesë të menjëhershme.",
        "Mjet analize portretesh që shqyrton foto frontale e profili dhe jep vërejtje të qarta e të matura.",
        "Analizues CV-je që vlerëson përputhshmërinë ATS, ndikimin, qartësinë dhe fjalët kyçe, me këshilla për përmirësim.",
      ][i],
    })),
  },

  process: {
    eyebrow: "Procesi",
    title: "I thjeshtë, i qartë, pa stres.",
    steps: [
      { title: "Bisedojmë", description: "Flasim për qëllimet, audiencën dhe buxhetin tuaj për të përcaktuar saktë çfarë ju duhet." },
      { title: "Dizajnojmë", description: "Merrni një model dizajni të pastër për ta shqyrtuar dhe përmirësuar derisa t'ju pëlqejë." },
      { title: "Ndërtojmë", description: "Zhvillojmë një faqe të shpejtë, responsive dhe të aksesueshme, me përditësime të rregullta." },
      { title: "Lançojmë", description: "Testojmë gjithçka, publikojmë faqen dhe qëndrojmë pranë jush me mbështetje pas lançimit." },
    ],
  },

  skills: { ...en.skills, eyebrow: "Mjetet", title: "Teknologjitë me të cilat punojmë." },

  pricing: {
    eyebrow: "Çmimet",
    title: "Pako të qarta, pa surpriza.",
    description: "Çmime fikse për projektet më të zakonshme. Ju duhet diçka e veçantë? Na kontaktoni.",
    plans: [
      {
        ...en.pricing.plans[0],
        name: "Fillestar",
        description: "Një faqe e bukur për t'ju nxjerrë online.",
        features: ["1 faqe", "Dizajn responsive", "Formular kontakti", "SEO bazë", "Dorëzim në 1 javë"],
      },
      {
        ...en.pricing.plans[1],
        name: "Biznes",
        description: "Një faqe e plotë për një biznes në rritje.",
        features: ["Deri në 6 faqe", "Dizajn i personalizuar", "Integrim CMS", "SEO i avancuar", "Konfigurim analitike", "30 ditë mbështetje"],
      },
      {
        ...en.pricing.plans[2],
        name: "Dyqan",
        description: "Një dyqan i plotë online gati për shitje.",
        features: ["Produkte pa limit", "Pagesa dhe dërgesa", "Dizajn i personalizuar", "Optimizim shpejtësie", "Seancë trajnimi", "90 ditë mbështetje"],
      },
    ],
  },

  faq: {
    eyebrow: "Pyetje",
    title: "Pyetje të shpeshta.",
    items: [
      { q: "Sa zgjat krijimi i një faqeje?", a: "Një faqe e vetme zgjat rreth një javë; një faqe e plotë biznesi zakonisht 3 deri në 4 javë, varësisht nga përmbajtja dhe shpejtësia e komenteve." },
      { q: "A duhet të jap unë përmbajtjen?", a: "Në mënyrë ideale po, por mund t'ju ndihmojmë me tekstet dhe gjetjen e fotove nëse ju duhet." },
      { q: "A funksionon faqja në telefon?", a: "Gjithmonë. Çdo faqe ndërtohet fillimisht për celular dhe testohet në pajisje reale." },
      { q: "A mund ta ndryshoj vetë faqen më vonë?", a: "Po. Mund të konfigurojmë një editor të thjeshtë për të ndryshuar tekste e foto pa kod." },
      { q: "A ofroni hosting dhe mirëmbajtje?", a: "Mund të konfigurojmë hostingun dhe të ofrojmë plane mujore mirëmbajtjeje me përditësime, kopje rezervë dhe siguri." },
    ],
  },

  contact: {
    eyebrow: "Kontakti",
    title: "Le të ndërtojmë diçka së bashku.",
    description: "Na tregoni për projektin tuaj dhe do t'ju përgjigjemi brenda një dite pune.",
    projectTypes: ["Faqe biznesi", "Dyqan online", "Landing page", "Ridizajnim", "Mirëmbajtje", "Tjetër"],
  },

  ui: {
    switchLang: "English",
    switchLangShort: "EN",
    nav: { openMenu: "Hap menunë", closeMenu: "Mbyll menunë", lightMode: "Kalo në modalitetin e çelët", darkMode: "Kalo në modalitetin e errët" },
    pricing: { popular: "Më i popullarizuari", cta: "Fillo tani" },
    form: {
      name: "Emri",
      email: "Email",
      type: "Lloji i projektit",
      message: "Mesazhi",
      select: "Zgjidh...",
      send: "Dërgo mesazhin",
      sending: "Po dërgohet...",
      errName: "Ju lutemi shkruani emrin tuaj.",
      errEmail: "Ju lutemi shkruani një email të vlefshëm.",
      errType: "Ju lutemi zgjidhni llojin e projektit.",
      errMessage: "Ju lutemi na tregoni pak më shumë (të paktën 10 karaktere).",
      errSend: "Diçka shkoi keq. Provoni përsëri ose na shkruani në WhatsApp.",
      thanksTitle: "Faleminderit!",
      thanksText: "Mesazhi juaj u dërgua. Do t'ju përgjigjemi shpejt.",
      another: "Dërgo një mesazh tjetër",
    },
    footer: { rights: "Të gjitha të drejtat e rezervuara.", contact: "Kontakti" },
    gallery: { close: "Mbyll galerinë", prev: "Fotoja e mëparshme", next: "Fotoja tjetër", view: "Shiko galerinë", of: "nga" },
  },
};

export { site };
