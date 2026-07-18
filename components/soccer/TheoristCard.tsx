import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { TacticalTheorist, CATEGORY_LABELS } from "@/lib/data/theorists";

export default function TheoristCard({ theorist }: { theorist: TacticalTheorist }) {
  return (
    <Link
      href={`/tactics/theorists/${theorist.id}`}
      className="group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between gap-5 hover:shadow-[0_0_30px_rgba(16,185,129,0.02)]"
    >
      <div>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-emerald-500 shrink-0 group-hover:border-emerald-500/20 transition-colors">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-100 leading-snug group-hover:text-emerald-400 transition-colors">
              {theorist.name}
            </h3>
            <p className="text-zinc-500 text-xs font-medium mt-0.5">
              {theorist.years} · {theorist.role}
            </p>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mt-4 leading-relaxed italic">
          {theorist.keyIdea}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {theorist.categoryIds.map((id) => (
            <span
              key={id}
              className="text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full"
            >
              {CATEGORY_LABELS[id]}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center text-xs font-semibold text-emerald-500 group-hover:translate-x-1 transition-transform">
        Ver perfil táctico <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </div>
    </Link>
  );
}