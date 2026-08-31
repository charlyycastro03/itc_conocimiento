"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, CheckCircle, Network, Server, Code2, BookOpen, Wrench } from "lucide-react";
import data from "@/content/content.json";

/* ────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */
type Curso = {
  nombre: string; plataforma: string; url: string;
  certificado: string; nivel: string; descripcion: string;
};
type Herramienta = {
  nombre: string; url: string; descripcion: string; tipo: string; plataforma: string;
};
type PilarFull = (typeof data.pilares[0]) & {
  cursos?: Curso[];
  herramientas?: Herramienta[];
};

/* ────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────── */
const pilarFilters = [
  { id: "all", label: "Todos" },
  { id: "infraestructura-redes",    label: "Redes",         icon: <Network size={13} /> },
  { id: "servidores-virtualizacion", label: "Servidores",   icon: <Server  size={13} /> },
  { id: "programacion",              label: "Programación", icon: <Code2   size={13} /> },
];

const pilarAccent: Record<string, string> = {
  "infraestructura-redes":    "#0070f3",
  "servidores-virtualizacion":"#8b5cf6",
  "programacion":             "#10b981",
};

const tabs = [
  { id: "cursos",       label: "Cursos y Certificaciones", icon: <BookOpen size={15} /> },
  { id: "herramientas", label: "Herramientas de Práctica",  icon: <Wrench  size={15} /> },
];

/* ────────────────────────────────────────────────────────────
   CURSO CARD
───────────────────────────────────────────────────────────── */
function CursoCard({ curso, accentColor }: { curso: Curso & { pilarSlug: string }; accentColor: string }) {
  const isGratis = curso.certificado.toLowerCase().startsWith("gratuito");
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.2 }}
      className="glass rounded-xl p-5 border border-[var(--surface-border)] flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-snug">{curso.nombre}</h3>
        {isGratis
          ? <span className="badge-free flex-shrink-0">✓ Gratis</span>
          : <span className="badge-audit flex-shrink-0">Auditable</span>}
      </div>
      <p className="mono-label mb-3">{curso.plataforma}</p>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">{curso.descripcion}</p>
      <div className="flex items-center justify-between pt-3 border-t border-[var(--surface-border)]">
        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
          <CheckCircle size={11} style={{ color: accentColor }} /> {curso.nivel}
        </span>
        <a href={curso.url} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold hover:opacity-70 transition-opacity"
          style={{ color: accentColor }}>
          Ir al curso <ExternalLink size={11} />
        </a>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   HERRAMIENTA CARD
───────────────────────────────────────────────────────────── */
function HerramientaCard({ h, accentColor }: { h: Herramienta & { pilarSlug: string }; accentColor: string }) {
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.2 }}
      className="glass rounded-xl p-5 border border-[var(--surface-border)] flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-snug">{h.nombre}</h3>
        <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium"
          style={{ color: accentColor, borderColor: `${accentColor}33`, background: `${accentColor}12` }}>
          {h.tipo}
        </span>
      </div>
      <p className="mono-label mb-3">{h.plataforma}</p>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">{h.descripcion}</p>
      <div className="pt-3 border-t border-[var(--surface-border)]">
        <a href={h.url} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors text-white"
          style={{ background: accentColor }}>
          Descargar / Abrir <ExternalLink size={11} />
        </a>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function HerramientasPage() {
  const [activeTab,    setActiveTab]    = useState<"cursos" | "herramientas">("cursos");
  const [activeFilter, setActiveFilter] = useState("all");
  const [search,       setSearch]       = useState("");

  const allCursos: (Curso & { pilarSlug: string })[] = useMemo(() =>
    (data.pilares as PilarFull[]).flatMap(p => (p.cursos ?? []).map(c => ({ ...c, pilarSlug: p.slug }))), []);

  const allHerramientas: (Herramienta & { pilarSlug: string })[] = useMemo(() =>
    (data.pilares as PilarFull[]).flatMap(p => (p.herramientas ?? []).map(h => ({ ...h, pilarSlug: p.slug }))), []);

  const filteredCursos = useMemo(() => allCursos.filter(c => {
    const matchPilar = activeFilter === "all" || c.pilarSlug === activeFilter;
    const q = search.toLowerCase();
    return matchPilar && (!q || c.nombre.toLowerCase().includes(q) || c.plataforma.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q));
  }), [allCursos, activeFilter, search]);

  const filteredHerramientas = useMemo(() => allHerramientas.filter(h => {
    const matchPilar = activeFilter === "all" || h.pilarSlug === activeFilter;
    const q = search.toLowerCase();
    return matchPilar && (!q || h.nombre.toLowerCase().includes(q) || h.tipo.toLowerCase().includes(q) || h.descripcion.toLowerCase().includes(q));
  }), [allHerramientas, activeFilter, search]);

  const currentItems   = activeTab === "cursos" ? filteredCursos : filteredHerramientas;
  const totalCursos    = allCursos.length;
  const totalHerram    = allHerramientas.length;

  return (
    <div className="relative">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-16 space-y-8 sm:space-y-10">

        {/* ── HEADER ── */}
        <div className="space-y-3">
          <span className="mono-label">Directorio completo</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Cursos y Herramientas
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            Todo lo que necesitas para aprender y practicar, clasificado y verificado. Sin costo.
          </p>
        </div>

        {/* ── TABS ── */}
        <div className="glass rounded-2xl p-4 sm:p-6 border border-[var(--surface-border)] space-y-5">

          {/* Tab switcher */}
          <div className="flex flex-col sm:flex-row gap-2 p-1 glass rounded-xl border border-[var(--surface-border)] w-full sm:w-fit">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              const count = tab.id === "cursos" ? totalCursos : totalHerram;
              return (
                <button key={tab.id}
                  onClick={() => { setActiveTab(tab.id as "cursos" | "herramientas"); setSearch(""); setActiveFilter("all"); }}
                  className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}>
                  {tab.icon}
                  {tab.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${isActive ? "bg-white/20 text-white" : "bg-[var(--surface-border)] text-[var(--text-muted)]"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={17} />
            <input type="text"
              placeholder={activeTab === "cursos" ? "Buscar curso, plataforma..." : "Buscar herramienta, tipo..."}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl glass border border-[var(--surface-border)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)] transition-all text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] bg-transparent"
            />
          </div>

          {/* Pilar filter pills */}
          <div className="flex gap-2 flex-wrap items-center">
            {pilarFilters.map(f => {
              const isActive = activeFilter === f.id;
              return (
                <button key={f.id} onClick={() => setActiveFilter(f.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    isActive
                      ? "bg-[var(--accent)] text-white border-transparent shadow"
                      : "glass border-[var(--surface-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}>
                  {f.icon} {f.label}
                </button>
              );
            })}
            <span className="ml-auto text-xs text-[var(--text-muted)]">
              {currentItems.length} resultado{currentItems.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* ── DESCRIPTION BANNER ── */}
        <AnimatePresence mode="wait">
          {activeTab === "herramientas" && (
            <motion.div key="banner-herr" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="glass rounded-xl p-4 border border-[var(--surface-border)] flex items-start gap-3">
              <Wrench size={18} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Herramientas de práctica gratuitas</strong> — Software real que usarás en el trabajo. Descárgalas, instálalas y practica en tu propia máquina.
              </p>
            </motion.div>
          )}
          {activeTab === "cursos" && (
            <motion.div key="banner-curso" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="glass rounded-xl p-4 border border-[var(--surface-border)] flex items-start gap-3">
              <BookOpen size={18} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Cursos y certificaciones</strong> — Los marcados con <span className="badge-free mx-1">✓ Gratis</span> otorgan certificado oficial sin costo. Los <span className="badge-audit mx-1">Auditables</span> permiten acceder al contenido sin pagar.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── GRID ── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {currentItems.length === 0 ? (
              <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="col-span-full text-center py-20 text-[var(--text-muted)]">
                Sin resultados. Intenta con otro término o filtro.
              </motion.p>
            ) : activeTab === "cursos"
              ? filteredCursos.map(c => (
                  <CursoCard key={`${c.pilarSlug}-${c.nombre}`} curso={c} accentColor={pilarAccent[c.pilarSlug] ?? "var(--accent)"} />
                ))
              : filteredHerramientas.map(h => (
                  <HerramientaCard key={`${h.pilarSlug}-${h.nombre}`} h={h} accentColor={pilarAccent[h.pilarSlug] ?? "var(--accent)"} />
                ))
            }
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
