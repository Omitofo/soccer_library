import { VisionConcept } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "../tactics/formations";

// ─────────────────────────────────────────────────────────────────────
// LA IDEA ANTES QUE LOS JUGADORES:
// El patrón clásico del "tercer hombre" tiene 3 roles fijos, no 3
// jugadores cualquiera:
//   A) el que da el pase de entrada (nuestro central, h3)
//   B) el que recibe sabiendo que va a ser presionado (nuestro pivote, h6)
//   C) el "tercer hombre" — "Tú" (h7) — que empieza LIBRE, en un medio
//      espacio, porque toda la atención rival está sobre A y B.
// El rival defiende con un mediocentro (a6) que marca de cerca a B.
// En cuanto el balón llega a B, a6 SALTA a presionarlo (su decisión
// natural: cerrar al que tiene el balón). Ese salto abre, a su espalda,
// la línea directa hacia C. B devuelve de primera hacia C, que gira con
// tiempo porque el rival que se recompone (a7) sale tarde, ya que tuvo
// que cubrir el hueco que a6 dejó al saltar.
// ─────────────────────────────────────────────────────────────────────

// Local: 4-3-3 en construcción.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 82, "home", "h", 2), // h2 rb, h3 cb (pasador), h4 cb, h5 lb
  ...line(3, 58, "home", "h", 6, [20, 46, 78]), // h6 (recibe presionado), h7 "Tú" (tercer hombre, medio espacio), h8
  ...line(3, 22, "home", "h", 9), // h9, h10, h11
];

// Rival: 4-3-3 en bloque medio.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 20, "away", "a", 2), // a2, a3, a4, a5
  ...line(3, 42, "away", "a", 6), // a6 (marca y salta sobre h6), a7 (cubre el hueco), a8
  ...line(3, 64, "away", "a", 9), // presión sobre la salida
];

const BASE = applyMoves([...HOME, ...AWAY], [["h7", { label: "Tú" }]]);

// Paso 1: el central (h3) va a pasar a h6. "Tú" (h7) ya escaneaste: estás
// libre en el medio espacio porque el rival tiene toda su atención en
// h6. a6 todavía marca de lejos, sin comprometerse.
const step1Players = applyMoves(BASE, [
  ["h6", { highlighted: true }],
  ["h7", { highlighted: true }],
  ["a6", { x: 26, y: 50 }], // se acerca, pero aún no salta
]);

// Paso 2: el balón llega a h6. a6 salta a presionarlo de inmediato — su
// reacción natural ante el balón — y esa decisión abre, a su espalda,
// la línea directa hacia ti. Ajustas medio paso para recibir de cara.
const step2Players = applyMoves(step1Players, [
  ["h6", { highlighted: false }],
  ["a6", { x: 24, y: 58, highlighted: true }], // salta a presionar, deja el hueco
  ["h7", { x: 52, y: 54, highlighted: true }], // te reacomodas al carril que quedó libre
]);

// Paso 3: h6 devuelve de primera hacia ti. El rival que intenta cubrir
// el hueco (a7) sale tarde porque tuvo que reaccionar al salto de a6, no
// a la jugada real. Recibes girado, con tiempo para progresar.
const step3Players = applyMoves(step2Players, [
  ["a7", { x: 56, y: 48, highlighted: true }], // cubre tarde el hueco que dejó a6
]);

export const THIRD_MAN_DETECTION_DATA: VisionConcept = {
  id: "deteccion-tercer-hombre-visual",
  category: "toma-de-decisiones",
  title: "Detección Visual del Tercer Hombre",
  shortSummary: "Antes de que tu compañero reciba presión, ya debes tener identificado quién es el hombre libre para el pase de ruptura.",
  concept: "El 'tercer hombre' tiene siempre tres roles fijos: quien da el pase de entrada, quien lo recibe sabiendo que será presionado, y el tercer hombre —tú—, que empieza libre porque toda la atención rival está puesta en los dos primeros. Tu trabajo es reconocerte como esa tercera pieza antes de que la jugada empiece.",
  execution: "Mientras el central prepara el pase de entrada, ubícate en el medio espacio donde ningún rival te está marcando de cerca. En cuanto el balón llega a tu compañero y el marcador rival salta a presionarlo, ese salto abre la línea directa hacia ti: ajusta tu posición medio paso para recibir de cara y con tiempo, listo para la devolución de primera.",
  keyPoints: [
    "El 'tercer hombre' no es un jugador cualquiera: es el que queda libre porque el rival concentra su atención en el pasador y en el receptor.",
    "El salto del marcador sobre tu compañero es la señal, no una sorpresa: ya sabías que iba a pasar y por eso estabas posicionado antes.",
    "El defensor que intenta cubrir el hueco reacciona al salto de su compañero, no a ti: por eso siempre llega tarde si la pared se ejecuta de primera."
  ],
  commonMistakes: [
    "Esperar a que el compañero esté ya presionado para empezar a buscar espacio, en vez de posicionarte antes de que la jugada empiece.",
    "Recibir de primera pero sin haber girado el cuerpo hacia adelante, desperdiciando el tiempo que te regaló la jugada."
  ],
  boardStates: [
    {
      step: 1,
      caption: "Nuestro central va a pasar a nuestro pivote. Tú, el tercer hombre, ya estás libre en el medio espacio: el rival todavía no salta, solo marca de lejos.",
      players: step1Players,
      ball: ballAt(step1Players, "h3"),
      arrows: [{ from: { x: 38, y: 82 }, to: { x: 46, y: 58 }, type: "pass" }],
      zones: [{ x: 62, y: 42, width: 26, height: 24, label: "Tercer hombre: libre", variant: "positive" }],
    },
    {
      step: 2,
      caption: "El balón llega al pivote. El marcador rival salta a presionarlo de inmediato: esa decisión abre, a su espalda, la línea directa hacia ti.",
      players: step2Players,
      ball: ballAt(step2Players, "h6"),
      arrows: [{ from: { x: 26, y: 50 }, to: { x: 24, y: 58 }, type: "press" }],
      zones: [{ x: 30, y: 44, width: 30, height: 18, label: "Línea abierta tras el salto", variant: "positive" }],
    },
    {
      step: 3,
      caption: "Devolución de primera hacia ti. El rival que intenta cubrir el hueco llega tarde: reaccionó al salto de su compañero, no a la jugada.",
      players: step3Players,
      ball: ballAt(step3Players, "h7"),
      arrows: [
        { from: { x: 20, y: 58 }, to: { x: 52, y: 54 }, type: "pass" },
        { from: { x: 50, y: 42 }, to: { x: 56, y: 48 }, type: "run" },
      ],
      zones: [{ x: 40, y: 32, width: 30, height: 20, label: "Recibes girado, con tiempo", variant: "positive" }],
    },
  ],
  relatedConceptIds: ["anticipacion-lineas-pase", "escaneo-alta-frecuencia"],
};
