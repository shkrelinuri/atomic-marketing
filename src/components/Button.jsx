// Link-styled button with a sliding fill effect on hover.
// variant "primary": accent fill, slides to darker. "outline": slides to accent fill.
const variants = {
  primary: {
    base: "bg-accent text-white border-accent",
    fill: "bg-ink dark:bg-paper",
    hoverText: "dark:group-hover:text-ink",
  },
  outline: {
    base: "border-ink/20 text-ink dark:border-paper/25 dark:text-paper",
    fill: "bg-accent",
    hoverText: "group-hover:text-white dark:group-hover:text-white",
  },
};

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const v = variants[variant];
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-colors duration-300 ${v.base} ${className}`}
      {...props}
    >
      {/* Sliding fill layer */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 motion-reduce:transition-none ${v.fill}`}
      />
      <span className={`relative z-10 inline-flex items-center gap-2 transition-colors duration-300 ${v.hoverText}`}>
        {children}
      </span>
    </a>
  );
}
