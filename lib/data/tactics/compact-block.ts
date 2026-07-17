import { TacticalScheme } from "./types";

export const COMPACT_BLOCK: TacticalScheme = {
  id: "bloque-compacto",
  category: "organizacion-defensiva",
  title: "El Bloque Compacto (Regla de los 12 Metros)",
  shortSummary: "La distancia vertical entre tu línea defensiva y tus mediocampistas nunca debe superar los 12 metros.",
  concept: "El fútbol moderno se juega comprimiendo el espacio. Si el equipo se estira, dejas pasillos interlineales libres donde los mediapuntas rivales te destruirán. El bloque se mueve como un solo acordeón, nunca como líneas independientes.",
  execution: "Cuando el rival construye, tu línea defensiva y tu línea de mediocampistas deben mantener siempre la misma distancia relativa. Si el rival empuja, tu bloque entero retrocede unos metros manteniendo la distancia; si presionas, sube completo. La distancia importa más que la posición absoluta en el campo.",
  keyPoints: [
    "La distancia interlineal (defensa-medio) no debe superar los 12 metros bajo ninguna circunstancia.",
    "El bloque se desplaza lateralmente completo hacia el lado donde está el balón.",
    "Un defensor nunca decide individualmente si sube o baja; lo decide el bloque."
  ],
  commonMistakes: [
    "Un defensor sale de la línea a presionar sin que el resto del bloque lo acompañe, abriendo un pasillo interior.",
    "El mediocampo se queda estático mientras la defensa retrocede, duplicando la distancia interlineal peligrosamente."
  ],
  formationContext: "Ideal en sistemas de 4 defensas con 3 mediocampistas (4-3-3 / 4-2-3-1).",
  boardStates: [
    {
      step: 1,
      caption: "El rival construye y estira el campo buscando abrir la distancia entre tus líneas.",
      players: [
        { id: "gk", label: "1", x: 50, y: 140, team: "home" },
        { id: "rb", label: "2", x: 18, y: 108, team: "home" },
        { id: "cb1", label: "4", x: 38, y: 112, team: "home" },
        { id: "cb2", label: "6", x: 62, y: 112, team: "home" },
        { id: "lb", label: "3", x: 82, y: 108, team: "home" },
        { id: "dm", label: "5", x: 50, y: 96, team: "home" },
        { id: "cm1", label: "8", x: 32, y: 90, team: "home" },
        { id: "cm2", label: "10", x: 68, y: 90, team: "home" },
        { id: "rw", label: "7", x: 20, y: 68, team: "home" },
        { id: "st", label: "9", x: 50, y: 65, team: "home" },
        { id: "lw", label: "11", x: 80, y: 68, team: "home" },
        { id: "rcb1", label: "R", x: 35, y: 40, team: "away" },
        { id: "rcb2", label: "R", x: 65, y: 40, team: "away" },
        { id: "rcm", label: "R", x: 50, y: 55, team: "away" }
      ],
      ball: { x: 50, y: 55 },
      arrows: [{ from: { x: 35, y: 40 }, to: { x: 50, y: 55 }, type: "pass" }],
      zones: [{ x: 25, y: 88, width: 50, height: 24, label: "Distancia interlineal: 12m", variant: "positive" }]
    },
    {
      step: 2,
      caption: "El rival ataca por el costado izquierdo. El bloque entero se desplaza hacia el balón sin romper la distancia.",
      players: [
        { id: "gk", label: "1", x: 45, y: 140, team: "home" },
        { id: "rb", label: "2", x: 12, y: 100, team: "home", highlighted: true },
        { id: "cb1", label: "4", x: 30, y: 104, team: "home" },
        { id: "cb2", label: "6", x: 58, y: 108, team: "home" },
        { id: "lb", label: "3", x: 78, y: 108, team: "home" },
        { id: "dm", label: "5", x: 40, y: 88, team: "home" },
        { id: "cm1", label: "8", x: 22, y: 82, team: "home" },
        { id: "cm2", label: "10", x: 60, y: 88, team: "home" },
        { id: "rw", label: "7", x: 15, y: 60, team: "home" },
        { id: "st", label: "9", x: 45, y: 62, team: "home" },
        { id: "lw", label: "11", x: 78, y: 66, team: "home" },
        { id: "rw-rival", label: "R", x: 12, y: 55, team: "away" },
        { id: "rcm", label: "R", x: 30, y: 50, team: "away" },
        { id: "rcb1", label: "R", x: 35, y: 35, team: "away" }
      ],
      ball: { x: 12, y: 55 },
      arrows: [{ from: { x: 22, y: 82 }, to: { x: 15, y: 62 }, type: "press" }],
      zones: [{ x: 5, y: 86, width: 45, height: 24, label: "Bloque desplazado, misma distancia", variant: "positive" }]
    }
  ],
  relatedSchemeIds: ["unit-pressing", "gegenpressing"]
};