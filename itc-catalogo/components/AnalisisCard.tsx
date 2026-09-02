"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, AlertTriangle, Info } from 'lucide-react';

interface Observacion {
  tipo: string;
  texto: string;
}

interface AnalisisProps {
  analisis: {
    importancia: string;
    estadisticas: { dato: string; valor: string }[];
    tendencias2026: string[];
    observaciones: Observacion[];
  };
  accentColor?: string;
}

export function AnalisisCard({ analisis, accentColor = 'var(--accent)' }: AnalisisProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  const getIcon = (tipo: string) => {
    switch(tipo.toLowerCase()) {
      case 'tip': return <Lightbulb className="w-5 h-5 text-yellow-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'important': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <motion.div 
      className="glass rounded-2xl p-6 md:p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <span className="w-2 h-6 rounded-full" style={{ background: accentColor }} />
          Análisis del Mercado
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">{analisis.importancia}</p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
        {analisis.estadisticas.map((stat, i) => (
          <div key={i} className="bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--surface-border)]">
            <div className="text-2xl font-black mb-1" style={{ color: accentColor }}>{stat.valor}</div>
            <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">{stat.dato}</div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
          Tendencias 2026
        </h4>
        <div className="flex flex-wrap gap-2">
          {analisis.tendencias2026.map((tendencia, i) => (
            <span key={i} className="text-xs font-medium px-3 py-1.5 bg-[var(--surface-border)] rounded-full">
              {tendencia}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-3">
        {analisis.observaciones.map((obs, i) => (
          <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-[var(--bg)] border border-[var(--surface-border)]">
            <div className="mt-0.5">{getIcon(obs.tipo)}</div>
            <p className="text-sm text-[var(--text-secondary)]">{obs.texto}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
