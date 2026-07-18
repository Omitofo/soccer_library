import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, History } from "lucide-react";
import { TACTICS_SCHEMES, CATEGORY_LABELS, getSchemesByCategory, TacticCategory } from "@/lib/data/tactics";
import {
  CATEGORY_ORDER as THEORIST_CATEGORY_ORDER,
  CATEGORY_LABELS as THEORIST_CATEGORY_LABELS,
  THEORISTS,
} from "@/lib/data/theorists";
import SchemeCard from "@/components/soccer/SchemeCard";
const CATEGORY_ORDER: TacticCategory[] = [
  "organizacion-defensiva",
  "presion",
  "construccion",
  "ataque",
  "transiciones",
];

export default function TacticsPage() {
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

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">Pilar 02 — Estrategia Colectiva</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
              Pizarras Tácticas de Alta Competencia
            </h1>
            <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed">
              Cada esquema incluye una pizarra interactiva paso a paso: mira cómo evoluciona la jugada en el campo, no solo una foto fija.
            </p>
          </div>
          <div className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-4 py-2.5 rounded-xl h-fit w-fit">
            {TACTICS_SCHEMES.length} Esquemas Indexados
          </div>
        </header>

        <main className="space-y-16">
          {/* ================= ARQUITECTOS TÁCTICOS ================= */}
          <section className="bg-gradient-to-br from-emerald-950/20 via-zinc-900/30 to-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-500">
                <History className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider uppercase">Nuevo Módulo — Historia y Filosofía Táctica</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-zinc-100 tracking-tight">
                Los Arquitectos del Juego
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Cada pizarra de esta sección existe gracias a una idea que alguien defendió contra su época: Cruyff y los carriles, Sacchi y el bloque de 25 metros, Bielsa y la presión total, Klopp y el gegenpressing. {THEORISTS.length} mentes, siete conceptos, un mismo hilo conductor.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {THEORIST_CATEGORY_ORDER.map((id) => (
                  <span
                    key={id}
                    className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full"
                  >
                    {THEORIST_CATEGORY_LABELS[id]}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/tactics/theorists"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-zinc-950 bg-emerald-500 hover:bg-emerald-400 transition-colors px-5 py-3 rounded-xl"
            >
              Explorar Arquitectos <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {CATEGORY_ORDER.map((category) => {
            const schemes = getSchemesByCategory(category);
            if (schemes.length === 0) return null;
            return (
              <section key={category} className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {CATEGORY_LABELS[category]}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {schemes.map((scheme) => (
                    <SchemeCard key={scheme.id} scheme={scheme} />
                  ))}
                </div>
              </section>
            );
          })}
        </main>

        <footer className="mt-16 text-center text-xs text-zinc-600 tracking-wider border-t border-zinc-900 pt-8">
          "Si tienes espacio, tienes tiempo. Si tienes tiempo, puedes pensar. Si piensas, juegas bien." — Xavi Hernández
        </footer>
      </div>
    </div>
  );
}