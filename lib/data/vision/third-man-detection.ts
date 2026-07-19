import { VisionConcept } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "../tactics/formations";

// Local: 4-3-3. El pivote (h6) recibe con presión en camino. "Tú" (h7)
// eres el tercer hombre: ya escaneaste y sabes que vas a quedar libre.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 82, "home", "h", 2),
  ...line(3, 62, "home", "h", 6),
  ...line(3, 30, "home", "h", 9),
];

// Rival: 4-3-3. a7 salta a presionar al pivote.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 22, "away", "a", 2),
  ...line(3, 42, "away", "a", 6),
  ...line(3, 64, "away", "a", 9),
];

const BASE = applyMoves([...HOME, ...AWAY], [
  ["h7", { label: "Tú", x: 75, y: 50 }], // te adelantas a la jugada, ya posicionado en el espacio libre
]);

// Paso 1: a7 salta a presionar al pivote. Como reacción, a8 se corre
// hacia el centro para cubrir el hueco que a7 deja atrás.
const step1Players = applyMoves(BASE, [
  ["a7", { x: 50, y: 54, highlighted: true }],
  ["a8", { x: 65, y: 46 }],
  ["h6", { highlighted: true }],
  ["h7", { highlighted: true }],
]);

// Paso 2: el pivote devuelve de primera hacia el tercer hombre. a7 llega
// tarde al punto de origen; a8, que ya se había movido, corre a cerrar
// a "Tú", pero el balón llega antes.
const step2Players = applyMoves(step1Players, [
  ["a7", { x: 50, y: 60 }],
  ["a8", { x: 70, y: 48 }],
]);

export const THIRD_MAN_DETECTION_DATA: VisionConcept = {
  id: "deteccion-tercer-hombre-visual",
  category: "toma-de-decisiones",
  title: "Detección Visual del Tercer Hombre",
  shortSummary: "Antes de que tu compañero reciba presión, ya debes tener identificado quién es el hombre libre para el pase de ruptura.",
  concept: "El concepto de 'tercer hombre' (clave en el Juego de Posición) solo funciona si alguien lo ve venir antes de que ocurra. Tu trabajo como espectador de la jugada es escanear con antelación para saber, en el instante en que tu compañero reciba presión, exactamente hacia dónde debe devolver el balón.",
  execution: "Mientras tu compañero con el balón todavía tiene tiempo, escanea el campo para ubicar al jugador que quedará libre cuando el rival salte a presionar. Comunica tu posición (verbal o con movimiento) para que el pase de ruptura sea automático.",
  keyPoints: [
    "El 'tercer hombre' debe estar identificado antes de que la presión rival se active, no durante.",
    "Tu movimiento hacia el espacio libre debe anticiparse al salto de presión del rival, no reaccionar a él.",
    "La comunicación (visual o verbal) con el compañero que tiene el balón acelera la ejecución del pase de ruptura."
  ],
  commonMistakes: [
    "Esperar a que el compañero esté ya presionado para empezar a buscar espacio, llegando tarde a la jugada.",
    "No comunicar la disponibilidad, obligando al compañero presionado a escanear él mismo bajo presión."
  ],
  boardStates: [
    {
      step: 1,
      caption: "Tu pivote recibe con presión en camino. Tú, como tercer hombre, ya escaneaste y sabes que quedarás libre; el rival se reordena para cubrir el hueco.",
      players: step1Players,
      ball: ballAt(step1Players, "h6"),
      arrows: [{ from: { x: 50, y: 42 }, to: { x: 50, y: 54 }, type: "press" }],
      zones: [{ x: 62, y: 36, width: 26, height: 26, label: "Tercer hombre: libre", variant: "positive" }],
    },
    {
      step: 2,
      caption: "En cuanto la presión llega, el pivote devuelve de primera hacia ti. El rival que reaccionó también llega, pero tarde.",
      players: step2Players,
      ball: ballAt(step2Players, "h7"),
      arrows: [
        { from: { x: 50, y: 62 }, to: { x: 75, y: 50 }, type: "pass" },
        { from: { x: 65, y: 46 }, to: { x: 70, y: 48 }, type: "press" },
      ],
    },
  ],
  relatedConceptIds: ["anticipacion-lineas-pase", "escaneo-alta-frecuencia"],
};
