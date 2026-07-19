import { VisionConcept } from "./types";

export const BLIND_SPOT_DATA: VisionConcept = {
  id: "conciencia-360-punto-ciego",
  category: "conciencia-espacial",
  title: "El Método del Reloj: Conciencia de 360°",
  shortSummary: "Los scouts usan las horas del reloj para describir tu campo de visión. Las 12 son tu frente; las 6, tu punto ciego total.",
  concept: "Imagina un reloj centrado en ti: las 12 son la dirección hacia la que miras, las 6 son exactamente tu espalda. Todo lo que ocurre entre las 4 y las 8 (detrás tuyo) es invisible sin un giro de cuello deliberado. Un rival que se acerca por las 6 en punto es indetectable si no lo compruebas antes.",
  execution: "Antes de que el balón esté a menos de 3 pasos de ti, gira el cuello para revisar específicamente la zona de las 5, 6 y 7 (tu espalda). No esperes a sentir el contacto del defensor; a esa altura ya es tarde para reaccionar con ventaja.",
  keyPoints: [
    "El punto ciego no es un detalle menor: cubre aproximadamente 160° de tu entorno inmediato.",
    "Un rival aproximándose por las 6 en punto es la amenaza más común e ignorada en jugadores amateur.",
    "Revisar la espalda debe ser un hábito cronometrado, no una reacción a sonidos o sombras."
  ],
  commonMistakes: [
    "Confiar en 'sentir' al defensor por instinto en vez de confirmarlo con la vista.",
    "Girar el cuello demasiado tarde, cuando el balón ya está a un paso y no hay tiempo de ajustar el plan."
  ],
  exceptionNote: "Excepción a la regla: si vas a devolver el balón de primera intención para una pared (un-dos), no necesitas completar el giro de cuello justo en el instante de recibir. El objetivo de la pared es soltar el balón de inmediato hacia el compañero, no protegerlo bajo presión, así que el chequeo de tu espalda debe hacerse ANTES de pedir la pared (para saber que el camino de regreso está limpio), no durante ella. Forzar el giro completo en ese microsegundo solo te resta velocidad de ejecución sin aportar información nueva.",
  bodyDiagram: {
    playerAngle: 20,
    sectors: [
      { startAngle: -65, endAngle: 65, radius: 42, variant: "visible" },
      { startAngle: 65, endAngle: 100, radius: 42, variant: "peripheral" },
      { startAngle: -100, endAngle: -65, radius: 42, variant: "peripheral" },
      { startAngle: 100, endAngle: 260, radius: 42, variant: "blind" }
    ],
    markers: [
      { x: 30, y: 25, label: "Balón en camino", kind: "ball" },
      { x: 74, y: 32, label: "Espacio libre", kind: "space" },
      { x: 50, y: 88, label: "Rival — 6 en punto", kind: "defender" }
    ]
  },
  bodyDiagramCaption: "El rival que se aproxima directamente por tu espalda (las 6 en punto) no aparece en tu cono visible ni en tu periferia: solo un giro de cuello deliberado lo revela.",
  relatedConceptIds: ["perfilado-45-grados", "escaneo-alta-frecuencia"]
};
