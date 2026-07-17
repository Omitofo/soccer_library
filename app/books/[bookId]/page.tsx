import Link from "next/link";
import { notFound } from "next/navigation";
import { SOCCER_LIBRARY } from "@/lib/data/library";
import { ArrowLeft, BookOpen, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

// Le decimos a Next.js qué parámetros de URL existen de forma estática
export function generateStaticParams() {
  return SOCCER_LIBRARY.books.map((b) => ({ bookId: b.id }));
}

interface BookDetailPageProps {
  params: Promise<{ bookId: string }>;
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { bookId } = await params;
  const book = SOCCER_LIBRARY.books.find((b) => b.id === bookId);

  // Si el libro no existe en nuestra data, tira un error 404
  if (!book) return notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Navegación */}
        <nav className="mb-8">
          <Link
            href="/books"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver a la Estantería
          </Link>
        </nav>

        {/* Cabecera del Libro */}
        <header className="border-b border-zinc-900 pb-8 mb-12">
          <div className="flex items-center gap-2 text-emerald-500 mb-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase">Lectura de Estudio</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
            {book.title}
          </h1>
          <p className="text-zinc-500 text-sm mt-1">Análisis maestro del texto de {book.author}</p>
          
          {book.introduction && (
            <p className="text-zinc-400 text-base leading-relaxed mt-6 bg-zinc-900/30 border border-zinc-900 p-5 rounded-2xl italic">
              "{book.introduction}"
            </p>
          )}
        </header>

        {/* Mapeo de Capítulos Profundos */}
        <main className="space-y-16">
          {book.chapters?.map((chapter, cIndex) => (
            <section key={cIndex} className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-zinc-100 border-b border-zinc-800 pb-3">
                {chapter.title}
              </h2>

              {/* Concepto Simple */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Concepto Esencial</h3>
                <p className="text-zinc-300 text-base leading-relaxed font-medium">
                  {chapter.concept}
                </p>
              </div>

              {/* Ejemplo en Campo */}
              <div className="bg-zinc-900/60 border border-zinc-800/60 p-5 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Aplicación Real en el Campo</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {chapter.example}
                </p>
              </div>

              {/* Bloque DOs and DONTs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-950/10 border border-emerald-900/30 p-5 rounded-2xl">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
                    <CheckCircle className="w-4 h-4" /> Lo que DEBES hacer
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                    {chapter.dos.map((doItem, dIdx) => (
                      <li key={dIdx}>• {doItem}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-950/10 border border-red-900/30 p-5 rounded-2xl">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
                    <AlertTriangle className="w-4 h-4" /> Lo que NO debes hacer
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                    {chapter.donts.map((dontItem, dnIdx) => (
                      <li key={dnIdx}>• {dontItem}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tip Táctico */}
              {chapter.tacticalTip && (
                <div className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-zinc-400 text-xs md:text-sm leading-relaxed">
                  <Lightbulb className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-300 block mb-0.5">Consejo del Entrenador:</span>
                    {chapter.tacticalTip}
                  </div>
                </div>
              )}
            </section>
          ))}
        </main>

      </div>
    </div>
  );
}
