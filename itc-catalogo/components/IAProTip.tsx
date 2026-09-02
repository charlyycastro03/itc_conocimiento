import React from 'react';
import { Bot, Sparkles, ExternalLink, GraduationCap, CheckCircle2 } from 'lucide-react';

interface IAProps {
  iaAplicada: {
    descripcion: string;
    herramientas: { nombre: string; descripcion: string; url: string }[];
    casosDeUso: string[];
    reglaDeOro: string;
    cursos: { nombre: string; plataforma: string; url: string; certificado: string }[];
  };
  accentColor?: string;
}

export function IAProTip({ iaAplicada, accentColor = 'var(--accent)' }: IAProps) {
  return (
    <div className="relative glass rounded-2xl p-[2px] overflow-hidden group">
      {/* Animated gradient border background */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${accentColor}, #f59e0b)` }} />
      
      <div className="relative bg-[var(--bg)] rounded-[14px] p-6 h-full border border-[var(--surface-border)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/10 to-indigo-500/10">
            <Bot className="w-6 h-6 text-amber-500" />
          </div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            IA Aplicada
            <Sparkles className="w-4 h-4 text-amber-500" />
          </h3>
        </div>

        <p className="text-[var(--text-secondary)] mb-6 text-sm">
          {iaAplicada.descripcion}
        </p>

        <div className="ia-highlight mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Regla de Oro
          </div>
          <p className="italic font-medium text-[var(--text-primary)]">
            "{iaAplicada.reglaDeOro}"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              Herramientas Clave
            </h4>
            <div className="space-y-3">
              {iaAplicada.herramientas.map((tool, i) => (
                <a 
                  key={i}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg border border-[var(--surface-border)] bg-[var(--bg-secondary)] hover:border-amber-500/50 transition-colors"
                >
                  <div className="font-bold text-sm mb-1 flex items-center justify-between">
                    {tool.nombre}
                    <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">{tool.descripcion}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
              Casos de Uso
            </h4>
            <ul className="space-y-2">
              {iaAplicada.casosDeUso.map((caso, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="font-bold text-amber-500 shrink-0">{i + 1}.</span>
                  <span>{caso}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {iaAplicada.cursos && iaAplicada.cursos.length > 0 && (
          <div className="pt-4 border-t border-[var(--surface-border)]">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Formación Recomendada
            </h4>
            <div className="space-y-2">
              {iaAplicada.cursos.map((curso, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded bg-[var(--surface)] border border-[var(--surface-border)]">
                  <div className="flex flex-col">
                    <a href={curso.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-amber-500 transition-colors flex items-center gap-1.5">
                      {curso.nombre} <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-xs text-[var(--text-muted)]">{curso.plataforma}</span>
                  </div>
                  {curso.certificado && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                      <CheckCircle2 className="w-3 h-3" /> {curso.certificado}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
