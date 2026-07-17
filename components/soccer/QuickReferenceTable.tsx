export interface ReferenceRow {
  metric: string;
  eliteValue: string;
  consequence: string;
}

export default function QuickReferenceTable({
  rows,
  title,
}: {
  rows: ReferenceRow[];
  title?: string;
}) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden">
      {title && (
        <div className="px-5 py-3 border-b border-zinc-800/80 bg-zinc-950/40">
          <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[480px]">
          <thead>
            <tr className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-800/80">
              <th className="px-5 py-3 font-bold">Métrica</th>
              <th className="px-5 py-3 font-bold">Estándar de Élite</th>
              <th className="px-5 py-3 font-bold hidden md:table-cell">Si lo ignoras</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-zinc-900/40 transition-colors">
                <td className="px-5 py-3 text-sm text-zinc-200 font-medium">{row.metric}</td>
                <td className="px-5 py-3 text-sm text-emerald-400 font-mono font-bold whitespace-nowrap">
                  {row.eliteValue}
                </td>
                <td className="px-5 py-3 text-xs text-zinc-500 hidden md:table-cell">{row.consequence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}