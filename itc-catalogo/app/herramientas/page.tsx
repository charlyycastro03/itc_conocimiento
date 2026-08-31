"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, CheckCircle, Network, Server, Code2 } from "lucide-react";
import data from "@/content/content.json";

/* ────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */
type Curso = {
  nombre: string;
  plataforma: string;
  url: string;
  certificado: string;
  nivel: string;
  descripcion: string;
};

type PilarConCursos = (typeof data.pilares[0]) & { cursos?: Curso[] };

/* ────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────── */
const filters = [
  { id: "all", label: "Todos" },
  { id: "infraestructura-redes", label: "Redes", icon: <Network size={14} /> },
  { id: "servidores-virtualizacion", label: "Servidores", icon: <Server size={14} /> },
  { id: "programacion", label: "Programación", icon: <Code2 size={14} /> },
];

const pilarAccent: Record<string, string> = {
  "infraestructura-redes": "#0070f3",
  "servidores-virtualizacion": "#8b5cf6",
  "programacion": "#10b981",
};

/* ────────────────────────────────────────────────────────────
   COURSE CARD
───────────────────────────────────────────────────────────── */
function CursoCard({ curso, accentColor }: { curso: Curso & { pilarSlug: string }; accentColor: string }) {
  const isGratis = curso.certificado.toLowerCase().startsWith("gratuito");
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="glass rounded-xl p-5 border border-[var(--surface-border)] flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-snug">{curso.nombre}</h3>
        {isGratis ? (
          <span className="badge-free flex-shrink-0">✓ Gratis</span>
        ) : (
          <span className="badge-audit flex-shrink-0">Auditable</span>
        )}
      </div>

      <p className="mono-label mb-3">{curso.plataforma}</p>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">{curso.descripcion}</p>

      <div className="flex items-center justify-between pt-3 border-t border-[var(--surface-border)]">
        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
          <CheckCircle size={11} style={{ color: accentColor }} /> {curso.nivel}
        </span>
        <a
          href={curso.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: accentColor }}
        >
          Ir al curso <ExternalLink size={11} />
        </a>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function HerramientasPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Agrupar todos los cursos con el pilarSlug
  const allCursos: (Curso & { pilarSlug: string })[] = useMemo(() => {
    return (data.pilares as PilarConCursos[]).flatMap((pilar) =>
      (pilar.cursos ?? []).map((c) => ({ ...c, pilarSlug: pilar.slug }))
    );
  }, []);

  const filtered = useMemo(() => {
    return allCursos.filter((c) => {
      const matchFilter = activeFilter === "all" || c.pilarSlug === activeFilter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.nombre.toLowerCase().includes(q) ||
        c.plataforma.toLowerCase().includes(q) ||
        c.descripcion.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [allCursos, search, activeFilter]);

  return (
    <div className="relative">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-12">

        {/* Header */}
        <div className="space-y-3">
          <span className="mono-label">Directorio completo</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Herramientas y Cursos
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            {allCursos.length} cursos gratuitos o auditables de plataformas como Cisco, Harvard, Google, Microsoft, Meta y más.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="glass rounded-2xl p-6 border border-[var(--surface-border)] space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
            <input
              type="text"
              placeholder="Buscar por nombre, plataforma o descripción..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl glass border border-[var(--surface-border)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)] transition-all text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] bg-transparent"
            />
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    isActive
                      ? "bg-[var(--accent)] text-white border-transparent shadow"
                      : "glass border-[var(--surface-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {f.icon}
                  {f.label}
                </button>
              );
            })}
            <span className="ml-auto text-xs text-[var(--text-muted)] self-center">
              {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20 text-[var(--text-muted)]"
              >
                Sin resultados. Intenta con otro término.
              </motion.p>
            ) : (
              filtered.map((curso) => (
                <CursoCard
                  key={`${curso.pilarSlug}-${curso.nombre}`}
                  curso={curso}
                  accentColor={pilarAccent[curso.pilarSlug] ?? "var(--accent)"}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
