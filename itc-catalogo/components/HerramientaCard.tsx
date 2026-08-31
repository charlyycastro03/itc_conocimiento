import { ExternalLink } from "lucide-react";

interface Recurso {
  nombre: string;
  url: string;
  descripcion: string;
}

export default function HerramientaCard({ recurso }: { recurso: Recurso }) {
  return (
    <div className="bg-white border-4 border-gray-900 p-4 flex flex-col gap-3 pixel-shadow h-full">
      <h3 className="font-pixel text-sm sm:text-base uppercase">
        {recurso.nombre}
      </h3>
      <p className="font-body text-base text-gray-700 flex-1">
        {recurso.descripcion}
      </p>
      <a
        href={recurso.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#44ff44] hover:bg-[#22dd22] text-black font-pixel text-xs px-4 py-2 border-2 border-gray-900 uppercase transition-colors"
      >
        <span>Explorar</span>
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
