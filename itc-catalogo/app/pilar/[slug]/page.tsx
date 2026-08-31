import { notFound } from "next/navigation";
import Link from "next/link";
import data from "@/content/content.json";
import SubtemaAcordeon from "@/components/SubtemaAcordeon";
import HerramientaCard from "@/components/HerramientaCard";

export default async function PilarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pilar = data.pilares.find((p) => p.slug === slug);

  if (!pilar) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="inline-block mb-8 font-pixel text-xs bg-white px-4 py-2 border-2 border-gray-900 pixel-shadow hover:pixel-shadow-hover transition-all uppercase"
      >
        &lt; Volver
      </Link>

      <div className="bg-white border-4 border-gray-900 p-6 md:p-10 mb-10 pixel-shadow">
        <h1 className="font-pixel text-2xl md:text-4xl uppercase mb-4 text-[#ff00ff]">
          {pilar.titulo}
        </h1>
        <p className="font-body text-xl md:text-2xl text-gray-800">
          {pilar.resumen}
        </p>
      </div>

      <div className="mb-12">
        <h2 className="font-pixel text-xl uppercase mb-6 bg-gray-900 text-white inline-block px-4 py-2">
          Temas
        </h2>
        <div className="space-y-4">
          {pilar.subtemas.map((subtema, idx) => (
            <SubtemaAcordeon key={idx} subtema={subtema} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-pixel text-xl uppercase mb-6 bg-[#ff00ff] text-white inline-block px-4 py-2">
          Recursos y Herramientas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pilar.recursos.map((recurso, idx) => (
            <HerramientaCard key={idx} recurso={recurso} />
          ))}
        </div>
      </div>
    </div>
  );
}
