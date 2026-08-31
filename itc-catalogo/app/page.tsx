import data from "@/content/content.json";
import PilarCard from "@/components/PilarCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-12 py-10">
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="font-pixel text-3xl sm:text-5xl uppercase leading-tight bg-white inline-block px-4 py-2 border-4 border-gray-900 pixel-shadow">
          Elige tu clase
        </h1>
        <p className="font-body text-xl sm:text-2xl text-gray-800 bg-white/80 p-2 border-2 border-gray-900 mx-auto max-w-2xl">
          Explora los 3 pilares de Ingeniería en Tecnologías Computacionales y descubre tu camino.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {data.pilares.map((pilar) => (
          <PilarCard key={pilar.slug} pilar={pilar} />
        ))}
      </div>
    </div>
  );
}
