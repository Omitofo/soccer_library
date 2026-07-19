import { TacticalScheme } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "./formations";

// Local: 4-3-3, recupera el balón en su campo con espacio por delante.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 85, "home", "h", 2),
  ...line(3, 68, "home", "h", 6),
  ...line(3, 45, "home", "h", 9),
];

// Rival: 4-3-3 que atacaba con muchos hombres y queda desorganizado
// tras la pérdida (línea alta, espacio a la espalda).
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 45, "away", "a", 2),
  ...line(3, 25, "away", "a", 6),
  ...line(3, 8, "away", "a", 9),
];

// Paso 1: el rival pierde el balón. El interceptor local (h7) roba;
// el rival más cercano (a3) reacciona de inmediato para cerrarle el paso.
const step1Players = applyMoves([...HOME, ...AWAY], [
  ["h7", { highlighted: true }],
  ["a3", { x: 45, y: 40, highlighted: true }],
]);

// Paso 2: contragolpe vertical. Todo el bloque rival ya está corriendo
// hacia atrás para recomponer, pero llega tarde a la carrera.
const step2Players = applyMoves(step1Players, [
  ["h7", { x: 50, y: 60, highlighted: false }],
  ["h10", { x: 50, y: 30, highlighted: true }],
  ["h9", { x: 20, y: 42 }],
  ["h11", { x: 80, y: 42 }],
  ["a3", { x: 48, y: 32 }], // sigue persiguiendo, pero el balón ya voló
  ["a2", { x: 25, y: 34 }], // recupera hacia su carril
  ["a4", { x: 62, y: 33 }],
  ["a5", { x: 80, y: 34 }],
  ["a6", { x: 25, y: 30 }], // el mediocampo también repliega a la carrera
  ["a7", { x: 50, y: 28 }],
  ["a8", { x: 75, y: 30 }],
]);

// Paso 3: definición en superioridad. El rival, aunque recompuso algo
// la línea, no alcanza a igualar el número de atacantes.
const step3Players = applyMoves(step2Players, [
  ["h10", { x: 50, y: 10, highlighted: true }],
  ["h9", { x: 25, y: 14 }],
  ["h11", { x: 75, y: 14 }],
  ["a1", { x: 50, y: 4 }],
  ["a2", { x: 30, y: 18, highlighted: true }], // marca tarde al extremo
  ["a3", { x: 50, y: 20 }], // vuelve a cubrir el centro del área
  ["a4", { x: 62, y: 18 }],
  ["a5", { x: 72, y: 18, highlighted: true }], // marca tarde al otro extremo
]);

export const COUNTER_ATTACK: TacticalScheme = {
  id: "contragolpe",
  category: "transiciones",
  title: "Transición Ofensiva: El Contragolpe Directo",
  shortSummary: "Al recuperar el balón con espacio por delante, la prioridad es la verticalidad inmediata, no la posesión pausada.",
  concept: "No toda recuperación de balón merece el mismo tratamiento. Si el rival queda desorganizado y hay espacio por delante, cada segundo que se retrasa el avance reduce la ventaja numérica que la transición ofrece.",
  execution: "Al recuperar, el jugador con el balón busca de inmediato el pase vertical hacia el compañero más adelantado. Los jugadores sin balón sprintan a ocupar los carriles abiertos, formando una superioridad numérica antes de que el rival recomponga su línea defensiva.",
  keyPoints: [
    "La decisión de contragolpear o pausar el juego debe tomarse en el primer segundo tras la recuperación.",
    "Los compañeros sin balón deben anticipar el contragolpe y arrancar la carrera antes incluso de que el balón llegue a sus pies.",
    "Una superioridad numérica de contragolpe (3 contra 2) debe resolverse con pocos toques: cuantos más toques, más tiempo tiene el rival para recomponerse."
  ],
  commonMistakes: [
    "Se recupera el balón con espacio libre pero el equipo elige pausar y recomponer la posesión, regalando la ventaja de la transición.",
    "Los jugadores de apoyo no arrancan la carrera a tiempo, llegando tarde a la superioridad numérica."
  ],
  formationContext: "Depende más de la lectura del momento del partido que de un sistema fijo; frecuente contra rivales que atacan con muchos efectivos.",
  formationHome: "4-3-3",
  formationAway: "4-3-3",
  boardStates: [
    {
      step: 1,
      caption: "Recuperamos el balón en campo propio. El rival, que atacaba con muchos hombres, reacciona de inmediato pero queda desorganizado.",
      players: step1Players,
      ball: ballAt(step1Players, "h7"),
      arrows: [{ from: { x: 38, y: 45 }, to: { x: 45, y: 40 }, type: "press" }],
      zones: [{ x: 15, y: 5, width: 70, height: 45, label: "Espacio abierto: superioridad en campo rival", variant: "positive" }],
    },
    {
      step: 2,
      caption: "Contragolpe vertical directo: mientras el balón vuela al delantero, todo el bloque rival corre hacia atrás para recomponerse.",
      players: step2Players,
      ball: ballAt(step2Players, "h10"),
      arrows: [
        { from: { x: 50, y: 60 }, to: { x: 50, y: 30 }, type: "pass" },
        { from: { x: 18, y: 45 }, to: { x: 20, y: 42 }, type: "run" },
        { from: { x: 82, y: 45 }, to: { x: 80, y: 42 }, type: "run" },
        { from: { x: 38, y: 25 }, to: { x: 25, y: 30 }, type: "run", curved: true },
        { from: { x: 88, y: 25 }, to: { x: 75, y: 30 }, type: "run", curved: true },
      ],
      zones: [{ x: 15, y: 5, width: 70, height: 30, label: "3 vs 2 en campo rival", variant: "positive" }],
    },
    {
      step: 3,
      caption: "El rival marca tarde a los extremos: la superioridad numérica ya está resuelta antes de que puedan igualarla.",
      players: step3Players,
      ball: ballAt(step3Players, "h10"),
      arrows: [
        { from: { x: 20, y: 42 }, to: { x: 25, y: 14 }, type: "run" },
        { from: { x: 80, y: 42 }, to: { x: 75, y: 14 }, type: "run" },
        { from: { x: 30, y: 34 }, to: { x: 30, y: 18 }, type: "run", curved: true },
        { from: { x: 80, y: 34 }, to: { x: 72, y: 18 }, type: "run", curved: true },
      ],
      zones: [{ x: 15, y: 2, width: 70, height: 20, label: "Definición en superioridad numérica", variant: "positive" }],
    },
  ],
  relatedSchemeIds: ["gegenpressing"],
};
