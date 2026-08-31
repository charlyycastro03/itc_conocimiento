import Link from "next/link";
import { Server, Network, Code2, ArrowRight } from "lucide-react";

interface Pilar {
  slug: string;
  titulo: string;
  resumen: string;
}

const icons: Record<string, React.ReactNode> = {
  "infraestructura-redes": <Network size={40} className="text-blue-500 dark:text-blue-400" strokeWidth={1.5} />,
  "servidores-virtualizacion": <Server size={40} className="text-purple-500 dark:text-purple-400" strokeWidth={1.5} />,
  "programacion": <Code2 size={40} className="text-emerald-500 dark:text-emerald-400" strokeWidth={1.5} />,
};

const gradients: Record<string, string> = {
  "infraestructura-redes": "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
  "servidores-virtualizacion": "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
  "programacion": "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
};

export default function PilarCard({ pilar }: { pilar: Pilar }) {
  return (
    <Link href={`/pilar/${pilar.slug}`} className="block h-full group">
      <div className="glass-panel p-8 rounded-2xl flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:hover:shadow-blue-900/20 overflow-hidden relative">
        
        {/* Decorative background blob */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${gradients[pilar.slug]} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />

        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6 relative z-10 border border-slate-100 dark:border-slate-700">
          {icons[pilar.slug]}
        </div>
        
        <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100 relative z-10">
          {pilar.titulo}
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1 relative z-10">
          {pilar.resumen}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-semibold text-accent dark:text-accent-hover group-hover:gap-2 transition-all relative z-10">
          <span>Explorar módulo</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
