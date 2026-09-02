"use client";

import { TrendingUp, BookOpen, Map, Bot, Award, Briefcase, Wrench } from "lucide-react";

export function SectionNav({ accent }: { accent: string }) {
  const sections = [
    { id: "analisis", label: "Análisis", icon: <TrendingUp size={13} /> },
    { id: "temas", label: "Temas", icon: <BookOpen size={13} /> },
    { id: "secciones", label: "Secciones", icon: <Map size={13} /> },
    { id: "ia", label: "IA Aplicada", icon: <Bot size={13} /> },
    { id: "cursos", label: "Cursos", icon: <Award size={13} /> },
    { id: "carreras", label: "Carreras", icon: <Briefcase size={13} /> },
    { id: "herramientas", label: "Herramientas", icon: <Wrench size={13} /> },
  ];
  return (
    <div className="glass rounded-xl border border-[var(--surface-border)] p-2 flex flex-wrap gap-1.5">
      {sections.map(s => (
        <a key={s.id} href={`#${s.id}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-white transition-all hover:shadow-sm"
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = accent; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}>
          {s.icon} {s.label}
        </a>
      ))}
    </div>
  );
}
