import { BookItem } from "@/lib/data/library";
import { Book, CheckCircle2 } from "lucide-react";

interface BookCardProps {
  book: BookItem;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between gap-6">
      <div>
        {/* Encabezado: Icono + Título */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-emerald-500 shrink-0">
            <Book className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-100 leading-snug group-hover:text-emerald-400 transition-colors">
              {book.title}
            </h3>
            <p className="text-zinc-500 text-xs font-medium mt-0.5">
              Por {book.author}
            </p>
          </div>
        </div>

        {/* Resumen / Review */}
        <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
          {book.review}
        </p>

        {/* Separador sutil */}
        <div className="h-[1px] bg-zinc-800/60 my-5" />

        {/* Aprendizajes Clave (Takeaways) */}
        <div>
          <h4 className="text-xs font-bold tracking-wider text-emerald-500 uppercase mb-3">
            Lecciones de Élite
          </h4>
          <ul className="space-y-2.5">
            {book.takeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-normal">
                <CheckCircle2 className="w-4 h-4 text-emerald-500/70 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
