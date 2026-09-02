import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITC Catálogo | Ingeniería en Tecnologías Computacionales",
  description:
    "Catálogo visual interactivo de la carrera ITC: redes, servidores, programación y los mejores recursos gratuitos con certificado oficial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* ── Navbar ── */}
          <header className="sticky top-0 z-50 glass border-b border-[var(--surface-border)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5 group">
                <Image
                  src="/logo.png"
                  alt="ITC Catálogo logo"
                  width={32}
                  height={32}
                  className="rounded-lg shadow-sm group-hover:opacity-90 transition-opacity"
                  priority
                />
                <span className="font-semibold text-sm">
                  <span className="text-[var(--text-primary)]">Catálogo</span>
                  <span className="text-[var(--text-muted)]">.itc</span>
                </span>
              </Link>

              <nav className="flex items-center gap-4 sm:gap-6">
                <Link
                  href="/herramientas"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
                >
                  Herramientas
                </Link>
                <ThemeToggle />
              </nav>
            </div>
          </header>

          {/* ── Main ── */}
          <main className="flex-1">{children}</main>

          {/* ── Footer ── */}
          <footer className="border-t border-[var(--surface-border)] py-12 mt-12 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[var(--text-muted)]">
              <div className="space-y-4">
                <h4 className="font-semibold text-[var(--text-primary)]">Pilares ITC</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/pilar/infraestructura-redes" className="hover:text-[var(--text-primary)] transition-colors">Infraestructura y Redes</Link>
                  <Link href="/pilar/servidores-virtualizacion" className="hover:text-[var(--text-primary)] transition-colors">Servidores y Virtualización</Link>
                  <Link href="/pilar/programacion" className="hover:text-[var(--text-primary)] transition-colors">Programación</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-[var(--text-primary)]">Plataformas destacadas</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://www.netacad.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors">Cisco NetAcad</a>
                  <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors">freeCodeCamp</a>
                  <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors">Harvard CS50</a>
                  <a href="https://learn.microsoft.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors">Microsoft Learn</a>
                </div>
              </div>
              <div className="space-y-4 flex flex-col md:items-end justify-center md:text-right">
                <p>Hecho con ❤️ para futuros ingenieros</p>
                <p className="mono-label">Todos los cursos son verificados y gratuitos.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
