"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapNode {
  titulo: string;
  nivel: string;
  duracion: string;
  orden: number;
}

interface Props {
  nodes: RoadmapNode[];
  accentColor?: string;
}

export function RoadmapVisual({ nodes, accentColor = 'var(--accent)' }: Props) {
  const getLevelBadgeClass = (nivel: string) => {
    const n = nivel.toLowerCase();
    if (n.includes('fundamento')) return 'badge-fundamentos';
    if (n.includes('intermedio')) return 'badge-intermedio';
    if (n.includes('avanzado')) return 'badge-avanzado';
    if (n.includes('especializa')) return 'badge-especializacion';
    return 'badge-fundamentos';
  };

  const getLevelColor = (nivel: string) => {
    const n = nivel.toLowerCase();
    if (n.includes('fundamento')) return '#10b981';
    if (n.includes('intermedio')) return '#3b82f6';
    if (n.includes('avanzado')) return '#8b5cf6';
    if (n.includes('especializa')) return '#f59e0b';
    return '#10b981';
  };

  return (
    <div className="relative py-8">
      <div className="roadmap-line" style={{ '--accent': accentColor } as React.CSSProperties} />
      
      <div className="flex flex-col gap-6">
        {nodes.map((node, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-12"
          >
            {/* Connector dot */}
            <div 
              className="absolute left-[15px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border-2 bg-[var(--bg)]"
              style={{ borderColor: getLevelColor(node.nivel) }}
            />
            
            <div 
              className="glass p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 glass-hover"
              style={{ borderLeft: `4px solid ${getLevelColor(node.nivel)}` }}
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-muted-foreground w-6 h-6 flex items-center justify-center rounded-full bg-[var(--surface-border)]">
                    {node.orden}
                  </span>
                  <span className={getLevelBadgeClass(node.nivel)}>
                    {node.nivel}
                  </span>
                </div>
                <h4 className="font-semibold text-lg">{node.titulo}</h4>
              </div>
              
              <div className="text-sm text-[var(--text-secondary)] font-medium flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {node.duracion}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
