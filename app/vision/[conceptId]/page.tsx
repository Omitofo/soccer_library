import Link from "next/link";
import { notFound } from "next/navigation";
import { VISION_CONCEPTS, VISION_CATEGORY_LABELS, getConceptById } from "@/lib/data/vision";
import VisionBodyDiagram from "@/components/soccer/VisionBodyDiagram";
import TacticsBoardSequence from "@/components/soccer/TacticsBoardSequence";
import { ArrowLeft, CheckCircle, AlertTriangle, Eye, ShieldAlert } from "lucide-react";

export function generateStaticParams() {
  return VISION_CONCEPTS.map((c) => ({ conceptId: c.id }));
}

interface ConceptDetailPageProps {
  params: Promise<{ conceptId: string }>;
}

export default async function ConceptDetailPage({ params }: ConceptDetailPageProps) {
  const { conceptId } = await params;
  const concept = getConceptById(conceptId);

  if (!concept) return notFound();

  const related = (concept.relatedConceptIds ?? [])
    .map((id) => getConceptById(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">

        <nav className="mb-8">
          <Link
            href="/vision"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver a Visión y Espacios
          </Link>
        </nav>

        <header className="border-b border-zinc-900 pb-8 mb-12">
          <div className="flex items-center gap-2 text-emerald-500 mb-3">
            <Eye className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase">
              {VISION_CATEGORY_LABELS[concept.category]}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
            {concept.title}
          </h1>
        </header>

        <main className="space-y-12">

          {/* Diagrama de cono de visión (perfilado / conciencia espacial) */}
          {concept.bodyDiagram && (
            <section className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-3">
                Tu Campo de Visión Real
              </h2>
              <div className={`grid grid-cols-1 ${concept.mistakeDiagram ? "md:grid-cols-2" : ""} gap-6`}>
                <div className="space-y-3">
                  {concept.mistakeDiagram && (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest">
                      <CheckCircle className="w-3.5 h-3.5" /> Correcto
                    </span>
                  )}
                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3">
                    <VisionBodyDiagram config={concept.bodyDiagram} className="w-full max-w-xs mx-auto h-auto block" />
                  </div>
                  {concept.bodyDiagramCaption && (
                    <p className="text-zinc-400 text-xs leading-relaxed">{concept.bodyDiagramCaption}</p>
                  )}
                </div>

                {concept.mistakeDiagram && (
                  <div className="space-y-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest">
                      <ShieldAlert className="w-3.5 h-3.5" /> Error Común
                    </span>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3">
                      <VisionBodyDiagram config={concept.mistakeDiagram} className="w-full max-w-xs mx-auto h-auto block" />
                    </div>
                    {concept.mistakeDiagramCaption && (
                      <p className="text-zinc-400 text-xs leading-relaxed">{concept.mistakeDiagramCaption}</p>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-900">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(16,185,129,0.35)" }} /> Campo visible
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(251,191,36,0.3)" }} /> Periferia
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "rgba(239,68,68,0.3)" }} /> Punto ciego
                </span>
              </div>
            </section>
          )}

          {/* Secuencia de pizarra (escaneo / toma de decisiones) */}
          {concept.boardStates && (
            <section className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-3">
                La Jugada: Paso a Paso
              </h2>
              <TacticsBoardSequence states={concept.boardStates} />
            </section>
          )}

          <section className="space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">
                Concepto Esencial
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed font-medium">{concept.concept}</p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/60 p-5 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Mecánica de Ejecución
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{concept.execution}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-950/10 border border-emerald-900/30 p-5 rounded-2xl">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
                  <CheckCircle className="w-4 h-4" /> Puntos Clave
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                  {concept.keyPoints.map((point, i) => <li key={i}>• {point}</li>)}
                </ul>
              </div>
              <div className="bg-red-950/10 border border-red-900/30 p-5 rounded-2xl">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
                  <AlertTriangle className="w-4 h-4" /> Errores Comunes
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                  {concept.commonMistakes.map((mistake, i) => <li key={i}>• {mistake}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="border-t border-zinc-900 pt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Conceptos Relacionados
              </h3>
              <div className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/vision/${r.id}`}
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