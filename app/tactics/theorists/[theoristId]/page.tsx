import Link from "next/link";
import { notFound } from "next/navigation";
import { THEORISTS, CATEGORY_LABELS, getTheoristById } from "@/lib/data/theorists";
import { getSchemeById } from "@/lib/data/tactics";
import { SOCCER_LIBRARY } from "@/lib/data/library";
import TacticsBoard from "@/components/soccer/TacticsBoard";
import { ArrowLeft, CheckCircle, Layers, BookOpen, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return THEORISTS.map((t) => ({ theoristId: t.id }));
}

interface TheoristDetailPageProps {
  params: Promise<{ theoristId: string }>;
}

export default async function TheoristDetailPage({ params }: TheoristDetailPageProps) {
  const { theoristId } = await params;
  const theorist = getTheoristById(theoristId);

  if (!theorist) return notFound();

  const relatedSchemes = (theorist.relatedSchemeIds ?? [])
    .map((id) => getSchemeById(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedBook = theorist.relatedBookId
    ? SOCCER_LIBRARY.books.find((b) => b.id === theorist.relatedBookId)
    : undefined;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">

        <nav className="mb-8">
          <Link
            href="/tactics/theorists"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver a los Arquitectos
          </Link>
        </nav>

        <header className="border-b border-zinc-900 pb-8 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {theorist.categoryIds.map((id) => (
              <span
                key={id}
                className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full"
              >
                {CATEGORY_LABELS[id]}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
            {theorist.name}
          </h1>
          <p className="text-zinc-500 text-sm mt-2">
            {theorist.years} · {theorist.role} · {theorist.nationality}
          </p>
          {theorist.clubs.length > 0 && (
            <p className="text-zinc-600 text-xs mt-1">{theorist.clubs.join(" — ")}</p>
          )}
        </header>

        <main className="space-y-12">

          <section className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">
              <Sparkles className="w-4 h-4" /> Idea Central
            </h2>
            <p className="text-zinc-200 text-lg md:text-xl font-medium leading-relaxed">
              {theorist.keyIdea}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Filosofía Táctica
            </h3>
            <p className="text-zinc-300 text-base leading-relaxed">{theorist.philosophy}</p>
          </section>

          {theorist.boardState && (
            <section className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                El Concepto en la Pizarra
              </h3>
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 md:p-5 shadow-xl">
                <TacticsBoard
                  state={theorist.boardState}
                  className="w-full max-w-xs md:max-w-sm mx-auto h-auto block"
                />
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed text-center max-w-lg mx-auto">
                {theorist.boardState.caption}
              </p>
            </section>
          )}

          <section className="bg-zinc-900/60 border border-zinc-800/60 p-5 md:p-6 rounded-2xl">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              <CheckCircle className="w-4 h-4" /> Aportes Concretos
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {theorist.contributions.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Legado</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{theorist.legacy}</p>
          </section>

          {(relatedSchemes.length > 0 || relatedBook) && (
            <section className="border-t border-zinc-900 pt-8 space-y-6">
              {relatedSchemes.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                    <Layers className="w-4 h-4" /> Pizarras Relacionadas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {relatedSchemes.map((s) => (
                      <Link
                        key={s.id}
                        href={`/tactics/${s.id}`}
                        className="text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 px-4 py-2 rounded-xl transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedBook && (
                <div>
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                    <BookOpen className="w-4 h-4" /> Lectura Recomendada
                  </h3>
                  <Link
                    href={`/books/${relatedBook.id}`}
                    className="inline-flex items-center text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 px-4 py-2 rounded-xl transition-colors"
                  >
                    {relatedBook.title} — {relatedBook.author}
                  </Link>
                </div>
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}