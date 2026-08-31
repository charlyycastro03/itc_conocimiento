import Image from "next/image";
import { Wrench } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import data from "@/content/content.json";
import SubtemaAcordeon from "@/components/SubtemaAcordeon";
import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft, BookOpen, Award, ExternalLink, CheckCircle } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   CONFIG POR PILAR
───────────────────────────────────────────────────────────── */
const pilarConfig: Record<string, {
  accent: string;
  gradient: string;
  img: string;
  textGradientClass: string;
}> = {
  "infraestructura-redes": {
    accent: "#0070f3",
    gradient: "from-blue-500/10 to-cyan-500/5",
    img: "/diagram_redes.png",
    textGradientClass: "text-gradient-blue",
  },
  "servidores-virtualizacion": {
    accent: "#8b5cf6",
    gradient: "from-purple-500/10 to-violet-500/5",
    img: "/diagram_servidores.png",
    textGradientClass: "text-gradient-purple",
  },
  "programacion": {
    accent: "#10b981",
    gradient: "from-emerald-500/10 to-teal-500/5",
    img: "/diagram_programacion.png",
    textGradientClass: "text-gradient-emerald",
  },
};

/* ────────────────────────────────────────────────────────────
   CURSO CARD
───────────────────────────────────────────────────────────── */
function CursoCard({
  curso,
  accentColor,
}: {
  curso: { nombre: string; plataforma: string; url: string; certificado: string; nivel: string; descripcion: string };
  accentColor: string;
}) {
  const isGratis = curso.certificado.toLowerCase().startsWith("gratuito");
  return (
    <div className="glass rounded-xl p-5 border border-[var(--surface-border)] hover:border-[var(--surface-border)] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-snug">{curso.nombre}</h3>
        {isGratis ? (
          <span className="badge-free flex-shrink-0">✓ Gratis</span>
        ) : (
          <span className="badge-audit flex-shrink-0">Auditable</span>
        )}
      </div>

      <p className="mono-label mb-2">{curso.plataforma}</p>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">{curso.descripcion}</p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--surface-border)]">
        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
          <CheckCircle size={11} style={{ color: accentColor }} /> {curso.nivel}
        </span>
        <a
          href={curso.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80"
          style={{ color: accentColor }}
        >
          Ir al curso <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default async function PilarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pilar = data.pilares.find((p) => p.slug === slug);
  if (!pilar) notFound();

  const cfg = pilarConfig[pilar.slug] ?? pilarConfig["programacion"];
  type PilarExtra = typeof pilar & {
    cursos?: { nombre: string; plataforma: string; url: string; certificado: string; nivel: string; descripcion: string }[];
    herramientas?: { nombre: string; url: string; descripcion: string; tipo: string; plataforma: string }[];
  };
  const pilarExtra = pilar as PilarExtra;
  const cursos      = pilarExtra.cursos      ?? [];
  const herramientas = pilarExtra.herramientas ?? [];

  return (
    <div className="relative">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
      <div className="relative max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Back */}
        <FadeIn delay={0}>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Inicio
          </Link>
        </FadeIn>

        {/* ── HERO PILAR ── */}
        <FadeIn delay={0.1}>
          <div className={`glass rounded-3xl overflow-hidden border border-[var(--surface-border)]`}>
            {/* Imagen técnica del pilar */}
            <div className={`relative h-56 sm:h-72 bg-gradient-to-br ${cfg.gradient}`}>
              <Image
                src={cfg.img}
                alt={`Diagrama de ${pilar.titulo}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-8 md:p-12">
              <span className="mono-label mb-4 block">Pilar del ITC</span>
              <h1 className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${cfg.textGradientClass}`}>
                {pilar.titulo}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">{pilar.resumen}</p>
            </div>
          </div>
        </FadeIn>

        {/* ── TEMAS ── */}
        <section>
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ background: cfg.accent }}>
                <BookOpen size={18} />
              </div>
              <div>
                <span className="mono-label">Contenido del módulo</span>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Temas principales</h2>
              </div>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {pilar.subtemas.map((subtema, idx) => (
              <FadeIn key={idx} delay={0.3 + idx * 0.08}>
                <SubtemaAcordeon subtema={subtema} accentColor={cfg.accent} />
              </FadeIn>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── CURSOS ── */}
        <section>
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ background: cfg.accent }}>
                <Award size={18} />
              </div>
              <div>
                <span className="mono-label">Certificados y plataformas</span>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Cursos gratuitos recomendados</h2>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-6 ml-12">
              Todos los recursos son gratuitos o auditables sin costo. Los marcados con ✓ Gratis otorgan un certificado oficial sin pagar.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cursos.map((curso, idx) => (
              <FadeIn key={idx} delay={0.5 + idx * 0.07}>
                <CursoCard curso={curso} accentColor={cfg.accent} />
              </FadeIn>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ── HERRAMIENTAS ── */}
        {herramientas.length > 0 && (
          <section>
            <FadeIn delay={0.6}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ background: cfg.accent }}>
                  <Wrench size={18} />
                </div>
                <div>
                  <span className="mono-label">Software gratuito para practicar</span>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Herramientas de práctica</h2>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6 ml-12">
                Software real y gratuito que usarás en el trabajo. Descárgalo, instálalo y practica en tu propia máquina.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {herramientas.map((h, idx) => (
                <FadeIn key={idx} delay={0.7 + idx * 0.07}>
                  <div className="glass rounded-xl p-5 border border-[var(--surface-border)] flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-snug">{h.nombre}</h3>
                      <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium" style={{ color: cfg.accent, borderColor: `${cfg.accent}33`, background: `${cfg.accent}12` }}>
                        {h.tipo}
                      </span>
                    </div>
                    <p className="mono-label mb-3">{h.plataforma}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">{h.descripcion}</p>
                    <div className="pt-3 border-t border-[var(--surface-border)]">
                      <a href={h.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-80"
                        style={{ background: cfg.accent }}>
                        Descargar / Abrir <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
