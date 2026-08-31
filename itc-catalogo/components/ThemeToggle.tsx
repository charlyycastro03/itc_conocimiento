"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full glass-panel flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-accent-hover transition-colors"
      aria-label="Alternar tema oscuro/claro"
    >
      {theme === "dark" ? (
        <Sun size={20} strokeWidth={2} />
      ) : (
        <Moon size={20} strokeWidth={2} />
      )}
    </motion.button>
  );
}
