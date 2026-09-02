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

  const getObservacionStyle = (tipo: string) => {
    switch (tipo.toLowerCase()) {
      case 'tip':
        return { icon: <Lightbulb className="w-5 h-5 text-green-500" />, borderColor: 'border-green-500' };
      case 'warning':
        return { icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, borderColor: 'border-amber-500' };
      case 'important':
        return { icon: <Info className="w-5 h-5 text-blue-500" />, borderColor: 'border-blue-500' };
      default:
        return { icon: <Info className="w-5 h-5 text-gray-500" />, borderColor: 'border-gray-500' };
    }
  };

  return (
    <motion.div 
      className="glass rounded-2xl p-6 md:p-8 space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants}>
        <div className="border-l-4 pl-4 italic text-lg text-[var(--text-primary)]" style={{ borderColor: accentColor }}>
          "{analisis.importancia}"
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
        {analisis.estadisticas.map((stat, i) => (
          <div key={i} className="p-5 rounded-xl border border-[var(--surface-border)]" style={{ backgroundColor: `${accentColor}10` }}>
            <div className="text-3xl font-black mb-1" style={{ color: accentColor }}>{stat.valor}</div>
            <div className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">{stat.dato}</div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-2">
          Tendencias 2026
        </h4>
        <div className="flex flex-wrap gap-3">
          {analisis.tendencias2026.map((tendencia, i) => (
            <motion.span 
              key={i} 
              variants={itemVariants}
              className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-[var(--surface)] border border-[var(--surface-border)] rounded-full shadow-sm"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accentColor }}>
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              {tendencia}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-3">
        {analisis.observaciones.map((obs, i) => {
          const style = getObservacionStyle(obs.tipo);
          return (
            <div key={i} className={`flex gap-3 items-start p-4 rounded-lg bg-[var(--bg)] border border-[var(--surface-border)] border-l-4 ${style.borderColor}`}>
              <div className="mt-0.5">{style.icon}</div>
              <p className="text-sm text-[var(--text-secondary)]">{obs.texto}</p>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
