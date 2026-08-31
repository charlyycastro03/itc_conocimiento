"use client";

import { useState } from "react";
import data from "@/content/content.json";
import HerramientaCard from "@/components/HerramientaCard";

export default function HerramientasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Juntar todos los recursos de todos los pilares
  const todosLosRecursos = data.pilares.flatMap((pilar) => pilar.recursos);

  // Filtrar por término de búsqueda (nombre o descripción)
  const recursosFiltrados = todosLosRecursos.filter(
    (recurso) =>
      recurso.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recurso.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="bg-white border-4 border-gray-900 p-6 md:p-10 mb-10 pixel-shadow">
        <h1 className="font-pixel text-2xl md:text-4xl uppercase mb-4 text-[#ff00ff]">
          Directorio de Herramientas
        </h1>
        <p className="font-body text-xl md:text-2xl text-gray-800 mb-6">
          Encuentra todos los recursos, plataformas y herramientas mencionadas en el catálogo.
        </p>
        
        <input
          type="text"
          placeholder="BUSCAR HERRAMIENTA..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full font-pixel text-sm p-4 border-4 border-gray-900 focus:outline-none focus:border-[#ff00ff] bg-[#f0f4f8] placeholder-gray-500 uppercase"
        />
      </div>

      {recursosFiltrados.length === 0 ? (
        <div className="text-center font-pixel text-lg py-12 text-gray-600 uppercase bg-white border-4 border-gray-900 border-dashed">
          No se encontraron resultados
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recursosFiltrados.map((recurso, idx) => (
            <HerramientaCard key={idx} recurso={recurso} />
          ))}
        </div>
      )}
    </div>
  );
}
