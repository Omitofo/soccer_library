import { TacticalScheme } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "./formations";

// Local: 4-3-3. La idea es amontonar 5 jugadores en el costado izquierdo
// (x bajo) mientras el lateral derecho (h5) se queda solo, listo para
// recibir el cambio de orientación.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 79, "home", "h", 2, [12, 38, 62, 88]),
  ...line(3, 62, "home", "h", 6, [20, 50, 80]),
  ...line(3, 34, "home", "h", 9, [15, 45, 85]),
];

// Rival: 4-4-2 en bloque bajo.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 15, "away", "a", 2, [12, 38, 62, 88]),
  ...line(4, 36, "away", "a", 6, [15, 38, 62, 85]),
  ...line(2, 55, "away", "a", 10, [38, 62]),
];

// Paso 1: el rival bascula (se desplaza en bloque) hacia el lado
// sobrecargado para tapar todas las líneas de pase cercanas al balón.
const step1Players = applyMoves([...HOME, ...AWAY], [
  ["h2", { x: 15, y: 55 }],
  ["h7", { x: 35, y: 58 }],
  ["h10", { x: 28, y: 40 }],
  ["a2", { x: 8, y: 18 }],
  ["a3", { x: 28, y: 16 }],
  ["a6", { x: 12, y: 40 }],
  ["a7", { x: 30, y: 38 }],
  ["a10", { x: 25, y: 55 }],
  ["a5", { x: 78, y: 20 }], // el lateral débil se cierra un poco hacia el centro
  ["a9", { x: 70, y: 40 }],
]);

// Paso 2: cambio de orientación. El rival reacciona tarde: recién
// empieza a recomponer el bloque hacia el lado que quedó libre.
const step2Players = applyMoves(step1Players, [
  ["h5", { x: 90, y: 55, highlighted: true }],
  ["h7", { highlighted: true }],
  ["a5", { x: 82, y: 32 }], // corre a cerrar el espacio, pero llega tarde
  ["a9", { x: 78, y: 38 }],
  ["a4", { x: 66, y: 20 }],
  ["a11", { x: 60, y: 55 }],
]);

// Paso 3: el rival termina de recomponerse en su propia área, marcando
// a los atacantes que llegan al remate.
const step3Players = applyMoves(step2Players, [
  ["h5", { x: 90, y: 18 }],
  ["h9", { x: 35, y: 10 }],
  ["h10", { x: 62, y: 8, highlighted: true }],
  ["h7", { highlighted: false }],
  ["a1", { x: 50, y: 4 }],
  ["a3", { x: 40, y: 12 }],
  ["a4", { x: 60, y: 12 }],
  ["a5", { x: 75, y: 14 }], // recupera para tapar el segundo palo
  ["a2", { x: 30, y: 16 }], // vuelve a marcar el primer palo
]);

export const WING_OVERLOAD: TacticalScheme = {
  id: "sobrecarga-banda",
  category: "ataque",
  title: "Sobrecarga de Banda y Cambio de Orientación",
  shortSummary: "Atraes a todo el bloque rival hacia un costado, y en el momento justo cambias el juego al lado que quedó vacío.",
  concept: "Concentrar varios jugadores en un mismo costado no busca resolver la jugada ahí mismo, sino atraer al bloque defensivo rival lo suficiente para que el lado opuesto quede con espacio y tiempo libres.",
  execution: "Se agrupan 4 o 5 jugadores en un mismo tercio del campo para forzar al rival a desplazarse en bloque hacia ese lado. En el momento en que la sobrecarga está formada, un pase largo y diagonal cambia la orientación del juego hacia el lateral contrario, que recibe con metros de ventaja.",
  keyPoints: [
    "La sobrecarga es una distracción con propósito, no el objetivo final de la jugada.",
    "El cambio de orientación debe ejecutarse en el instante exacto en que el rival ya comprometió su bloque, ni antes ni después.",
    "El jugador que recibe en el lado libre necesita tiempo y espacio: por eso el pase debe ser preciso y con la velocidad justa."
  ],
  commonMistakes: [
    "Se insiste demasiado en el lado sobrecargado y se pierde el balón antes de cambiar el juego.",
    "El cambio de orientación llega tarde, cuando el rival ya recompuso su bloque hacia el lado débil."
  ],
  formationContext: "Efectivo en cualquier sistema con amplitud clara por ambos costados (4-3-3, 3-4-3).",
  formationHome: "4-3-3",
  formationAway: "4-4-2",
  boardStates: [
    {
      step: 1,
      caption: "Sobrecargamos el costado izquierdo con 5 jugadores. Todo el bloque rival bascula hacia ese lado para taparlo.",
      players: step1Players,
      ball: ballAt(step1Players, "h7"),
      zones: [
        { x: 5, y: 15, width: 55, height: 65, label: "Sobrecarga: 5 vs 5 en banda izquierda", variant: "positive" },
        { x: 68, y: 15, width: 28, height: 65, label: "Espacio libre (lado débil)", variant: "warning" },
      ],
    },
    {
      step: 2,
      caption: "Cambio de orientación: el pase diagonal llega antes de que el rival termine de recomponer su bloque hacia ese costado.",
      players: step2Players,
      ball: ballAt(step2Players, "h5"),
      arrows: [
        { from: { x: 35, y: 58 }, to: { x: 90, y: 55 }, type: "pass", curved: true },
        { from: { x: 78, y: 20 }, to: { x: 82, y: 32 }, type: "run" },
      ],
      zones: [{ x: 75, y: 40, width: 22, height: 30, label: "Recibe con tiempo y espacio", variant: "positive" }],
    },
    {
      step: 3,
      caption: "El rival ya recompuso su línea en el área: centro al segundo palo para definir.",
      players: step3Players,
      ball: ballAt(step3Players, "h10"),
      arrows: [
        { from: { x: 90, y: 18 }, to: { x: 62, y: 8 }, type: "pass", curved: true },
        { from: { x: 45, y: 34 }, to: { x: 35, y: 10 }, type: "run" },
        { from: { x: 82, y: 32 }, to: { x: 75, y: 14 }, type: "run" },
      ],
      zones: [{ x: 20, y: 2, width: 60, height: 20, label: "Área rival: definición", variant: "positive" }],
    },
  ],
  relatedSchemeIds: ["salida-lateral-falso"],
};
