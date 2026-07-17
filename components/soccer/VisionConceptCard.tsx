import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { VisionConcept } from "@/lib/data/vision/types";

export default function VisionConceptCard({ concept }: { concept: VisionConcept }) {
  return (
    <Link
      href={`/vision/${concept.id}`}
      className="group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between gap-6 hover:shadow-[0_0_30px_rgba(16,185,129,0.02)]"
    >
      <div>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-emerald-500 shrink-0 group-hover:border-emerald-500/20 transition-colors">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-zinc-100 leading-snug group-hover:text-emerald-400 transition-colors">
            {concept.title}
          </h3>
        </div>
        <p className="text-zinc-400 text-sm mt-4 leading-relaxed">{concept.shortSummary}</p>
      </div>
      <div className="flex items-center text-xs font-semibold text-emerald-500 group-hover:translate-x-1 transition-transform">
        Ver diagrama <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </div>
    </Link>
  );
}