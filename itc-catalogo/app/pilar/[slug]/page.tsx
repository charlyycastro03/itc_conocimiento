import { notFound } from "next/navigation";
import Link from "next/link";
import data from "@/content/content.json";
import SubtemaAcordeon from "@/components/SubtemaAcordeon";
import HerramientaCard from "@/components/HerramientaCard";
import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft, BookOpen, Wrench } from "lucide-react";

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
    <div className="max-w-4xl mx-auto py-4">
      <FadeIn delay={0.1}>
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-accent mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight relative z-10">
            {pilar.titulo}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
            {pilar.resumen}
          </p>
        </div>
      </FadeIn>

      <div className="mb-16">
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <BookOpen size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Temas principales
            </h2>
          </div>
        </FadeIn>
        
        <div className="space-y-4">
          {pilar.subtemas.map((subtema, idx) => (
            <FadeIn key={idx} delay={0.4 + idx * 0.1}>
              <SubtemaAcordeon subtema={subtema} />
            </FadeIn>
          ))}
        </div>
      </div>

      <div>
        <FadeIn delay={0.6}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Wrench size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Recursos y Herramientas
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pilar.recursos.map((recurso, idx) => (
            <FadeIn key={idx} delay={0.7 + idx * 0.1}>
              <HerramientaCard recurso={recurso} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
