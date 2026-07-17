import Link from "next/link";
import { ArrowLeft, Eye } from "lucide-react";
import { VISION_CONCEPTS, VISION_CATEGORY_LABELS, getConceptsByCategory, VisionCategory } from "@/lib/data/vision";
import VisionConceptCard from "@/components/soccer/VisionConceptCard";
import QuickReferenceTable, { ReferenceRow } from "@/components/soccer/QuickReferenceTable";

const CATEGORY_ORDER: VisionCategory[] = [
  "escaneo",
  "perfilado-corporal",
  "conciencia-espacial",
  "toma-de-decisiones",
];

const REFERENCE_ROWS: ReferenceRow[] = [
  {
    metric: "Escaneos antes de recibir",
    eliteValue: "3–5 veces",
    consequence: "Recibes sin plan y pierdes el balón bajo la primera presión.",
  },
  {
    metric: "Ángulo de perfilado corporal",
    eliteValue: "≈ 45°",
    consequence: "De espaldas, reduces tu campo de visión útil a la mitad.",
  },
  {
    metric: "Ventana de escaneo óptima",
    eliteValue: "Balón en vuelo, no en tus pies",
    consequence: "Escanear tarde te obliga a decidir bajo presión ya instalada.",
  },
  {
    metric: "Cobertura del punto ciego",
    eliteValue: "≈ 160° detrás tuyo",
    consequence: "Un rival por las 6 en punto es indetectable sin girar el cuello.",
  },
];

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12 selection:bg-emerald-500 selection:text-zinc-950">
      <div className="max-w-5xl mx-auto">

        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver al Centro de Mando
          </Link>
        </nav>

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-8 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <Eye className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">Pilar 03 — Percepción Espacial</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
              Visión de Campo y Dominio del Espacio
            </h1>
            <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed">
              Los mejores jugadores no tienen mejores ojos, tienen mejores hábitos de escaneo. Cada concepto incluye un diagrama interactivo de tu campo de visión real.
            </p>
          </div>
          <div className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-4 py-2.5 rounded-xl h-fit w-fit">
            {VISION_CONCEPTS.length} Conceptos Indexados
          </div>
        </header>

        <section className="mb-14">
          <QuickReferenceTable rows={REFERENCE_ROWS} title="Referencia Rápida: Los Números de la Élite" />
        </section>

        <main className="space-y-16">
          {CATEGORY_ORDER.map((category) => {
            const concepts = getConceptsByCategory(category);
            if (concepts.length === 0) return null;
            return (
              <section key={category} className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {VISION_CATEGORY_LABELS[category]}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {concepts.map((concept) => (
                    <VisionConceptCard key={concept.id} concept={concept} />
                  ))}
                </div>
              </section>
            );
          })}
        </main>

        <footer className="mt-16 text-center text-xs text-zinc-600 tracking-wider border-t border-zinc-900 pt-8">
          "Los jugadores mediocres miran el balón. Los buenos jugadores miran la jugada. Los genios miran el espacio libre." — Johan Cruyff
        </footer>
      </div>
    </div>
  );
}