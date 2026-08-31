import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
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
    <html
      lang="es"
      className={`${pressStart2P.variable} ${vt323.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#e0e8f0] text-gray-900 font-body antialiased selection:bg-[#ff00ff] selection:text-white">
        <header className="border-b-4 border-gray-900 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] z-10 sticky top-0">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-pixel text-xl sm:text-2xl hover:text-blue-600 transition-colors uppercase"
            >
              ITC_
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/herramientas"
                className="font-pixel text-xs sm:text-sm hover:text-blue-600 transition-colors uppercase border-2 border-transparent hover:border-black p-2 rounded-sm"
              >
                Herramientas
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 relative">
          {/* Fondo cuadriculado estilo retro */}
          <div className="absolute inset-0 pointer-events-none grid-bg opacity-30 -z-10" />
          {children}
        </main>
        <footer className="border-t-4 border-gray-900 bg-white py-6 text-center font-pixel text-xs uppercase shadow-[0px_-4px_0px_rgba(0,0,0,0.1)]">
          <p>Catálogo ITC - {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
