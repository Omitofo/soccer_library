import type { BoardState, PitchArrow } from "@/lib/data/tactics/types";

const VB_W = 100;
const VB_H = 150;

// Paleta consistente en todo el sitio:
// verde = equipo local/protagonista · ámbar = rival · rojo = presión/alerta.
const TEAM = {
  home: { fill: "#10b981", text: "#022c22", ring: "#34d399" },
  away: { fill: "#f59e0b", text: "#451a03", ring: "#fbbf24" },
} as const;

const ARROW_COLOR: Record<PitchArrow["type"], string> = {
  pass: "#34d399",
  run: "#a1a1aa",
  press: "#f87171",
  dribble: "#fbbf24",
};

const ZONE_STYLE = {
  positive: { fill: "rgba(16,185,129,0.12)", stroke: "#10b981" },
  warning: { fill: "rgba(239,68,68,0.12)", stroke: "#ef4444" },
  neutral: { fill: "rgba(161,161,170,0.12)", stroke: "#71717a" },
} as const;

/**
 * Clamp defensivo: si algún dato llega fuera de 0-100 (por error humano al
 * cargar la pizarra), lo recortamos en vez de dejar que el elemento se
 * salga del viewBox y desaparezca en silencio. Este fue el bug raíz que
 * hacía que porteros y defensas "no aparecieran": coordenadas > 100.
 */
function clamp(v: number) {
  return Math.min(100, Math.max(0, v));
}

function y(v: number) {
  return (clamp(v) / 100) * VB_H;
}

function x(v: number) {
  return clamp(v);
}

function arrowPath(a: PitchArrow) {
  const x1 = x(a.from.x), y1 = y(a.from.y);
  const x2 = x(a.to.x), y2 = y(a.to.y);
  if (!a.curved) return `M ${x1} ${y1} L ${x2} ${y2}`;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len, ny = dx / len;
  const cx = mx + nx * 14, cy = my + ny * 14;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export default function TacticsBoard({
  state,
  className,
}: {
  state: BoardState;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className={className}
      role="img"
      aria-label={state.caption}
    >
      <title>{state.caption}</title>

      <defs>
        {(["pass", "run", "press", "dribble"] as const).map((t) => (
          <marker
            key={t}
            id={`arrow-${t}`}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill={ARROW_COLOR[t]} />
          </marker>
        ))}
      </defs>

      {/* césped con franjas */}
      <rect x={0} y={0} width={VB_W} height={VB_H} fill="#09090b" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x={0}
          y={(i * VB_H) / 8}
          width={VB_W}
          height={VB_H / 8}
          fill={i % 2 === 0 ? "#0c0c0f" : "#09090b"}
        />
      ))}

      {/* líneas de campo */}
      <g stroke="#3f3f46" strokeWidth={0.5} fill="none">
        <rect x={2} y={2} width={96} height={146} />
        <line x1={2} y1={75} x2={98} y2={75} />
        <circle cx={50} cy={75} r={12} />
        <circle cx={50} cy={75} r={0.7} fill="#3f3f46" />
        {/* área rival (arriba) */}
        <rect x={22} y={2} width={56} height={22} />
        <rect x={37} y={2} width={26} height={8} />
        <circle cx={50} cy={16} r={0.7} fill="#3f3f46" />
        {/* área propia (abajo) */}
        <rect x={22} y={126} width={56} height={22} />
        <rect x={37} y={140} width={26} height={8} />
        <circle cx={50} cy={134} r={0.7} fill="#3f3f46" />
      </g>
      <line x1={44} y1={2} x2={56} y2={2} stroke="#71717a" strokeWidth={1.4} />
      <line x1={44} y1={148} x2={56} y2={148} stroke="#71717a" strokeWidth={1.4} />

      {/* zonas destacadas */}
      {state.zones?.map((z, i) => {
        const style = ZONE_STYLE[z.variant ?? "neutral"];
        const zy = y(z.y);
        const zh = (clamp(z.y + z.height) / 100) * VB_H - zy;
        return (
          <g key={i}>
            <rect
              x={x(z.x)}
              y={zy}
              width={Math.max(0, Math.min(z.width, 100 - z.x))}
              height={Math.max(0, zh)}
              fill={style.fill}
              stroke={style.stroke}
              strokeWidth={0.4}
              strokeDasharray="1.5,1"
              rx={1.5}
            />
            <text
              x={x(z.x + z.width / 2)}
              y={zy + 4}
              fontSize={2.6}
              textAnchor="middle"
              fill={style.stroke}
              fontWeight="bold"
            >
              {z.label}
            </text>
          </g>
        );
      })}

      {/* flechas */}
      {state.arrows?.map((a, i) => (
        <path
          key={i}
          d={arrowPath(a)}
          stroke={ARROW_COLOR[a.type]}
          strokeWidth={a.type === "dribble" ? 1.3 : 0.9}
          fill="none"
          strokeDasharray={a.type === "pass" ? undefined : "2,1.6"}
          markerEnd={`url(#arrow-${a.type})`}
        />
      ))}

      {/* balón: siempre presente en el tablero */}
      <circle
        cx={x(state.ball.x)}
        cy={y(state.ball.y)}
        r={1.7}
        fill="#fafafa"
        stroke="#18181b"
        strokeWidth={0.4}
      />

      {/* jugadores (22 siempre: 11 + 11) */}
      {state.players.map((p) => {
        const c = TEAM[p.team];
        const px = x(p.x);
        const py = y(p.y);
        return (
          <g key={p.id}>
            {p.highlighted && (
              <circle
                cx={px}
                cy={py}
                r={4.4}
                fill="none"
                stroke={c.ring}
                strokeWidth={0.5}
                strokeDasharray="1,1"
              />
            )}
            <circle cx={px} cy={py} r={3} fill={c.fill} stroke="#09090b" strokeWidth={0.35} />
            <text
              x={px}
              y={py + 1}
              fontSize={2.7}
              textAnchor="middle"
              fill={c.text}
              fontWeight="bold"
            >
              {p.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
