import { ExternalLink } from "lucide-react";

interface Recurso {
  nombre: string;
  url: string;
  descripcion: string;
}

export default function HerramientaCard({ recurso }: { recurso: Recurso }) {
  return (
    <div className="glass-panel p-6 rounded-xl flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
          {recurso.nombre}
        </h3>
        <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
          <ExternalLink size={18} />
        </div>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
        {recurso.descripcion}
      </p>
      
      <a
        href={recurso.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center bg-accent hover:bg-accent-hover text-white py-2.5 rounded-lg font-medium transition-colors text-sm"
      >
        Abrir recurso
      </a>
    </div>
  );
}
