import Link from "next/link";
import { Server, Network, Code2 } from "lucide-react";

interface Pilar {
  slug: string;
  titulo: string;
  resumen: string;
}

const icons: Record<string, React.ReactNode> = {
  "infraestructura-redes": <Network size={48} strokeWidth={1.5} />,
  "servidores-virtualizacion": <Server size={48} strokeWidth={1.5} />,
  "programacion": <Code2 size={48} strokeWidth={1.5} />,
};

export default function PilarCard({ pilar }: { pilar: Pilar }) {
  return (
    <Link href={`/pilar/${pilar.slug}`} className="block">
      <div className="bg-white border-4 border-gray-900 p-6 flex flex-col items-center text-center gap-4 pixel-shadow hover:pixel-shadow-hover active:pixel-shadow-active transition-all cursor-pointer h-full">
        <div className="bg-[#f0f4f8] p-4 border-2 border-gray-900">
          {icons[pilar.slug]}
        </div>
        <h2 className="font-pixel text-lg sm:text-xl uppercase leading-relaxed text-[#2d3748]">
          {pilar.titulo}
        </h2>
        <p className="font-body text-base sm:text-lg text-gray-700 leading-tight">
          {pilar.resumen}
        </p>
        <div className="mt-auto pt-4">
          <span className="inline-block bg-[#ff00ff] text-white font-pixel text-xs px-3 py-2 border-2 border-gray-900 uppercase">
            Seleccionar &gt;
          </span>
        </div>
      </div>
    </Link>
  );
}
