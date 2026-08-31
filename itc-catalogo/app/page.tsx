"use client";

import data from "@/content/content.json";
import PilarCard from "@/components/PilarCard";
import { motion, Variants } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-16 py-8">
      
      {/* Sección de bienvenida animada con el Asistente IA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-center space-y-6 max-w-3xl flex flex-col items-center"
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 flex items-center justify-center shadow-lg border border-white dark:border-slate-800">
            <Bot size={48} className="text-accent" strokeWidth={1.5} />
          </div>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-2 -right-2 text-yellow-500"
          >
            <Sparkles size={24} />
          </motion.div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
          Descubre tu futuro en <br className="hidden sm:block"/>
          <span className="text-gradient">Tecnologías Computacionales</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          Hola, soy tu asistente digital. Explora los tres pilares fundamentales que conforman la carrera y encuentra los recursos para empezar tu camino hoy mismo.
        </p>
      </motion.div>

      {/* Grid de Pilares con Stagger Animations */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
      >
        {data.pilares.map((pilar) => (
          <motion.div key={pilar.slug} variants={itemVariants} className="h-full">
            <PilarCard pilar={pilar} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
