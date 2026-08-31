"use client";

import { useState } from "react";
import data from "@/content/content.json";
import HerramientaCard from "@/components/HerramientaCard";
import { FadeIn } from "@/components/FadeIn";
import { Search, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HerramientasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const todosLosRecursos = data.pilares.flatMap((pilar) => pilar.recursos);

  const recursosFiltrados = todosLosRecursos.filter(
    (recurso) =>
      recurso.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recurso.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto py-8">
      <FadeIn delay={0.1}>
        <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          
          <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-accent mb-6 relative z-10">
            <Compass size={32} />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">
            Directorio de Herramientas
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            Explora todos los recursos, plataformas y herramientas mencionadas en el catálogo. Usa el buscador para encontrar lo que necesitas.
          </p>
          
          <div className="relative max-w-xl mx-auto z-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Buscar herramienta por nombre o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
            />
          </div>
        </div>
      </FadeIn>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {recursosFiltrados.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-20 text-center"
            >
              <p className="text-lg text-slate-500">No se encontraron herramientas que coincidan con tu búsqueda.</p>
            </motion.div>
          ) : (
            recursosFiltrados.map((recurso, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={recurso.nombre}
              >
                <HerramientaCard recurso={recurso} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
