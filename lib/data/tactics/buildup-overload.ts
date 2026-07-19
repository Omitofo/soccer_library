import { TacticalScheme } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "./formations";

// Local: 4-3-3 en salida. El lateral derecho (h2) es quien se adentrará
// al medio espacio junto al pivote (h7).
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 80, "home", "h", 2), // defensa: h2 rb, h3/h4 centrales, h5 lb
  ...line(3, 58, "home", "h", 6), // mediocampo: h6, h7 (pivote), h8
  ...line(3, 30, "home", "h", 9), // ataque: h9 extremo, h10 punta, h11 extremo
];

// Rival: 4-4-2 presionando alto con sus 2 delanteros sobre los centrales.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 25, "away", "a", 2),
  ...line(4, 45, "away", "a", 6),
  ...line(2, 72, "away", "a", 10, [38, 62]), // presionan directamente a h3 y h4
];

const step1Players = [...HOME, ...AWAY];

const step2Players = applyMoves(step1Players, [
  ["h2", { x: 50, y: 66, highlighted: true }],
  ["h9", { x: 8, y: 68, highlighted: true }],
]);

const step3Players = applyMoves(step2Players, [
  ["h8", { highlighted: true }],
  ["h2", { highlighted: false }],
]);

export const BUILDUP_OVERLOAD: TacticalScheme = {
  id: "salida-lateral-falso",
  category: "construccion",
  title: "Salida en Superioridad: El Lateral Falso",
  shortSummary: "El lateral se adentra al carril central en la salida para generar un jugador de más frente a la presión rival.",
  concept: "Con 2 centrales contra 2 delanteros rivales no hay hombre libre: es una igualdad numérica. La solución (popularizada por Guardiola con Lahm en el Bayern) es que un lateral abandone la banda y se ubique junto al pivote, generando una superioridad de 3 contra 2 en la primera línea de construcción.",
  execution: "El lateral camina hacia adentro en vez de subir pegado a la banda. Esto forma una línea de 3 (o un rombo) junto al pivote defensivo. El extremo de ese costado baja a ocupar el espacio de banda que el lateral dejó libre, manteniendo la amplitud del equipo.",
  keyPoints: [
    "Ocupa el espacio, no la posición del dorsal: un lateral puede jugar de mediocentro si el sistema lo necesita.",
    "Alguien debe cubrir siempre el carril que el lateral abandona, normalmente el extremo de ese costado.",
    "La superioridad numérica solo sirve si se usa para progresar el balón, no solo para tenerlo."
  ],
  commonMistakes: [
    "El lateral se mete adentro pero nadie cubre la banda, perdiendo la amplitud del equipo.",
    "Se genera la superioridad numérica pero se sigue jugando en corto sin buscar el pase de progresión hacia el 'tercer hombre'."
  ],
  formationContext: "Requiere un lateral con buena visión de pase; muy asociado al Juego de Posición y al Bayern de Guardiola.",
  formationHome: "4-3-3",
  formationAway: "4-4-2",
  boardStates: [
    {
      step: 1,
      caption: "Salida clásica: 2 centrales contra 2 delanteros rivales. Igualdad numérica, sin hombre libre.",
      players: step1Players,
      ball: ballAt(step1Players, "h3"),
      zones: [{ x: 20, y: 68, width: 60, height: 22, label: "Igualdad numérica: sin hombre libre", variant: "warning" }],
    },
    {
      step: 2,
      caption: "El lateral derecho se adentra junto al pivote. El extremo baja a cubrir la banda vacía.",
      players: step2Players,
      ball: ballAt(step2Players, "h2"),
      arrows: [
        { from: { x: 12, y: 80 }, to: { x: 50, y: 66 }, type: "run" },
        { from: { x: 18, y: 30 }, to: { x: 8, y: 68 }, type: "run" },
      ],
      zones: [{ x: 25, y: 56, width: 50, height: 26, label: "Superioridad 3 vs 2 en salida", variant: "positive" }],
    },
    {
      step: 3,
      caption: "El hombre libre progresa el balón rompiendo la primera línea de presión rival.",
      players: step3Players,
      ball: ballAt(step3Players, "h8"),
      arrows: [{ from: { x: 50, y: 66 }, to: { x: 82, y: 58 }, type: "pass" }],
    },
  ],
  relatedSchemeIds: ["sobrecarga-banda"],
};
