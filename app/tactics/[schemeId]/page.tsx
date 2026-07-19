import Link from "next/link";
import { notFound } from "next/navigation";
import { TACTICS_SCHEMES, CATEGORY_LABELS, getSchemeById } from "@/lib/data/tactics";
import TacticsBoardSequence from "@/components/soccer/TacticsBoardSequence";
import { ArrowLeft, CheckCircle, AlertTriangle, Layers } from "lucide-react";

export function generateStaticParams() {
  return TACTICS_SCHEMES.map((s) => ({ schemeId: s.id }));
}

interface SchemeDetailPageProps {
  params: Promise<{ schemeId: string }>;
}

export default async function SchemeDetailPage({ params }: SchemeDetailPageProps) {
  const { schemeId } = await params;
  const scheme = getSchemeById(schemeId);

  if (!scheme) return notFound();

  const related = (scheme.relatedSchemeIds ?? [])
    .map((id) => getSchemeById(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">

        <nav className="mb-8">
          <Link
            href="/tactics"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver a las Pizarras
          </Link>
        </nav>

        <header className="border-b border-zinc-900 pb-8 mb-12">
          <div className="flex items-center gap-2 text-emerald-500 mb-3">
            <Layers className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase">
              {CATEGORY_LABELS[scheme.category]}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
            {scheme.title}
          </h1>
          {scheme.formationContext && (
            <p className="text-zinc-500 text-sm mt-2">{scheme.formationContext}</p>
          )}
        </header>

        <main className="space-y-12">

          <section className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-3">
              La Pizarra: Paso a Paso
            </h2>
            <TacticsBoardSequence
              states={scheme.boardStates}
              formationHome={scheme.formationHome}
              formationAway={scheme.formationAway}
            />
          </section>

          <section className="space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">
                Concepto Esencial
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed font-medium">{scheme.concept}</p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/60 p-5 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Mecánica de Ejecución
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{scheme.execution}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-950/10 border border-emerald-900/30 p-5 rounded-2xl">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
                  <CheckCircle className="w-4 h-4" /> Puntos Clave
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                  {scheme.keyPoints.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-950/10 border border-red-900/30 p-5 rounded-2xl">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
                  <AlertTriangle className="w-4 h-4" /> Errores Comunes
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                  {scheme.commonMistakes.map((mistake, i) => (
                    <li key={i}>• {mistake}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="border-t border-zinc-900 pt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Esquemas Relacionados
              </h3>
              <div className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/tactics/${r.id}`}
                    className="text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 px-4 py-2 rounded-xl transition-colors"
                  >
                    {r.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
