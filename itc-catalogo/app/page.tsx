"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Network, Server, Code2, CheckCircle, ArrowRight, BookOpen, Zap, Award, Globe } from "lucide-react";
import data from "@/content/content.json";

/* ────────────────────────────────────────────────────────────
   CONFIG POR PILAR
───────────────────────────────────────────────────────────── */
const pilarConfig: Record<string, {
  icon: React.ReactNode;
  gradient: string;
  glow: string;
  accentColor: string;
  borderColor: string;
  badgeClass: string;
  img: string;
}> = {
  "infraestructura-redes": {
    icon: <Network size={28} />,
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    glow: "group-hover:shadow-blue-500/10",
    accentColor: "#0070f3",
    borderColor: "hover:border-blue-500/30",
    badgeClass: "bg-blue-500/10 text-blue-500 border-blue-500/20 dark:text-blue-400",
    img: "/diagram_redes.png",
  },
  "servidores-virtualizacion": {
    icon: <Server size={28} />,
    gradient: "from-purple-500/10 via-violet-500/5 to-transparent",
    glow: "group-hover:shadow-purple-500/10",
    accentColor: "#8b5cf6",
    borderColor: "hover:border-purple-500/30",
    badgeClass: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
    img: "/diagram_servidores.png",
  },
  "programacion": {
    icon: <Code2 size={28} />,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    glow: "group-hover:shadow-emerald-500/10",
    accentColor: "#10b981",
    borderColor: "hover:border-emerald-500/30",
    badgeClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
    img: "/diagram_programacion.png",
  },
};

/* ────────────────────────────────────────────────────────────
   VARIANTS
───────────────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ────────────────────────────────────────────────────────────
   STAT CARD
───────────────────────────────────────────────────────────── */
function StatCard({ valor, etiqueta }: { valor: string; etiqueta: string }) {
  return (
    <motion.div variants={fadeUp} className="glass rounded-xl p-4 text-center">
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">{valor}</p>
      <p className="mono-label mt-1">{etiqueta}</p>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   PILAR CARD
───────────────────────────────────────────────────────────── */
function PilarCard({ pilar }: { pilar: typeof data.pilares[0] }) {
  const cfg = pilarConfig[pilar.slug];
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/pilar/${pilar.slug}`} className="block group h-full">
        <div
          className={`glass rounded-2xl h-full flex flex-col overflow-hidden border border-[var(--surface-border)] ${cfg.borderColor} ${cfg.glow} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
        >
          {/* Imagen */}
          <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${cfg.gradient}`}>
            <Image
              src={cfg.img}
              alt={`Diagrama de ${pilar.titulo}`}
              fill
              className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* icon badge */}
            <div
              className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
              style={{ background: cfg.accentColor }}
            >
              {cfg.icon}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-lg font-bold mb-2 text-[var(--text-primary)]">{pilar.titulo}</h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">{pilar.resumen}</p>

            {/* Subtemas preview */}
            <div className="space-y-1.5 mb-5">
              {pilar.subtemas.slice(0, 3).map((s) => (
                <div key={s.titulo} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle size={12} style={{ color: cfg.accentColor }} />
                  <span>{s.titulo}</span>
                </div>
              ))}
              {pilar.subtemas.length > 3 && (
                <p className="text-xs text-[var(--text-muted)] pl-5">
                  +{pilar.subtemas.length - 3} temas más
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold" style={{ color: cfg.accentColor }}>
                {(pilar as unknown as { cursos?: unknown[] }).cursos?.length ?? 0} cursos gratuitos
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                Explorar <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="relative">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-24">

        {/* ── HERO ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="mono-label inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ingeniería en Tecnologías Computacionales
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]">
                Tu mapa para<br />
                <span className="text-gradient">entender el mundo tech</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Explora los 3 pilares de la carrera ITC con lenguaje simple. Encuentra cursos gratuitos con certificado oficial de Cisco, Harvard, Microsoft, Google y más.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="#pilares"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{ background: "var(--accent)" }}
              >
                <BookOpen size={16} /> Explorar pilares
              </Link>
              <Link
                href="/herramientas"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm glass border border-[var(--surface-border)] hover:border-[var(--accent)] transition-colors text-[var(--text-primary)]"
              >
                <Globe size={16} /> Ver todos los recursos
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-[var(--surface-border)] shadow-2xl hidden lg:block"
          >
            <Image
              src="/hero_student.png"
              alt="Estudiante de ingeniería trabajando"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
          </motion.div>
        </section>

        <div className="section-divider" />

        {/* ── STATS ── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {data.stats.map((s) => (
            <StatCard key={s.etiqueta} {...s} />
          ))}
        </motion.section>

        <div className="section-divider" />

        {/* ── PILARES ── */}
        <section id="pilares">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <span className="mono-label">Los 3 pilares del ITC</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                Elige por dónde empezar
              </h2>
              <p className="text-[var(--text-secondary)] max-w-xl">
                Cada pilar es un universo. Haz clic para explorar temas, ver ilustraciones técnicas y acceder a los mejores cursos gratuitos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.pilares.map((pilar) => (
                <PilarCard key={pilar.slug} pilar={pilar} />
              ))}
            </div>
          </motion.div>
        </section>

        <div className="section-divider" />

        {/* ── WHY ITC ── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="glass rounded-2xl p-6 md:p-12 border border-[var(--surface-border)] space-y-8"
        >
          <motion.div variants={fadeUp}>
            <span className="mono-label">¿Por qué ITC?</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--text-primary)]">La carrera que mueve el mundo digital</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Zap size={20} />, color: "#0070f3", title: "Alta demanda laboral", desc: "Los ingenieros en TI son de los profesionistas más solicitados globalmente, con crecimiento del 13% anual proyectado según el BLS." },
              { icon: <Award size={20} />, color: "#8b5cf6", title: "Certificaciones que valen", desc: "Cisco, Google, Microsoft y Harvard ofrecen certificados gratuitos reconocidos por empresas Fortune 500 en todo el mundo." },
              { icon: <Globe size={20} />, color: "#10b981", title: "Trabajo desde cualquier lugar", desc: "El 70% de las posiciones en TI permiten trabajo remoto o híbrido. Tu oficina puede ser cualquier lugar del mundo con internet." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white mt-0.5"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
