import React from 'react';
import { Briefcase, TrendingUp, Award, Zap } from 'lucide-react';

interface RutaProps {
  ruta: {
    titulo: string;
    descripcion: string;
    salarioEstimado: string;
    demanda: string;
    certificacionesClave: string[];
    habilidadesRequeridas: string[];
  };
  accentColor?: string;
}

export function RutaCarreraCard({ ruta, accentColor = 'var(--accent)' }: RutaProps) {
  const demandaValue = ruta.demanda.toLowerCase().includes('muy alta') ? '95%' : 
                       ruta.demanda.toLowerCase().includes('alta') ? '75%' : '50%';

  return (
    <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-[var(--surface-border)] hover:border-[color:var(--accent)]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Briefcase className="w-5 h-5" style={{ color: accentColor }} />
            {ruta.titulo}
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">{ruta.descripcion}</p>
        </div>
        <div 
          className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
          style={{ backgroundColor: accentColor }}
        >
          {ruta.salarioEstimado}
        </div>
      </div>

      <div className="mb-5">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Demanda
          </span>
          <span className="text-xs font-bold">{ruta.demanda}</span>
        </div>
        <div className="demanda-bar">
          <div className="demanda-fill" style={{ width: demandaValue, backgroundColor: accentColor }} />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1 mb-2">
            <Award className="w-3 h-3" /> Certificaciones
          </h4>
          <div className="flex flex-wrap gap-2">
            {ruta.certificacionesClave.map((cert, i) => (
              <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-sm">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1 mb-2">
            <Zap className="w-3 h-3" /> Habilidades
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {ruta.habilidadesRequeridas.map((hab, i) => (
              <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded text-[var(--text-secondary)] bg-[var(--bg-secondary)]">
                {hab}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
