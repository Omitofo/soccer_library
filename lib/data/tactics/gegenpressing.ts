import { TacticalScheme } from "./types";

export const GEGENPRESSING: TacticalScheme = {
  id: "gegenpressing",
  category: "presion",
  title: "Presión Tras Pérdida (Regla de los 5 Segundos)",
  shortSummary: "El momento más peligroso es perder el balón. En vez de replegar, los 3 jugadores más cercanos asfixian al rival de inmediato.",
  concept: "Cuando arriesgas atacando con muchos jugadores adelantados, perder el balón es matemáticamente inevitable en algún momento. La solución no es evitarlo, es reaccionar: los jugadores más cercanos al punto de pérdida presionan en los primeros 5 segundos, cuando el rival todavía no ha levantado la cabeza.",
  execution: "En el instante de la pérdida, los 3 compañeros más próximos al balón forman un triángulo de presión sobre el rival que acaba de robar. El resto del equipo mantiene la línea para evitar el balón largo por detrás. Si en 5 segundos no se recupera, el equipo replantea el repliegue ordenado.",
  keyPoints: [
    "La presión tras pérdida solo funciona si el equipo ya estaba compacto antes de perder el balón.",
    "Los jugadores lejanos al balón no persiguen; sostienen la línea para evitar el contragolpe directo.",
    "El rival que acaba de robar gasta 1-2 segundos en orientarse: ese es el momento exacto de máxima vulnerabilidad."
  ],
  commonMistakes: [
    "Todo el equipo se lanza a perseguir el balón, dejando espacios enormes a la espalda si la presión falla.",
    "Se abandona la presión a los 2 segundos y se repliega tarde, sin haber decidido claramente cuál de las dos opciones tomar."
  ],
  formationContext: "Exige jugadores con gran capacidad física; muy asociado al Juego de Posición neerlandés y a Guardiola.",
  boardStates: [
    {
      step: 1,
      caption: "Perdemos el balón atacando en campo rival. El rival intercepta con espacio por delante.",
      players: [
        { id: "gk", label: "1", x: 50, y: 135, team: "home" },
        { id: "rb", label: "2", x: 25, y: 95, team: "home" },
        { id: "cb1", label: "4", x: 40, y: 100, team: "home" },
        { id: "cb2", label: "6", x: 60, y: 100, team: "home" },
        { id: "lb", label: "3", x: 75, y: 95, team: "home" },
        { id: "dm", label: "5", x: 50, y: 85, team: "home" },
        { id: "cm1", label: "8", x: 35, y: 60, team: "home" },
        { id: "cm2", label: "10", x: 65, y: 60, team: "home" },
        { id: "rw", label: "7", x: 20, y: 35, team: "home" },
        { id: "st", label: "9", x: 50, y: 25, team: "home" },
        { id: "lw", label: "11", x: 80, y: 35, team: "home" },
        { id: "rint", label: "R", x: 55, y: 30, team: "away", highlighted: true },
        { id: "rcb1", label: "R", x: 35, y: 20, team: "away" },
        { id: "rcb2", label: "R", x: 65, y: 20, team: "away" }
      ],
      ball: { x: 55, y: 30 },
      zones: [{ x: 30, y: 12, width: 45, height: 35, label: "Ventana de 5 segundos", variant: "warning" }]
    },
    {
      step: 2,
      caption: "Los 3 jugadores más cercanos cierran un triángulo de presión sobre el rival. La línea de fondo se mantiene.",
      players: [
        { id: "gk", label: "1", x: 50, y: 135, team: "home" },
        { id: "rb", label: "2", x: 25, y: 95, team: "home" },
        { id: "cb1", label: "4", x: 40, y: 100, team: "home" },
        { id: "cb2", label: "6", x: 60, y: 100, team: "home" },
        { id: "lb", label: "3", x: 75, y: 95, team: "home" },
        { id: "dm", label: "5", x: 50, y: 68, team: "home" },
        { id: "cm1", label: "8", x: 35, y: 40, team: "home", highlighted: true },
        { id: "cm2", label: "10", x: 68, y: 45, team: "home", highlighted: true },
        { id: "rw", label: "7", x: 20, y: 35, team: "home" },
        { id: "st", label: "9", x: 55, y: 28, team: "home", highlighted: true },
        { id: "lw", label: "11", x: 80, y: 35, team: "home" },
        { id: "rint", label: "R", x: 55, y: 30, team: "away" }
      ],
      ball: { x: 55, y: 30 },
      arrows: [
        { from: { x: 50, y: 25 }, to: { x: 55, y: 30 }, type: "press" },
        { from: { x: 65, y: 60 }, to: { x: 68, y: 45 }, type: "press" },
        { from: { x: 35, y: 60 }, to: { x: 35, y: 40 }, type: "press" }
      ],
      zones: [{ x: 28, y: 25, width: 45, height: 25, label: "Triángulo de presión", variant: "positive" }]
    },
    {
      step: 3,
      caption: "Recuperamos y transicionamos verticalmente de inmediato, sin tocar de más.",
      players: [
        { id: "gk", label: "1", x: 50, y: 135, team: "home" },
        { id: "cb1", label: "4", x: 40, y: 100, team: "home" },
        { id: "cb2", label: "6", x: 60, y: 100, team: "home" },
        { id: "dm", label: "5", x: 50, y: 68, team: "home" },
        { id: "cm1", label: "8", x: 40, y: 42, team: "home" },
        { id: "st", label: "9", x: 55, y: 28, team: "home", highlighted: true },
        { id: "lw", label: "11", x: 80, y: 35, team: "home" }
      ],
      ball: { x: 55, y: 28 },
      arrows: [
        { from: { x: 55, y: 28 }, to: { x: 50, y: 10 }, type: "dribble" },
        { from: { x: 80, y: 35 }, to: { x: 65, y: 15 }, type: "run" }
      ],
      zones: [{ x: 30, y: 5, width: 40, height: 20, label: "Transición vertical inmediata", variant: "positive" }]
    }
  ],
  relatedSchemeIds: ["unit-pressing", "contragolpe"]
};