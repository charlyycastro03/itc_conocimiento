import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITC Catálogo | Ingeniería en Tecnologías Computacionales",
  description: "Catálogo visual interactivo sobre la carrera de ITC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent selection:text-white flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 glass-panel border-x-0 border-t-0 rounded-none backdrop-blur-md bg-white/60 dark:bg-slate-950/60 transition-colors">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="font-bold text-xl sm:text-2xl tracking-tight hover:text-accent transition-colors flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white text-sm shadow-md">
                  i
                </div>
                ITC<span className="text-slate-400 font-light">Catálogo</span>
              </Link>
              <nav className="flex items-center gap-6">
                <Link
                  href="/herramientas"
                  className="text-sm font-medium hover:text-accent transition-colors hidden sm:block"
                >
                  Herramientas
                </Link>
                <ThemeToggle />
              </nav>
            </div>
          </header>
          
          <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 md:py-16">
            {children}
          </main>
          
          <footer className="mt-auto py-8 text-center text-sm text-slate-500 dark:text-slate-400 glass-panel border-x-0 border-b-0 rounded-none">
            <p>Catálogo interactivo diseñado para futuros ingenieros.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
