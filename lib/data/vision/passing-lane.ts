import { VisionConcept } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "../tactics/formations";

// Local: 4-3-3. "Tú" (h7) vas a recibir de tu central (h4). Tienes dos
// opciones: la línea directa a tu '9' (h10) o la diagonal a tu interior
// derecho (h8).
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 80, "home", "h", 2),
  ...line(3, 58, "home", "h", 6),
  ...line(3, 25, "home", "h", 9),
];

// Rival: 4-3-3 en bloque medio.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 22, "away", "a", 2),
  ...line(3, 42, "away", "a", 6),
  ...line(3, 62, "away", "a", 9),
];

const BASE = applyMoves([...HOME, ...AWAY], [["h7", { label: "Tú" }]]);

// Paso 1: mientras el balón viaja, el central rival (a4) se ajusta para
// tapar la línea directa al '9'; el interior derecho (a8) se cierra un
// poco hacia el centro, pero deja la diagonal abierta.
const step1Players = applyMoves(BASE, [
  ["h7", { highlighted: true }],
  ["a4", { x: 52, y: 46, highlighted: true }],
  ["a8", { x: 70, y: 44 }],
]);

// Paso 2: controlas orientado y ejecutas de primera la diagonal ya
// decidida. El rival que cerraba la línea directa llega, pero tarde a
// la otra opción; el interior rival tampoco alcanza a cerrarla.
const step2Players = applyMoves(step1Players, [
  ["a4", { x: 50, y: 40 }],
  ["a8", { x: 76, y: 50 }],
]);

export const PASSING_LANE_DATA: VisionConcept = {
  id: "anticipacion-lineas-pase",
  category: "toma-de-decisiones",
  title: "Anticipación de Líneas de Pase Antes de Recibir",
  shortSummary: "Escanea qué líneas de pase están abiertas mientras el balón viaja, para decidir tu próxima acción en el mismo instante del control.",
  concept: "Un jugador de élite no piensa qué hacer cuando el balón ya está en sus pies; ya sabe qué línea de pase está disponible antes de recibir, porque escaneó las coberturas del rival mientras el balón viajaba hacia él.",
  execution: "Mientras el balón viaja, identifica qué líneas de pase están tapadas por la posición del defensor y cuáles están abiertas. Al controlar, ejecuta directamente la opción ya decidida, sin un segundo toque de indecisión.",
  keyPoints: [
    "Una línea de pase 'cerrada' es la que el defensor puede cortar con un solo paso; una 'abierta' exige que se desplace.",
    "La decisión se toma antes del control, no después: el primer toque ya debe orientar hacia la opción elegida.",
    "Reevalúa constantemente: una línea abierta puede cerrarse en el mismo segundo si el defensor reacciona."
  ],
  commonMistakes: [
    "Recibir el balón y solo entonces empezar a buscar opciones, perdiendo el segundo de ventaja sobre la presión.",
    "Insistir en una línea de pase que ya se cerró, porque la decisión se tomó demasiado pronto y no se reevaluó."
  ],
  boardStates: [
    {
      step: 1,
      caption: "Mientras el balón viaja hacia ti, el central rival se ajusta para tapar la línea directa a tu '9'; la diagonal al interior queda abierta.",
      players: step1Players,
      ball: { x: 58, y: 70 },
      arrows: [{ from: { x: 62, y: 80 }, to: { x: 50, y: 58 }, type: "pass" }],
      zones: [
        { x: 40, y: 30, width: 22, height: 24, label: "Línea cerrada", variant: "warning" },
        { x: 66, y: 42, width: 24, height: 22, label: "Línea abierta", variant: "positive" },
      ],
    },
    {
      step: 2,
      caption: "Controlas orientado y ejecutas de primera la diagonal ya decidida: no hay segundo toque de indecisión.",
      players: step2Players,
      ball: ballAt(step2Players, "h8"),
      arrows: [{ from: { x: 50, y: 58 }, to: { x: 82, y: 58 }, type: "pass" }],
    },
  ],
  relatedConceptIds: ["escaneo-alta-frecuencia", "deteccion-tercer-hombre-visual"],
};
