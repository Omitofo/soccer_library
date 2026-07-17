import type { BodyDiagramConfig, VisionMarker } from "@/lib/data/vision/types";

const VB = 100;

const SECTOR_STYLE = {
  visible: { fill: "rgba(16,185,129,0.18)", stroke: "#10b981" },
  peripheral: { fill: "rgba(251,191,36,0.12)", stroke: "#fbbf24" },
  blind: { fill: "rgba(239,68,68,0.14)", stroke: "#ef4444" },
} as const;

const MARKER_FILL: Record<VisionMarker["kind"], string> = {
  ball: "#fafafa",
  teammate: "#10b981",
  defender: "#ef4444",
  space: "transparent",
};

function polar(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.sin(rad), y: cy - radius * Math.cos(rad) };
}

function sectorPath(cx: number, cy: number, playerAngle: number, start: number, end: number, radius: number) {
  const p1 = polar(playerAngle + start, radius, cx, cy);
  const p2 = polar(playerAngle + end, radius, cx, cy);
  const diff = end - start;
  const largeArc = Math.abs(diff) > 180 ? 1 : 0;
  const sweep = diff >= 0 ? 1 : 0;
  return `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${p2.x} ${p2.y} Z`;
}

export default function VisionBodyDiagram({
  config,
  className,
}: {
  config: BodyDiagramConfig;
  className?: string;
}) {
  const cx = 50, cy = 55;
  const facing = polar(config.playerAngle, 16, cx, cy);
  const shoulderP1 = polar(config.playerAngle + 90, 11, cx, cy);
  const shoulderP2 = polar(config.playerAngle - 90, 11, cx, cy);

  return (
    <svg
      viewBox={`0 0 ${VB} ${VB}`}
      className={className}
      role="img"
      aria-label="Diagrama de perfilado corporal y campo de visión"
    >
      <rect x={0} y={0} width={VB} height={VB} fill="#09090b" />
      <circle cx={cx} cy={cy} r={46} fill="none" stroke="#27272a" strokeWidth={0.4} strokeDasharray="1,2" />

      {config.sectors.map((s, i) => (
        <path
          key={i}
          d={sectorPath(cx, cy, config.playerAngle, s.startAngle, s.endAngle, s.radius)}
          fill={SECTOR_STYLE[s.variant].fill}
          stroke={SECTOR_STYLE[s.variant].stroke}
          strokeWidth={0.3}
        />
      ))}

      {config.markers.map((m, i) => (
        <g key={i}>
          {m.kind === "space" ? (
            <circle cx={m.x} cy={m.y} r={3.4} fill="none" stroke="#34d399" strokeWidth={0.5} strokeDasharray="1,1" />
          ) : (
            <circle cx={m.x} cy={m.y} r={3.2} fill={MARKER_FILL[m.kind]} stroke="#09090b" strokeWidth={0.3} />
          )}
          <text x={m.x} y={m.y + 6.5} fontSize={2.6} textAnchor="middle" fill="#a1a1aa" fontWeight="bold">
            {m.label}
          </text>
        </g>
      ))}

      <line
        x1={shoulderP1.x} y1={shoulderP1.y}
        x2={shoulderP2.x} y2={shoulderP2.y}
        stroke="#34d399" strokeWidth={1.4} strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={4.2} fill="#10b981" stroke="#022c22" strokeWidth={0.5} />
      <text x={cx} y={cy + 1.1} fontSize={3.2} textAnchor="middle" fill="#022c22" fontWeight="bold">Tú</text>

      <line
        x1={cx} y1={cy} x2={facing.x} y2={facing.y}
        stroke="#fafafa" strokeWidth={0.5} markerEnd="url(#vision-facing-arrow)"
      />
      <defs>
        <marker id="vision-facing-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="#fafafa" />
        </marker>
      </defs>
    </svg>
  );
}