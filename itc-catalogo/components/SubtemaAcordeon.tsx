"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Subtema {
  titulo: string;
  descripcion: string;
}

export default function SubtemaAcordeon({ subtema }: { subtema: Subtema }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 border-gray-900 bg-white mb-4 pixel-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-[#f0f4f8] hover:bg-[#e2e8f0] transition-colors focus:outline-none"
      >
        <h3 className="font-pixel text-sm sm:text-base text-left uppercase pr-4">
          {subtema.titulo}
        </h3>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      
      {isOpen && (
        <div className="p-4 border-t-4 border-gray-900 bg-white animate-in slide-in-from-top-2">
          <p className="font-body text-lg text-gray-800 leading-relaxed">
            {subtema.descripcion}
          </p>
        </div>
      )}
    </div>
  );
}
