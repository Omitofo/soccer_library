import { VisionConcept } from "./types";

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
      caption: "Antes del pase: mientras tu central controla, giras el cuello para ubicar a tu marcador más cercano.",
      players: [
        { id: "self", label: "Tú", x: 55, y: 70, team: "home", highlighted: true },
        { id: "cb", label: "4", x: 50, y: 92, team: "home" },
        { id: "mk", label: "R", x: 62, y: 60, team: "away" }
      ],
      ball: { x: 50, y: 92 },
      zones: [{ x: 45, y: 45, width: 30, height: 30, label: "Escaneo: marcador ubicado", variant: "positive" }]
    },
    {
      step: 2,
      caption: "Balón viajando: en el instante exacto en que sale el pase, quitas la vista del balón medio segundo y miras el espacio.",
      players: [
        { id: "self", label: "Tú", x: 55, y: 70, team: "home", highlighted: true },
        { id: "cb", label: "4", x: 50, y: 92, team: "home" },
        { id: "mk", label: "R", x: 62, y: 60, team: "away" }
      ],
      ball: { x: 53, y: 82 },
      arrows: [{ from: { x: 50, y: 92 }, to: { x: 55, y: 70 }, type: "pass" }],
      zones: [{ x: 65, y: 40, width: 28, height: 25, label: "Espacio de ataque detectado", variant: "positive" }]
    },
    {
      step: 3,
      caption: "Control orientado: regresas la mirada al balón solo para asegurar el primer toque hacia el espacio ya descubierto.",
      players: [
        { id: "self", label: "Tú", x: 55, y: 70, team: "home", highlighted: true },
        { id: "mk", label: "R", x: 62, y: 60, team: "away" }
      ],
      ball: { x: 55, y: 70 },
      arrows: [{ from: { x: 55, y: 70 }, to: { x: 78, y: 45 }, type: "dribble" }]
    }
  ],
  relatedConceptIds: ["perfilado-45-grados", "anticipacion-lineas-pase"]
};
