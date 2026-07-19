import { VisionConcept } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "../tactics/formations";

// ─────────────────────────────────────────────────────────────────────
// LA IDEA ANTES QUE LOS JUGADORES:
// Nuestro central (h3) tiene el balón. "Tú" (h7) eres el pivote que va a
// recibir. El rival te presiona con un 4-3-3 en bloque medio: su central
// derecho (a4) NUNCA sale de su línea — simplemente se queda goal-side
// del "9" (h10), tapando esa lectura sin moverse un metro (así se cubre
// una línea directa en la vida real: con posición, no con carreras). El
// carril que sí se abre es el de tu interior derecho (h8), porque el
// interior rival (a8), al ver que tú vas a recibir presionado, se corre
// hacia el centro para doblar la marca — y deja completamente solo su
// carril.
// ─────────────────────────────────────────────────────────────────────

// Local: 4-3-3 en construcción.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 80, "home", "h", 2), // h2 rb, h3 cb, h4 cb, h5 lb
  ...line(3, 58, "home", "h", 6), // h6, h7 (Tú), h8
  ...line(3, 22, "home", "h", 9), // h9, h10 (9 de referencia), h11
];

// Rival: 4-3-3 en bloque medio, presionando la salida.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 22, "away", "a", 2), // a2, a3, a4 (central que marca la sombra del '9'), a5
  ...line(3, 42, "away", "a", 6), // a6, a7 (marca directa a "Tú"), a8 (interior que va a doblar)
  ...line(3, 64, "away", "a", 9), // presión sobre la salida
];

const BASE = applyMoves([...HOME, ...AWAY], [["h7", { label: "Tú" }]]);

// Paso 1: el balón sale del central (h3) hacia ti. Tu marcador directo
// (a7) ya está encima tuyo. El central rival (a4) no se mueve ni un
// metro: solo mantiene su posición entre el "9" y su portería, cerrando
// esa lectura con pura ocupación de espacio.
const step1Players = applyMoves(BASE, [
  ["h7", { highlighted: true }],
  ["a7", { highlighted: true }],
]);

// Paso 2: en el instante en que tú recibes presionado, el interior rival
// (a8) decide doblar la marca y se corre hacia el centro para ayudar a
// a7. Ese gesto —no un fallo posicional del central, sino una decisión
// de apretar el centro— es lo que deja completamente libre el carril
// exterior hacia h8.
const step2Players = applyMoves(step1Players, [
  ["a7", { x: 47, y: 52 }], // aprieta un paso más sobre ti
  ["a8", { x: 62, y: 46 }], // dobla la marca hacia el centro, abandona su carril
]);

export const PASSING_LANE_DATA: VisionConcept = {
  id: "anticipacion-lineas-pase",
  category: "toma-de-decisiones",
  title: "Anticipación de Líneas de Pase Antes de Recibir",
  shortSummary: "Escanea qué líneas de pase están abiertas mientras el balón viaja, para decidir tu próxima acción en el mismo instante del control.",
  concept: "Un jugador de élite no piensa qué hacer cuando el balón ya está en sus pies; ya sabe qué línea de pase está disponible antes de recibir, porque escaneó las coberturas del rival mientras el balón viajaba hacia él.",
  execution: "Mientras el balón viaja, identifica qué líneas de pase están tapadas por la posición (no por la carrera) del defensor, y cuáles se abren porque un rival decide doblar la marca en el centro. Al controlar, ejecuta directamente la opción ya decidida, sin un segundo toque de indecisión.",
  keyPoints: [
    "Una línea 'cerrada por posición' no requiere que el defensor se mueva: el central rival ya está goal-side de tu '9', y eso basta para desaconsejar ese pase.",
    "Cuando un rival dobla la marca hacia el balón, abandona su carril: esa decisión, no un error individual, es la que abre el espacio.",
    "La decisión se toma antes del control, no después: el primer toque ya debe orientar hacia la opción elegida."
  ],
  commonMistakes: [
    "Recibir el balón y solo entonces empezar a buscar opciones, perdiendo el segundo de ventaja sobre la presión.",
    "Forzar el pase directo al '9' solo porque es la opción más vistosa, ignorando que el central rival lleva toda la jugada cubriendo esa línea sin moverse."
  ],
  boardStates: [
    {
      step: 1,
      caption: "El balón sale de tu central hacia ti. Tu marcador directo ya está encima; el central rival, sin moverse un metro, sigue goal-side de tu '9' y cierra esa lectura solo con su posición.",
      players: step1Players,
      ball: { x: 58, y: 70 },
      arrows: [{ from: { x: 62, y: 80 }, to: { x: 50, y: 58 }, type: "pass" }],
      zones: [
        { x: 40, y: 8, width: 22, height: 22, label: "Cerrada por posición, no por carrera", variant: "warning" },
        { x: 62, y: 42, width: 26, height: 22, label: "Se abre si doblan la marca", variant: "neutral" },
      ],
    },
    {
      step: 2,
      caption: "Presionado, el interior rival decide doblar la marca sobre ti y abandona su carril: ese es el gesto que abre la diagonal hacia tu interior derecho.",
      players: step2Players,
      ball: ballAt(step2Players, "h7"),
      arrows: [
        { from: { x: 82, y: 42 }, to: { x: 62, y: 46 }, type: "run" },
        { from: { x: 50, y: 58 }, to: { x: 82, y: 58 }, type: "pass" },
      ],
      zones: [{ x: 68, y: 40, width: 24, height: 22, label: "Carril abandonado: línea abierta", variant: "positive" }],
    },
  ],
  relatedConceptIds: ["escaneo-alta-frecuencia", "deteccion-tercer-hombre-visual"],
};
