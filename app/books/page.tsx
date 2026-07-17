import Link from "next/link";
import { SOCCER_LIBRARY } from "@/lib/data/library";
import BookCard from "@/components/soccer/BookCard";
import { ArrowLeft, Library } from "lucide-react";

export default function BooksPage() {
  const books = SOCCER_LIBRARY.books;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12 selection:bg-emerald-500 selection:text-zinc-950">
      <div className="max-w-5xl mx-auto">
        
        {/* Navegación de Retorno */}
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver al Centro de Mando
          </Link>
        </nav>

        {/* Encabezado de la Sección */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <Library className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">Módulo Autores</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100">
              Biblioteca de Autores de Élite
            </h1>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Análisis profundo de los textos, biografías y manifiestos que cambiaron la historia del fútbol moderno. Conceptos masticados para la aplicación en el campo.
            </p>
          </div>
          
          <div className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-4 py-2.5 rounded-xl h-fit w-fit">
            Volumen: {books.length} Libros Indexados
          </div>
        </header>

        {/* Rejilla de la Estantería */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </main>
        
      </div>
    </div>
  );
}
