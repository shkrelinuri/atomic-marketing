// Single source of truth for all site content. Edit text here.

export const site = {
  name: "Atomic Marketing",
  brand: "Atomic Marketing",
  email: "hello@atomicmarketing.com",
  socials: [
    { label: "GitHub", icon: "Github", href: "https://github.com/" },
    { label: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/" },
    { label: "Instagram", icon: "Instagram", href: "https://instagram.com/" },
    { label: "Twitter", icon: "Twitter", href: "https://twitter.com/" },
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
  description: "From a first landing page to a full online store, we handle design, development and launch.",
  items: [
    { icon: "Globe", title: "Business websites", description: "Professional, fast sites that explain what you do and turn visitors into customers." },
    { icon: "ShoppingCart", title: "Online stores", description: "Secure e-commerce with easy product management, payments and shipping set up." },
    { icon: "Rocket", title: "Landing pages", description: "Focused single pages built to convert for campaigns, launches and events." },
    { icon: "RefreshCw", title: "Redesigns", description: "Give an outdated site a modern look, better usability and faster load times." },
    { icon: "Wrench", title: "Maintenance", description: "Updates, backups, security and small changes so your site stays healthy." },
    { icon: "Gauge", title: "Speed and SEO", description: "Performance tuning and search-friendly structure so people can find you." },
  ],
};

// Screenshots live in /public/projects. Add a JPG named after each `image` value below.
export const portfolio = {
  eyebrow: "Selected work",
  title: "Projects we are proud of.",
  description: "A selection of websites and apps we have built.",
  projects: [
    {
      title: "Chess Game",
      description: "Play chess online in the browser with a clean, responsive board.",
      image: "projects/chess-game.jpg",
      tags: ["TypeScript", "React"],
      href: "https://chess-game-nuri20.vercel.app",
    },
    {
      title: "Online Store",
      description: "E-commerce site with product listings, cart and checkout flow.",
      image: "projects/online-store.jpg",
      tags: ["JavaScript", "React"],
      href: "https://github.com/shkrelinuri/Online-store",
    },
    {
      title: "MERN Blog",
      description: "Full-stack blog platform with posts, authentication and an admin area.",
      image: "projects/mern-blog.jpg",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      href: "https://github.com/shkrelinuri/mern-blog",
    },
    {
      title: "Resume Score App",
      description: "Upload a resume and get an instant score with improvement tips.",
      image: "projects/resume-score-app.jpg",
      tags: ["JavaScript", "React"],
      href: "https://github.com/shkrelinuri/resume-score-app",
    },
    {
      title: "Music App",
      description: "Music player to browse, search and play your favorite tracks.",
      image: "projects/music-app.jpg",
      tags: ["JavaScript", "React"],
      href: "https://github.com/shkrelinuri/music-app",
    },
    {
      title: "Inventory System",
      description: "Dashboard to track stock, products and inventory levels.",
      image: "projects/inventory.jpg",
      tags: ["JavaScript", "Node.js"],
      href: "https://github.com/shkrelinuri/inventory",
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
      price: "$790",
      description: "A polished landing page to get you online.",
      features: ["1 page", "Responsive design", "Contact form", "Basic SEO", "1 week delivery"],
      highlighted: false,
    },
    {
      name: "Business",
      price: "$1,990",
      description: "A complete website for a growing business.",
      features: ["Up to 6 pages", "Custom design", "CMS integration", "Advanced SEO", "Analytics setup", "30 days support"],
      highlighted: true,
    },
    {
      name: "Store",
      price: "$3,900",
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
