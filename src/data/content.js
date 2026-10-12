// Single source of truth for English content. Albanian lives in content.sq.js (same shape).

// Shared, language-independent info
export const site = {
  name: "Atomic Marketing",
  brand: "Atomic Marketing",
  email: "allesdrin5@gmail.com",
  // Used by the contact form (Formspree delivers messages to the account email)
  formEndpoint: "https://formspree.io/f/mqpelgla",
  socials: [
    { label: "WhatsApp", icon: "MessageCircle", href: "https://wa.me/355676489460" },
    { label: "Instagram", icon: "Instagram", href: "https://instagram.com/nextstreamclips" },
  ],
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const navCta = { label: "Contact us", href: "#contact" };

export const hero = {
  badge: "Available for new projects",
  headline: "Websites that make your business look",
  highlight: "unforgettable.",
  subtitle:
    "Atomic Marketing designs and builds fast, beautiful websites and online stores for individuals and businesses, from idea to launch.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "View our work", href: "#portfolio" },
  stats: [
    { value: 60, suffix: "+", label: "Projects completed" },
    { value: 45, suffix: "+", label: "Happy clients" },
    { value: 6, suffix: "", label: "Years of experience" },
  ],
};

export const services = {
  eyebrow: "Services",
  title: "Everything you need to get online.",
  description: "From a first landing page to a full online store, we handle design, development and launch. Click a service to learn more.",
  items: [
    { icon: "Globe", title: "Business websites", description: "Professional, fast sites that explain what you do and turn visitors into customers.", details: "We plan the structure, write clear page copy with you and build a fast, mobile-friendly site that reflects your brand. It includes a contact form, social links, basic SEO and a simple way to update content yourself." },
    { icon: "ShoppingCart", title: "Online stores", description: "Secure e-commerce with easy product management, payments and shipping set up.", details: "From product pages and a smooth cart to secure online payments and shipping rules, we set up everything you need to sell. We also show you how to add products, manage orders and follow your sales." },
    { icon: "Rocket", title: "Landing pages", description: "Focused single pages built to convert for campaigns, launches and events.", details: "A single focused page with a clear message and a strong call to action. Ideal for promotions, events, app launches or new services, built to load instantly and turn visitors into leads." },
    { icon: "RefreshCw", title: "Redesigns", description: "Give an outdated site a modern look, better usability and faster load times.", details: "We review your current site, keep what works and rebuild the rest: a fresh design, clearer navigation, faster loading and better search visibility, without losing your existing content." },
    { icon: "Wrench", title: "Maintenance", description: "Updates, backups, security and small changes so your site stays healthy.", details: "Ongoing care for your site: software updates, regular backups, security checks and small content changes. If something breaks, we fix it quickly so you can focus on your business." },
    { icon: "Gauge", title: "Speed and SEO", description: "Performance tuning and search-friendly structure so people can find you.", details: "We check your speed and search visibility, compress images, clean up code, fix technical SEO issues and set up analytics so you can see what brings customers in." },
    { icon: "PenTool", title: "Logo design", description: "A memorable logo that gives your business a clear, professional identity.", details: "You receive several logo concepts based on your business and style, with revisions until you are happy. We deliver final files for web and print, in colour and in black and white." },
    { icon: "Palette", title: "Graphic design", description: "Business cards, social media posts, flyers and everything your brand needs.", details: "Business cards, flyers, social media posts, banners and brand guidelines. We keep colours, fonts and style consistent so your business looks professional everywhere." },
  ],
};
// Images live in /public/projects/<folder>/. The first image is the cover; the rest show in the gallery.
export const portfolio = {
  eyebrow: "Our work",
  title: "Some of our projects.",
  description: "A selection of websites and apps we have built. Click a project to see more screenshots.",
  projects: [
    {
      title: "North / Form Store",
      description: "A modern fashion online store with a bold editorial homepage, product catalogue, shopping bag and contact page.",
      images: ["projects/online-store/1.png", "projects/online-store/2.png", "projects/online-store/3.png", "projects/online-store/4.png", "projects/online-store/5.png"],
      tags: ["E-commerce", "React", "Responsive"],
    },
    {
      title: "Endgame Chess",
      description: "Play chess against the Stockfish engine or online, with adjustable difficulty and a clean, focused board.",
      images: ["projects/chess-game/1.png", "projects/chess-game/2.png", "projects/chess-game/3.png", "projects/chess-game/4.png"],
      tags: ["Next.js", "TypeScript", "Stockfish"],
    },
    {
      title: "Chess Talent Estimator",
      description: "A quick tactical quiz of ten puzzles that estimates a player's rating band and breaks down their pattern-spotting strengths.",
      images: ["projects/chess-estimator/1.png", "projects/chess-estimator/2.png", "projects/chess-estimator/3.png"],
      tags: ["React", "Quiz", "Payments"],
    },
    {
      title: "Music App",
      description: "A music player for the latest Albanian songs, with search, playlists, favorites and a full playback bar.",
      images: ["projects/music-app/1.png", "projects/music-app/2.png"],
      tags: ["JavaScript", "React"],
    },
    {
      title: "Proxy Provider",
      description: "Marketing site and dashboard for a datacenter proxy service, with pricing plans and instant checkout.",
      images: ["projects/proxy-provider/1.png", "projects/proxy-provider/2.png", "projects/proxy-provider/3.png", "projects/proxy-provider/4.png"],
      tags: ["React", "SaaS", "Dashboard"],
    },
    {
      title: "FaceScore",
      description: "A portrait analysis tool that reviews frontal and profile photos and returns clear, considered observations.",
      images: ["projects/facescore/1.png", "projects/facescore/2.png", "projects/facescore/3.png", "projects/facescore/4.png"],
      tags: ["React", "AI", "Dark mode"],
    },
    {
      title: "Hireability",
      description: "A resume analyser that scores ATS compatibility, impact, clarity and keyword match, with tips to improve.",
      images: ["projects/hireability/1.png", "projects/hireability/2.png", "projects/hireability/3.png"],
      tags: ["React", "AI", "Analytics"],
    },
  ],
};
export const process = {
  eyebrow: "Process",
  title: "Simple, transparent, stress-free.",
  steps: [
    { title: "Discuss", description: "We talk about your goals, audience and budget to define exactly what you need." },
    { title: "Design", description: "You get a clean design mockup to review and refine until it feels right." },
    { title: "Build", description: "We develop a fast, responsive and accessible site, with regular progress updates." },
    { title: "Launch", description: "We test everything, go live, and stay around for support after launch." },
  ],
};

// Icon names map to lucide icons in Skills.jsx
export const skills = {
  eyebrow: "Toolkit",
  title: "Technologies we work with.",
  items: [
    { name: "React", icon: "Atom" },
    { name: "JavaScript", icon: "Code2" },
    { name: "Tailwind CSS", icon: "Wind" },
    { name: "Node.js", icon: "Server" },
    { name: "Databases", icon: "Database" },
    { name: "Figma", icon: "Figma" },
    { name: "Shopify", icon: "ShoppingBag" },
    { name: "WordPress", icon: "Globe" },
    { name: "SEO", icon: "Search" },
    { name: "Performance", icon: "Gauge" },
  ],
};

export const pricing = {
  eyebrow: "Pricing",
  title: "Clear packages, no surprises.",
  description: "Fixed prices for the most common projects. Need something custom? Get in touch.",
  plans: [
    {
      name: "Starter",
      price: "$490",
      description: "A polished landing page to get you online.",
      features: ["1 page", "Responsive design", "Contact form", "Basic SEO", "1 week delivery"],
      highlighted: false,
    },
    {
      name: "Business",
      price: "$1,290",
      description: "A complete website for a growing business.",
      features: ["Up to 6 pages", "Custom design", "CMS integration", "Advanced SEO", "Analytics setup", "30 days support"],
      highlighted: true,
    },
    {
      name: "Store",
      price: "$2,490",
      description: "A full online store ready to sell.",
      features: ["Unlimited products", "Payments and shipping", "Custom design", "Performance tuning", "Training session", "90 days support"],
      highlighted: false,
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Common questions.",
  items: [
    { q: "How long does a website take?", a: "A landing page takes about a week; a full business site usually 3 to 4 weeks, depending on content and feedback speed." },
    { q: "Do I need to provide content?", a: "Ideally yes, but we can help with copywriting and sourcing images if you need it." },
    { q: "Will my site work on phones?", a: "Always. Every site is built mobile-first and tested on real devices." },
    { q: "Can I edit the site myself later?", a: "Yes. We can set up a simple editor so you can change text and images without code." },
    { q: "Do you offer hosting and maintenance?", a: "We can set up hosting and offer monthly maintenance plans covering updates, backups and security." },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Let's build something together.",
  description: "Tell us about your project and we will reply within one business day.",
  projectTypes: ["Business website", "Online store", "Landing page", "Redesign", "Maintenance", "Other"],
};

// Small UI strings used inside components
export const ui = {
  langLabel: "Language",
  nav: { openMenu: "Open menu", closeMenu: "Close menu", lightMode: "Switch to light mode", darkMode: "Switch to dark mode" },
  pricing: { popular: "Most popular", cta: "Get started" },
  form: {
    name: "Name",
    email: "Email",
    type: "Project type",
    message: "Message",
    select: "Select...",
    send: "Send message",
    sending: "Sending...",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errType: "Please choose a project type.",
    errMessage: "Please tell us a bit more (at least 10 characters).",
    errSend: "Something went wrong. Please try again or contact us on WhatsApp.",
    thanksTitle: "Thank you!",
    thanksText: "Your message has been sent. We will reply soon.",
    another: "Send another message",
  },
  footer: { rights: "All rights reserved.", contact: "Contact" },
  gallery: { close: "Close gallery", prev: "Previous image", next: "Next image", view: "View gallery", of: "of" },
};

export const en = { navLinks, navCta, hero, services, portfolio, process, skills, pricing, faq, contact, ui };
