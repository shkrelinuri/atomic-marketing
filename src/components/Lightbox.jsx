import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const src = (path) => `${import.meta.env.BASE_URL}${path}`;

// Fullscreen image gallery for one project: arrows, thumbnails, swipe, keyboard, focus trap.
export default function Lightbox({ project, labels, onClose }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const count = project.images.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  // Lock page scroll, focus the dialog, and restore focus on close
  useEffect(() => {
    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Tab") {
        // Keep focus inside the dialog
        const items = dialogRef.current?.querySelectorAll("button, a[href]");
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const navBtn =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-accent";

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex flex-col bg-black/95 text-white"
      onClick={onClose}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold sm:text-xl">{project.title}</h3>
          <p className="text-sm text-white/60">
            {index + 1} {labels.of} {count}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main image */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
        {count > 1 && (
          <button type="button" onClick={prev} aria-label={labels.prev} className={`${navBtn} left-2 sm:left-4`}>
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
        )}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={src(project.images[index])}
            alt={`${project.title} ${index + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            drag={count > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) prev();
              else if (info.offset.x < -80) next();
            }}
            className="max-h-full max-w-full select-none rounded-lg object-contain"
            draggable={false}
          />
        </AnimatePresence>
        {count > 1 && (
          <button type="button" onClick={next} aria-label={labels.next} className={`${navBtn} right-2 sm:right-4`}>
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto px-4 py-4" onClick={(e) => e.stopPropagation()}>
          {project.images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${project.title} ${i + 1}`}
              aria-current={i === index}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all sm:h-16 sm:w-24 ${
                i === index ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={src(img)} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
