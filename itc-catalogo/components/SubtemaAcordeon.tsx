"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Subtema {
  titulo: string;
  descripcion: string;
}

export default function SubtemaAcordeon({ subtema }: { subtema: Subtema }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-panel rounded-xl overflow-hidden transition-colors hover:bg-white/40 dark:hover:bg-slate-900/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 focus:outline-none"
      >
        <h3 className="font-semibold text-left text-slate-800 dark:text-slate-100 pr-4">
          {subtema.titulo}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-500 flex-shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-800/50 mt-2">
              <p className="leading-relaxed">
                {subtema.descripcion}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
