"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, BookOpen } from 'lucide-react';

interface Tema {
  titulo: string;
  descripcion: string;
}

interface Recurso {
  nombre: string;
  url: string;
}

interface SeccionProps {
  seccion: {
    titulo: string;
    descripcion: string;
    nivel: string;
    temas: Tema[];
    recursosAdicionales: Recurso[];
  };
  accentColor?: string;
  numero: number;
}

export function SeccionEstudio({ seccion, accentColor = 'var(--accent)', numero }: SeccionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getLevelBadgeClass = (nivel: string) => {
    const n = nivel.toLowerCase();
    if (n.includes('fundamento')) return 'badge-fundamentos';
    if (n.includes('intermedio')) return 'badge-intermedio';
    if (n.includes('avanzado')) return 'badge-avanzado';
    if (n.includes('especializa')) return 'badge-especializacion';
    return 'badge-fundamentos';
  };

  return (
    <div className="glass rounded-xl overflow-hidden mb-4 border border-[var(--surface-border)]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--bg-secondary)] transition-colors focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            {numero}
          </div>
          <div>
            <h3 className="font-bold text-lg">{seccion.titulo}</h3>
            <div className="mt-1">
              <span className={getLevelBadgeClass(seccion.nivel)}>{seccion.nivel}</span>
            </div>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-[var(--surface-border)] mt-2">
              <p className="text-[var(--text-secondary)] mb-6 mt-4">
                {seccion.descripcion}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Temas Principales
                  </h4>
                  <ul className="space-y-3 pl-2">
                    {seccion.temas.map((tema, i) => (
                      <li key={i} className="relative pl-5">
                        <div 
                          className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span className="font-bold text-[var(--text-primary)] block mb-0.5">{tema.titulo}</span>
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed block">{tema.descripcion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {seccion.recursosAdicionales && seccion.recursosAdicionales.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                      Recursos Adicionales
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {seccion.recursosAdicionales.map((recurso, i) => (
                        <a 
                          key={i} 
                          href={recurso.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--surface-border)] hover:border-[color:var(--accent)] transition-colors"
                        >
                          {recurso.nombre}
                          <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
