import Link from "next/link";
import { BookOpen, Shield, Eye, Trophy, ArrowRight } from "lucide-react";

export default function HomePage() {
  const categories = [
    {
      id: "philosophy",
      title: "Filosofía de Juego",
      description: "Aprende el concepto del 'Pensamiento Inverso' y por qué el gol rige cada movimiento en el tablero.",
      icon: <Trophy className="w-8 h-8 text-emerald-500" />,
      href: "/philosophy",
    },
    {
      id: "tactics",
      title: "Pizarras Tácticas",
      description: "Análisis de formaciones, distancias interlineales y la sincronización de la presión en bloque.",
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      href: "/tactics",
    },
    {
      id: "vision",
      title: "Visión y Espacios",
      description: "Domina el escaneo de campo, perfiles corporales correctos y cómo atacar el espacio vacío.",
      icon: <Eye className="w-8 h-8 text-emerald-500" />,
      href: "/vision",
    },
    {
      id: "books",
      title: "Biblioteca de Autores",
      description: "Resúmenes ejecutivos y lecciones clave de los mejores entrenadores del mundo.",
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      href: "/books",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6 selection:bg-emerald-500 selection:text-zinc-950">
      {/* Header Motivacional */}
      <header className="text-center max-w-2xl mb-12">
        <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Soccer Academy
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
          Biblioteca de Inteligencia Futbolística
        </h1>
        <p className="text-zinc-400 text-base md:text-lg">
          El búnker de conocimiento táctico y mental para el jugador profesional moderno. Todo el conocimiento, sin distracciones.
        </p>
      </header>

      {/* Cuadrícula de Pilares de Conocimiento */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-fit group-hover:border-emerald-500/30 transition-colors">
                {cat.icon}
              </div>
              <h2 className="text-xl font-bold mt-4 mb-2 group-hover:text-emerald-400 transition-colors">
                {cat.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
            
            <div className="flex items-center text-xs font-semibold text-emerald-500 mt-6 group-hover:translate-x-1 transition-transform">
              Entrar a leer <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>
        ))}
      </main>

      {/* Footer Minimalista */}
      <footer className="mt-16 text-xs text-zinc-600 tracking-wide">
        "The Goal is God" • Desarrollado para el Éxito Profesional
      </footer>
    </div>
  );
}
