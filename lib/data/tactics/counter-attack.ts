import { TacticalScheme } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "./formations";

// Local (home): defendíamos replegados en bloque bajo mientras el rival
// atacaba con muchos efectivos. Los delanteros se quedan algo más
// adelantados que el resto del bloque, listos para el salto vertical en
// el instante exacto de la recuperación.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 90, "home", "h", 2), // línea defensiva muy profunda, cerca del arco propio
  ...line(3, 75, "home", "h", 6), // mediocampo compacto y replegado
  ...line(3, 55, "home", "h", 9), // delanteros adelantados, esperando el balón largo
];

// Rival (away): atacaba con muchos hombres. Por eso su línea defensiva
// quedó altísima (y=55, muy lejos de su propio arco en y=3) y su
// mediocampo/ataque están volcados dentro de campo local: exactamente el
// riesgo que el contragolpe castiga.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 55, "away", "a", 2), // línea defensiva adelantada: alto riesgo, espacio a la espalda
  ...line(3, 72, "away", "a", 6), // mediocampo muy volcado al ataque
  ...line(3, 88, "away", "a", 9), // delanteros dentro/cerca del área local
];

// Paso 1: el rival pierde el balón en nuestra medular. El mediocentro
// local (h7) intercepta; el mediocentro rival más cercano (a7) reacciona
// de inmediato, pero todo el bloque contrario quedó comprometido muy arriba.
const step1Players = applyMoves([...HOME, ...AWAY], [
  ["h7", { highlighted: true }],
  ["a7", { highlighted: true }],
]);

// Paso 2: contragolpe vertical directo. El balón vuela hacia el
// delantero, que ataca el espacio a la espalda de la línea rival,
// mientras todo el bloque contrario sprinta hacia su propio arco para
// intentar recomponerse.
const step2Players = applyMoves(step1Players, [
  ["h7", { x: 50, y: 66, highlighted: false }],
  ["h10", { x: 50, y: 32, highlighted: true }],
  ["h9", { x: 22, y: 46 }],
  ["h11", { x: 78, y: 46 }],
  ["a2", { x: 15, y: 38 }],
  ["a3", { x: 40, y: 30 }],
  ["a4", { x: 60, y: 28 }],
  ["a5", { x: 85, y: 40 }],
  ["a6", { x: 25, y: 48 }],
  ["a7", { x: 50, y: 46 }],
  ["a8", { x: 75, y: 50 }],
]);

// Paso 3: definición en superioridad numérica. El rival recompuso algo
// su línea, pero llega tarde y no alcanza a igualar el número de
// atacantes que entran al área.
const step3Players = applyMoves(step2Players, [
  ["h10", { x: 50, y: 12, highlighted: true }],
  ["h9", { x: 30, y: 16 }],
  ["h11", { x: 70, y: 16 }],
  ["a3", { x: 40, y: 14 }],
  ["a4", { x: 60, y: 12 }],
  ["a2", { x: 22, y: 20, highlighted: true }], // marca tarde al extremo
  ["a5", { x: 78, y: 20, highlighted: true }], // marca tarde al otro extremo
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
  formationContext: "Depende más de la lectura del momento del partido que de un sistema fijo; frecuente contra rivales que atacan con muchos efectivos y dejan la línea defensiva expuesta.",
  formationHome: "4-3-3",
  formationAway: "4-3-3",
  boardStates: [
    {
      step: 1,
      caption: "Recuperamos el balón en nuestra medular. El rival, que atacaba con muchos hombres, reacciona de inmediato, pero su línea defensiva quedó altísima y expuesta.",
      players: step1Players,
      ball: ballAt(step1Players, "h7"),
      arrows: [{ from: { x: 50, y: 72 }, to: { x: 50, y: 75 }, type: "press" }],
      zones: [{ x: 10, y: 0, width: 80, height: 50, label: "Espacio abierto: superioridad en campo rival", variant: "positive" }],
    },
    {
      step: 2,
      caption: "Contragolpe vertical directo: mientras el balón vuela al delantero, todo el bloque rival corre hacia atrás para recomponerse.",
      players: step2Players,
      ball: { x: 50, y: 50 },
      arrows: [
        { from: { x: 50, y: 66 }, to: { x: 50, y: 32 }, type: "pass" },
        { from: { x: 18, y: 55 }, to: { x: 22, y: 46 }, type: "run" },
        { from: { x: 82, y: 55 }, to: { x: 78, y: 46 }, type: "run" },
        { from: { x: 12, y: 55 }, to: { x: 15, y: 38 }, type: "run", curved: true },
        { from: { x: 88, y: 55 }, to: { x: 85, y: 40 }, type: "run", curved: true },
      ],
      zones: [{ x: 10, y: 0, width: 80, height: 55, label: "3 vs 2 en campo rival", variant: "positive" }],
    },
    {
      step: 3,
      caption: "El rival marca tarde a los extremos: la superioridad numérica ya está resuelta antes de que puedan igualarla.",
      players: step3Players,
      ball: ballAt(step3Players, "h10"),
      arrows: [
        { from: { x: 22, y: 46 }, to: { x: 30, y: 16 }, type: "run" },
        { from: { x: 78, y: 46 }, to: { x: 70, y: 16 }, type: "run" },
        { from: { x: 15, y: 38 }, to: { x: 22, y: 20 }, type: "run", curved: true },
        { from: { x: 85, y: 40 }, to: { x: 78, y: 20 }, type: "run", curved: true },
      ],
      zones: [{ x: 15, y: 2, width: 70, height: 20, label: "Definición en superioridad numérica", variant: "positive" }],
    },
  ],
  relatedSchemeIds: ["gegenpressing"],
};
