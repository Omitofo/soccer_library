import { TacticalScheme } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "./formations";

// Local: 4-3-3 en plena fase ofensiva, con línea de mediocampo y ataque
// muy adelantadas (el riesgo que describe el concepto).
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 80, "home", "h", 2), // defensa se queda cubriendo la espalda
  ...line(3, 45, "home", "h", 6), // mediocampo adelantado
  ...line(3, 18, "home", "h", 9), // ataque muy alto, a las puertas del área rival
];

// Rival: bloque bajo defendiendo el asedio, con los delanteros altos
// esperando el contragolpe.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 18, "away", "a", 2), // defensa muy replegada
  ...line(3, 40, "away", "a", 6), // mediocampo
  ...line(3, 68, "away", "a", 9), // delanteros esperando arriba para robar y salir
];

const step1Players = applyMoves([...HOME, ...AWAY], [
  ["a7", { x: 55, y: 32, highlighted: true }],
]);

const step2Players = applyMoves(step1Players, [
  ["h9", { x: 35, y: 40, highlighted: true }],
  ["h10", { x: 55, y: 28, highlighted: true }],
  ["h11", { x: 68, y: 45, highlighted: true }],
]);

const step3Players = applyMoves(step2Players, [
  ["h10", { x: 50, y: 10, highlighted: true }],
  ["h11", { x: 75, y: 15 }],
  ["h9", { x: 25, y: 20 }],
  ["a7", { x: 55, y: 34, highlighted: false }],
]);

export const GEGENPRESSING: TacticalScheme = {
  id: "gegenpressing",
  category: "presion",
  title: "Presión Tras Pérdida (Regla de los 5 Segundos)",
  shortSummary: "El momento más peligroso es perder el balón. En vez de replegar, los 3 jugadores más cercanos asfixian al rival de inmediato.",
  concept: "Cuando arriesgas atacando con muchos jugadores adelantados, perder el balón es matemáticamente inevitable en algún momento. La solución no es evitarlo, es reaccionar: los jugadores más cercanos al punto de pérdida presionan en los primeros 5 segundos, cuando el rival todavía no ha levantado la cabeza.",
  execution: "En el instante de la pérdida, los 3 compañeros más próximos al balón forman un triángulo de presión sobre el rival que acaba de robar. El resto del equipo mantiene la línea para evitar el balón largo por detrás. Si en 5 segundos no se recupera, el equipo replantea el repliegue ordenado.",
  keyPoints: [
    "La presión tras pérdida solo funciona si el equipo ya estaba compacto antes de perder el balón.",
    "Los jugadores lejanos al balón no persiguen; sostienen la línea para evitar el contragolpe directo.",
    "El rival que acaba de robar gasta 1-2 segundos en orientarse: ese es el momento exacto de máxima vulnerabilidad."
  ],
  commonMistakes: [
    "Todo el equipo se lanza a perseguir el balón, dejando espacios enormes a la espalda si la presión falla.",
    "Se abandona la presión a los 2 segundos y se repliega tarde, sin haber decidido claramente cuál de las dos opciones tomar."
  ],
  formationContext: "Exige jugadores con gran capacidad física; muy asociado al Juego de Posición neerlandés y a Guardiola.",
  formationHome: "4-3-3",
  formationAway: "4-3-3",
  boardStates: [
    {
      step: 1,
      caption: "Perdemos el balón atacando en campo rival. El mediocentro rival intercepta con espacio por delante.",
      players: step1Players,
      ball: ballAt(step1Players, "a7"),
      zones: [{ x: 30, y: 14, width: 45, height: 32, label: "Ventana de 5 segundos", variant: "warning" }],
    },
    {
      step: 2,
      caption: "Los 3 jugadores más cercanos cierran un triángulo de presión sobre el rival. La línea de fondo se mantiene.",
      players: step2Players,
      ball: ballAt(step2Players, "a7"),
      arrows: [
        { from: { x: 18, y: 18 }, to: { x: 35, y: 40 }, type: "press" },
        { from: { x: 82, y: 18 }, to: { x: 68, y: 45 }, type: "press" },
        { from: { x: 50, y: 18 }, to: { x: 55, y: 28 }, type: "press" },
      ],
      zones: [{ x: 28, y: 22, width: 45, height: 26, label: "Triángulo de presión", variant: "positive" }],
    },
    {
      step: 3,
      caption: "Recuperamos y transicionamos verticalmente de inmediato, sin tocar de más.",
      players: step3Players,
      ball: ballAt(step3Players, "h10"),
      arrows: [
        { from: { x: 55, y: 28 }, to: { x: 50, y: 10 }, type: "dribble" },
        { from: { x: 68, y: 45 }, to: { x: 75, y: 15 }, type: "run" },
      ],
      zones: [{ x: 30, y: 4, width: 40, height: 20, label: "Transición vertical inmediata", variant: "positive" }],
    },
  ],
  relatedSchemeIds: ["unit-pressing", "contragolpe"],
};
