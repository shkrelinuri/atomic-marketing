import { motion } from "framer-motion";

// Fades and slides children in when scrolled into view (plays once).
export default function Reveal({ children, delay = 0, y = 32, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
