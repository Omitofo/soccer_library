import { VisionConcept } from "./types";

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
      caption: "Mientras el balón viaja hacia ti, escaneas: la línea directa al '9' está cerrada por el marcador; la diagonal al interior está abierta.",
      players: [
        { id: "self", label: "Tú", x: 50, y: 80, team: "home", highlighted: true },
        { id: "st", label: "9", x: 50, y: 40, team: "home" },
        { id: "int", label: "8", x: 78, y: 65, team: "home" },
        { id: "origin", label: "5", x: 30, y: 105, team: "home" },
        { id: "mk", label: "R", x: 52, y: 55, team: "away" }
      ],
      ball: { x: 40, y: 92 },
      arrows: [{ from: { x: 30, y: 105 }, to: { x: 50, y: 80 }, type: "pass" }],
      zones: [
        { x: 40, y: 40, width: 24, height: 20, label: "Línea cerrada", variant: "warning" },
        { x: 62, y: 55, width: 26, height: 22, label: "Línea abierta", variant: "positive" }
      ]
    },
    {
      step: 2,
      caption: "Controlas orientado y ejecutas de primera la línea que ya habías decidido: no hay segundo toque de indecisión.",
      players: [
        { id: "self", label: "Tú", x: 50, y: 80, team: "home", highlighted: true },
        { id: "int", label: "8", x: 78, y: 65, team: "home" },
        { id: "mk", label: "R", x: 52, y: 55, team: "away" }
      ],
      ball: { x: 68, y: 70 },
      arrows: [{ from: { x: 50, y: 80 }, to: { x: 78, y: 65 }, type: "pass" }]
    }
  ],
  relatedConceptIds: ["escaneo-alta-frecuencia", "deteccion-tercer-hombre-visual"]
};