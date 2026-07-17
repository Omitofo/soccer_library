import { TacticalScheme } from "./types";

export const COUNTER_ATTACK: TacticalScheme = {
  id: "contragolpe",
  category: "transiciones",
  title: "Transición Ofensiva: El Contragolpe Directo",
  shortSummary: "Al recuperar el balón con espacio por delante, la prioridad es la verticalidad inmediata, no la posesión pausada.",
  concept: "No toda recuperación de balón merece el mismo tratamiento. Si el rival queda desorganizado y hay espacio por delante, cada segundo que se retrasa el avance reduce la ventaja numérica que la transición ofrece.",
  execution: "Al recuperar, el jugador con el balón busca de inmediato el pase vertical hacia el compañero más adelantado. Los jugadores sin balón sprintan a ocupar los carriles abiertos, formando una superioridad numérica antes de que el rival recomponga su línea defensiva.",
  keyPoints: [
    "La decisión de contragolpear o pausar el juego debe tomarse en el primer segundo tras la recuperación.",
    "Los compañeros sin balón deben anticipar el contragolpe y arrancar la carrera antes incluso de que el balón llegue a sus pies.",
    "Una superioridad numérica de contragolpe (3 contra 2) debe resolverse con pocos toques: cuantos más toques, más tiempo tiene el rival para recomponerse."
  ],
  commonMistakes: [
    "Se recupera el balón con espacio libre pero el equipo elige pausar y recomponer la posesión, regalando la ventaja de la transición.",
    "Los jugadores de apoyo no arrancan la carrera a tiempo, llegando tarde a la superioridad numérica."
  ],
  formationContext: "Depende más de la lectura del momento del partido que de un sistema fijo; frecuente contra rivales que atacan con muchos efectivos.",
  boardStates: [
    {
      step: 1,
      caption: "Recuperamos el balón en campo propio. El rival quedó desorganizado tras perder la posesión atacando.",
      players: [
        { id: "gk", label: "1", x: 50, y: 140, team: "home" },
        { id: "cb1", label: "4", x: 40, y: 120, team: "home" },
        { id: "cb2", label: "6", x: 60, y: 120, team: "home" },
        { id: "rb", label: "2", x: 20, y: 115, team: "home" },
        { id: "lb", label: "3", x: 80, y: 115, team: "home" },
        { id: "dm", label: "5", x: 50, y: 105, team: "home", highlighted: true },
        { id: "cm1", label: "8", x: 35, y: 90, team: "home" },
        { id: "cm2", label: "10", x: 65, y: 90, team: "home" },
        { id: "rw", label: "7", x: 15, y: 70, team: "home" },
        { id: "st", label: "9", x: 50, y: 60, team: "home" },
        { id: "lw", label: "11", x: 85, y: 70, team: "home" },
        { id: "rcb1", label: "R", x: 40, y: 50, team: "away" },
        { id: "rcb2", label: "R", x: 60, y: 50, team: "away" }
      ],
      ball: { x: 50, y: 105 },
      zones: [{ x: 20, y: 20, width: 60, height: 60, label: "Espacio abierto: 3 vs 2 en campo rival", variant: "positive" }]
    },
    {
      step: 2,
      caption: "Contragolpe vertical directo: pase largo al delantero mientras los extremos sprintan a los carriles.",
      players: [
        { id: "cb1", label: "4", x: 40, y: 120, team: "home" },
        { id: "cb2", label: "6", x: 60, y: 120, team: "home" },
        { id: "dm", label: "5", x: 50, y: 105, team: "home" },
        { id: "cm1", label: "8", x: 35, y: 90, team: "home" },
        { id: "st", label: "9", x: 50, y: 60, team: "home", highlighted: true },
        { id: "rw", label: "7", x: 25, y: 35, team: "home" },
        { id: "lw", label: "11", x: 75, y: 35, team: "home" },
        { id: "rcb1", label: "R", x: 40, y: 50, team: "away" },
        { id: "rcb2", label: "R", x: 60, y: 50, team: "away" }
      ],
      ball: { x: 50, y: 60 },
      arrows: [
        { from: { x: 50, y: 105 }, to: { x: 50, y: 60 }, type: "pass" },
        { from: { x: 15, y: 70 }, to: { x: 25, y: 35 }, type: "run" },
        { from: { x: 85, y: 70 }, to: { x: 75, y: 35 }, type: "run" }
      ],
      zones: [{ x: 20, y: 15, width: 60, height: 25, label: "Definición en superioridad numérica", variant: "positive" }]
    }
  ],
  relatedSchemeIds: ["gegenpressing"]
};