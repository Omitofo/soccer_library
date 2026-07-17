import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { TacticalScheme } from "@/lib/data/tactics/types";

export default function SchemeCard({ scheme }: { scheme: TacticalScheme }) {
  return (
    <Link
      href={`/tactics/${scheme.id}`}
      className="group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between gap-6 hover:shadow-[0_0_30px_rgba(16,185,129,0.02)]"
    >
      <div>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-emerald-500 shrink-0 group-hover:border-emerald-500/20 transition-colors">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-100 leading-snug group-hover:text-emerald-400 transition-colors">
              {scheme.title}
            </h3>
            {scheme.formationContext && (
              <p className="text-zinc-500 text-xs font-medium mt-0.5">{scheme.formationContext}</p>
            )}
          </div>
        </div>
        <p className="text-zinc-400 text-sm mt-4 leading-relaxed">{scheme.shortSummary}</p>
      </div>

      <div className="flex items-center text-xs font-semibold text-emerald-500 group-hover:translate-x-1 transition-transform">
        Ver pizarra táctica <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </div>
    </Link>
  );
}