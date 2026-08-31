"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Subtema {
  titulo: string;
  descripcion: string;
}

export default function SubtemaAcordeon({
  subtema,
  accentColor = "var(--accent)",
}: {
  subtema: Subtema;
  accentColor?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`glass rounded-xl border border-[var(--surface-border)] overflow-hidden transition-all duration-200 ${isOpen ? "shadow-md" : ""}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] hover:bg-white/30 dark:hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-sm text-[var(--text-primary)] pr-4 leading-snug">{subtema.titulo}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-[var(--text-muted)] flex-shrink-0"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pb-5 pt-1 border-t border-[var(--surface-border)]"
              style={{ borderLeftColor: accentColor, borderLeftWidth: "2px" }}
            >
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">
                {subtema.descripcion}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
