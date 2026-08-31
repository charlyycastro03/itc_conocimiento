import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-xs">ITC</span>
                </div>
                <span className="font-semibold text-sm">
                  <span className="text-[var(--text-primary)]">Catálogo</span>
                  <span className="text-[var(--text-muted)]">.itc</span>
                </span>
              </Link>

              <nav className="flex items-center gap-6">
                <Link
                  href="/herramientas"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hidden sm:block"
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
          <footer className="border-t border-[var(--surface-border)] py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
              <p>Catálogo ITC — recursos gratuitos para ingenieros del futuro.</p>
              <p className="mono-label">Todos los cursos son verificados y gratuitos.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
