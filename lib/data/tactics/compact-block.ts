import { TacticalScheme } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "./formations";

// Local: 4-3-3 defendiendo en bloque medio. La clave del esquema es que
// la distancia entre la línea defensiva (y=74) y la de mediocampo (y=62)
// es de 12 unidades ≈ 12 metros: la regla que explica el texto.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 74, "home", "h", 2), // defensa
  ...line(3, 62, "home", "h", 6), // mediocampo (12m por delante de la defensa)
  ...line(3, 42, "home", "h", 9), // delanteros replegados, ayudando al bloque
];

// Rival: 4-2-3-1 en fase de construcción, buscando meter al '9' en el
// pasillo entre las dos líneas del bloque local.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 20, "away", "a", 2), // defensa
  ...line(2, 38, "away", "a", 6), // doble pivote
  ...line(3, 52, "away", "a", 8), // mediapuntas
  ...line(1, 64, "away", "a", 11), // único punta, buscando la espalda del bloque
];

const step1Players = applyMoves([...HOME, ...AWAY], [
  ["a11", { highlighted: true }],
  ["h7", { highlighted: true }],
]);

const step2Players = applyMoves([...HOME, ...AWAY], [
  ["h2", { x: 6 }],
  ["h3", { x: 28 }],
  ["h4", { x: 54 }],
  ["h5", { x: 80 }],
  ["h6", { x: 10 }],
  ["h7", { x: 42 }],
  ["h8", { x: 74 }],
  ["a2", { x: 6, y: 46, highlighted: true }],
  ["a11", { x: 22, y: 58 }],
]);

export const COMPACT_BLOCK: TacticalScheme = {
  id: "bloque-compacto",
  category: "organizacion-defensiva",
  title: "El Bloque Compacto (Regla de los 12 Metros)",
  shortSummary: "La distancia vertical entre tu línea defensiva y tus mediocampistas nunca debe superar los 12 metros.",
  concept: "El fútbol moderno se juega comprimiendo el espacio. Si el equipo se estira, dejas pasillos interlineales libres donde los mediapuntas rivales te destruirán. El bloque se mueve como un solo acordeón, nunca como líneas independientes.",
  execution: "Cuando el rival construye, tu línea defensiva y tu línea de mediocampistas deben mantener siempre la misma distancia relativa. Si el rival empuja, tu bloque entero retrocede unos metros manteniendo la distancia; si presionas, sube completo. La distancia importa más que la posición absoluta en el campo.",
  keyPoints: [
    "La distancia interlineal (defensa-medio) no debe superar los 12 metros bajo ninguna circunstancia.",
    "El bloque se desplaza lateralmente completo hacia el lado donde está el balón.",
    "Un defensor nunca decide individualmente si sube o baja; lo decide el bloque."
  ],
  commonMistakes: [
    "Un defensor sale de la línea a presionar sin que el resto del bloque lo acompañe, abriendo un pasillo interior.",
    "El mediocampo se queda estático mientras la defensa retrocede, duplicando la distancia interlineal peligrosamente."
  ],
  formationContext: "Ideal en sistemas de 4 defensas con 3 mediocampistas (4-3-3 / 4-2-3-1).",
  formationHome: "4-3-3",
  formationAway: "4-2-3-1",
  boardStates: [
    {
      step: 1,
      caption: "El rival construye y estira el campo buscando meter a su '9' entre tus líneas.",
      players: step1Players,
      ball: ballAt(step1Players, "a4"),
      arrows: [{ from: { x: 62, y: 20 }, to: { x: 50, y: 64 }, type: "pass" }],
      zones: [{ x: 10, y: 62, width: 80, height: 12, label: "Distancia interlineal: 12 metros", variant: "positive" }],
    },
    {
      step: 2,
      caption: "El rival ataca por tu costado izquierdo. El bloque entero se desplaza hacia el balón sin romper la distancia.",
      players: step2Players,
      ball: ballAt(step2Players, "a2"),
      arrows: [
        { from: { x: 12, y: 20 }, to: { x: 6, y: 46 }, type: "run" },
        { from: { x: 10, y: 74 }, to: { x: 8, y: 56 }, type: "press", curved: true },
      ],
      zones: [{ x: 2, y: 62, width: 40, height: 12, label: "Bloque desplazado, misma distancia", variant: "positive" }],
    },
  ],
  relatedSchemeIds: ["unit-pressing", "gegenpressing"],
};
