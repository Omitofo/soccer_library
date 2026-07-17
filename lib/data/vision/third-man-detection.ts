import { VisionConcept } from "./types";

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
      caption: "Tu pivote recibe con presión en camino. Tú, como tercer hombre, ya escaneaste y sabes que quedarás libre.",
      players: [
        { id: "pivot", label: "5", x: 50, y: 90, team: "home" },
        { id: "self", label: "Tú", x: 75, y: 60, team: "home", highlighted: true },
        { id: "mk", label: "R", x: 50, y: 65, team: "away" }
      ],
      ball: { x: 50, y: 90 },
      arrows: [{ from: { x: 50, y: 65 }, to: { x: 50, y: 85 }, type: "press" }],
      zones: [{ x: 62, y: 45, width: 26, height: 26, label: "Tercer hombre: libre", variant: "positive" }]
    },
    {
      step: 2,
      caption: "En cuanto la presión llega, el pivote devuelve de primera hacia ti, ya posicionado y sin necesidad de pensarlo.",
      players: [
        { id: "pivot", label: "5", x: 50, y: 90, team: "home" },
        { id: "self", label: "Tú", x: 75, y: 60, team: "home", highlighted: true },
        { id: "mk", label: "R", x: 50, y: 78, team: "away" }
      ],
      ball: { x: 68, y: 65 },
      arrows: [{ from: { x: 50, y: 90 }, to: { x: 75, y: 60 }, type: "pass" }]
    }
  ],
  relatedConceptIds: ["anticipacion-lineas-pase", "escaneo-alta-frecuencia"]
};