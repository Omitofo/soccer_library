import { TacticalScheme } from "./types";

export const WING_OVERLOAD: TacticalScheme = {
  id: "sobrecarga-banda",
  category: "ataque",
  title: "Sobrecarga de Banda y Cambio de Orientación",
  shortSummary: "Atraes a todo el bloque rival hacia un costado, y en el momento justo cambias el juego al lado que quedó vacío.",
  concept: "Concentrar varios jugadores en un mismo costado no busca resolver la jugada ahí mismo, sino atraer al bloque defensivo rival lo suficiente para que el lado opuesto quede con espacio y tiempo libres.",
  execution: "Se agrupan 4 o 5 jugadores en un mismo tercio del campo para forzar al rival a desplazarse en bloque hacia ese lado. En el momento en que la sobrecarga está formada, un pase largo y diagonal cambia la orientación del juego hacia el lateral contrario, que recibe con metros de ventaja.",
  keyPoints: [
    "La sobrecarga es una distracción con propósito, no el objetivo final de la jugada.",
    "El cambio de orientación debe ejecutarse en el instante exacto en que el rival ya comprometió su bloque, ni antes ni después.",
    "El jugador que recibe en el lado libre necesita tiempo y espacio: por eso el pase debe ser preciso y con la velocidad justa."
  ],
  commonMistakes: [
    "Se insiste demasiado en el lado sobrecargado y se pierde el balón antes de cambiar el juego.",
    "El cambio de orientación llega tarde, cuando el rival ya recompuso su bloque hacia el lado débil."
  ],
  formationContext: "Efectivo en cualquier sistema con amplitud clara por ambos costados (4-3-3, 3-4-3).",
  boardStates: [
    {
      step: 1,
      caption: "Sobrecargamos el costado izquierdo con 5 jugadores para atraer al bloque rival.",
      players: [
        { id: "rb", label: "2", x: 15, y: 95, team: "home" },
        { id: "cb1", label: "4", x: 35, y: 110, team: "home" },
        { id: "cb2", label: "6", x: 65, y: 110, team: "home" },
        { id: "lb", label: "3", x: 88, y: 95, team: "home" },
        { id: "dm", label: "5", x: 45, y: 90, team: "home" },
        { id: "cm1", label: "8", x: 20, y: 70, team: "home" },
        { id: "cm2", label: "10", x: 55, y: 75, team: "home" },
        { id: "rw", label: "7", x: 10, y: 45, team: "home" },
        { id: "st", label: "9", x: 45, y: 40, team: "home" },
        { id: "lw", label: "11", x: 30, y: 60, team: "home" },
        { id: "rrival1", label: "R", x: 15, y: 45, team: "away" },
        { id: "rrival2", label: "R", x: 30, y: 55, team: "away" },
        { id: "rrival3", label: "R", x: 45, y: 50, team: "away" }
      ],
      zones: [
        { x: 5, y: 30, width: 55, height: 70, label: "Sobrecarga: 5 vs 3 en banda izquierda", variant: "positive" },
        { x: 70, y: 30, width: 25, height: 70, label: "Espacio libre (lado débil)", variant: "warning" }
      ]
    },
    {
      step: 2,
      caption: "Cambio de orientación: un pase diagonal largo lleva el balón al lateral que quedó libre.",
      players: [
        { id: "rb", label: "2", x: 15, y: 95, team: "home" },
        { id: "cb1", label: "4", x: 35, y: 110, team: "home" },
        { id: "cb2", label: "6", x: 65, y: 110, team: "home" },
        { id: "lb", label: "3", x: 90, y: 65, team: "home", highlighted: true },
        { id: "dm", label: "5", x: 45, y: 90, team: "home" },
        { id: "cm2", label: "10", x: 55, y: 75, team: "home" },
        { id: "st", label: "9", x: 45, y: 40, team: "home" },
        { id: "rrival1", label: "R", x: 15, y: 45, team: "away" },
        { id: "rrival2", label: "R", x: 30, y: 55, team: "away" },
        { id: "rclose", label: "R", x: 72, y: 55, team: "away" }
      ],
      arrows: [{ from: { x: 45, y: 90 }, to: { x: 90, y: 65 }, type: "pass", curved: true }],
      zones: [{ x: 75, y: 45, width: 22, height: 30, label: "Recibe con tiempo y espacio", variant: "positive" }]
    },
    {
      step: 3,
      caption: "Centro al segundo palo: definición tras el cambio de orientación.",
      players: [
        { id: "lb", label: "3", x: 90, y: 65, team: "home" },
        { id: "st", label: "9", x: 35, y: 12, team: "home" },
        { id: "lw", label: "11", x: 60, y: 10, team: "home", highlighted: true },
        { id: "rgk", label: "R", x: 50, y: 5, team: "away" },
        { id: "rcb", label: "R", x: 40, y: 15, team: "away" }
      ],
      ball: { x: 60, y: 10 },
      arrows: [
        { from: { x: 90, y: 65 }, to: { x: 60, y: 10 }, type: "pass", curved: true },
        { from: { x: 45, y: 40 }, to: { x: 35, y: 12 }, type: "run" },
        { from: { x: 30, y: 60 }, to: { x: 60, y: 10 }, type: "run" }
      ],
      zones: [{ x: 20, y: 4, width: 60, height: 20, label: "Área rival: segundo palo", variant: "positive" }]
    }
  ],
  relatedSchemeIds: ["salida-lateral-falso"]
};