import { VisionConcept } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "../tactics/formations";

// Local: 4-3-3 construyendo. "Tú" eres el mediocentro (h7), a punto de
// recibir un pase de tu central.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 80, "home", "h", 2),
  ...line(3, 58, "home", "h", 6),
  ...line(3, 30, "home", "h", 9),
];

// Rival: 4-3-3 presionando la salida. a7 es tu marcador directo.
// El '10' (a10) se desplaza a x=30 en vez de x=50: en la posición por
// defecto quedaba casi exactamente sobre la línea de pase central →
// "Tú", lo que confundía visualmente con la marca real (que hace a7).
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 22, "away", "a", 2),
  ...line(3, 42, "away", "a", 6),
  ...line(3, 64, "away", "a", 9, [18, 30, 82]),
];

const BASE = applyMoves([...HOME, ...AWAY], [["h7", { label: "Tú" }]]);

// Paso 1: el central todavía tiene el balón. Escaneas y ubicas a tu marcador.
const step1Players = applyMoves(BASE, [
  ["h7", { highlighted: true }],
  ["a7", { highlighted: true }],
]);

// Paso 2: el balón viaja. Tu marcador directo (a7) ya arranca a cerrarte
// el espacio; el interior (a8) se corre a ayudar en el centro. Eso es
// justo lo que deja libre el carril donde vas a resolver: el que a8
// abandona al desplazarse hacia adentro.
const step2Players = applyMoves(step1Players, [
  ["a7", { x: 46, y: 50 }], // el rival reacciona y acorta distancia
  ["a8", { x: 68, y: 46 }], // el interior se cierra hacia el centro, dejando su carril
]);

// Paso 3: controlas orientado. Tu marcador llega, pero tarde: ya
// resolviste con el primer toque hacia el carril que a8 dejó libre.
const step3Players = applyMoves(step2Players, [
  ["a7", { x: 48, y: 54 }],
  ["a8", { x: 62, y: 42 }],
  ["h7", { highlighted: true }],
]);

export const SCANNING_DATA: VisionConcept = {
  id: "escaneo-alta-frecuencia",
  category: "escaneo",
  title: "Escaneo de Alta Frecuencia (3 a 5 Vistazos)",
  shortSummary: "El profesional escanea su entorno entre 3 y 5 veces antes de que el balón toque su bota. El amateur mira el balón fijamente.",
  concept: "Debes forzar a tu cuello a girar justo en los microsegundos en los que el balón se está moviendo de un compañero a otro. Escanear con el balón ya cerca es demasiado tarde: la decisión debe estar tomada antes del control.",
  execution: "No busques el balón con los ojos cuando ya sabes que viene hacia ti. Desconecta la mirada de la pelota por medio segundo, gira la cabeza hacia tu espalda para detectar la presión del rival y toma la decisión antes del control.",
  keyPoints: [
    "El momento óptimo de escaneo es mientras el balón viaja, no cuando ya está en tus pies.",
    "Cada escaneo debe responder una pregunta concreta: ¿dónde está mi marcador? ¿dónde está el espacio libre?",
    "La decisión de qué hacer con el balón debe estar tomada antes de recibirlo, no después."
  ],
  commonMistakes: [
    "Mirar el balón durante todo su trayecto, sin aprovechar la ventana de tiempo para escanear.",
    "Escanear una sola vez, muy pronto, y no repetirlo justo antes del control (la situación cambia en segundos)."
  ],
  boardStates: [
    {
      step: 1,
      caption: "Antes del pase: mientras tu central controla, giras el cuello para ubicar a tu marcador directo (a7).",
      players: step1Players,
      ball: ballAt(step1Players, "h4"),
      zones: [{ x: 34, y: 34, width: 32, height: 30, label: "Escaneo: marcador ubicado", variant: "positive" }],
    },
    {
      step: 2,
      caption: "Balón viajando: tu marcador (a7) ya corre a cerrarte, y el interior (a8) se corre a ayudar en el centro, dejando su carril libre.",
      players: step2Players,
      ball: { x: 56, y: 70 },
      arrows: [
        { from: { x: 62, y: 80 }, to: { x: 50, y: 58 }, type: "pass" },
        { from: { x: 50, y: 42 }, to: { x: 46, y: 50 }, type: "press" },
      ],
      zones: [{ x: 62, y: 25, width: 28, height: 25, label: "Espacio de ataque detectado", variant: "positive" }],
    },
    {
      step: 3,
      caption: "Control orientado: el primer toque ya va hacia el carril que a8 dejó libre, antes de que tu marcador llegue.",
      players: step3Players,
      ball: ballAt(step3Players, "h7"),
      arrows: [{ from: { x: 50, y: 58 }, to: { x: 75, y: 32 }, type: "dribble" }],
    },
  ],
  relatedConceptIds: ["perfilado-45-grados", "anticipacion-lineas-pase"],
};
