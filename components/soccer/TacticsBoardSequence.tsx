"use client";

import { useState } from "react";
import TacticsBoard from "./TacticsBoard";
import type { BoardState } from "@/lib/data/tactics/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

function LegendItem({ color, label, dashed }: { color: string; label: string; dashed?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="inline-block w-4 h-0.5"
        style={{
          backgroundColor: dashed ? "transparent" : color,
          borderTop: dashed ? `2px dashed ${color}` : undefined,
        }}
      />
      {label}
    </div>
  );
}

export default function TacticsBoardSequence({ states }: { states: BoardState[] }) {
  const [step, setStep] = useState(0);
  const current = states[step];
  const isFirst = step === 0;
  const isLast = step === states.length - 1;

  return (
    <div className="space-y-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 md:p-5 shadow-xl">
        <TacticsBoard state={current} className="w-full max-w-xs md:max-w-sm mx-auto h-auto block" />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={isFirst}
          aria-label="Paso anterior"
          className="p-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 disabled:opacity-30 disabled:hover:text-zinc-400 disabled:hover:border-zinc-800 transition-colors shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 text-center">
          <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">
            Paso {step + 1} de {states.length}
          </span>
          <p className="text-zinc-300 text-xs md:text-sm mt-1 leading-relaxed">{current.caption}</p>
        </div>

        <button
          type="button"
          onClick={() => setStep((s) => Math.min(states.length - 1, s + 1))}
          disabled={isLast}
          aria-label="Paso siguiente"
          className="p-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 disabled:opacity-30 disabled:hover:text-zinc-400 disabled:hover:border-zinc-800 transition-colors shrink-0"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-center gap-1.5" role="tablist" aria-label="Pasos de la jugada">
        {states.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === step}
            aria-label={`Ir al paso ${i + 1}`}
            onClick={() => setStep(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === step ? "w-6 bg-emerald-500" : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center text-[10px] font-mono text-zinc-500 pt-3 border-t border-zinc-900">
        <LegendItem color="#34d399" label="Pase" />
        <LegendItem color="#a1a1aa" label="Movimiento sin balón" dashed />
        <LegendItem color="#f87171" label="Presión" dashed />
        <LegendItem color="#fbbf24" label="Conducción" dashed />
      </div>
    </div>
  );
}