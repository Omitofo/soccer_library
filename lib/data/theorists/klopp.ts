import { TacticalTheorist } from "./types";

export const KLOPP: TacticalTheorist = {
  id: "klopp",
  name: "Jürgen Klopp",
  years: "1967–presente",
  role: "Entrenador",
  nationality: "Alemania",
  clubs: ["Borussia Dortmund", "Liverpool FC"],
  categoryIds: ["presion"],
  keyIdea: "El mejor creador de juego del mundo es un contragolpe de presión de pocos segundos tras perder el balón.",
  philosophy:
    "Klopp popularizó y bautizó el 'gegenpressing': en los segundos inmediatos tras perder la posesión, el rival todavía no ha organizado su salida ni levantado la cabeza, así que ese es el momento de máxima vulnerabilidad. En vez de replegar, sus equipos atacan el balón de inmediato con los jugadores más cercanos al punto de pérdida, convirtiendo la transición defensiva en la primera fase de un nuevo ataque.",
  contributions: [
    "Ganó dos Bundesligas con el Borussia Dortmund (2011, 2012) con un gegenpressing de altísima intensidad física.",
    "Popularizó mundialmente el término 'gegenpressing' como concepto táctico identificable.",
    "Ganó la Champions League (2019) y la Premier League (2020) con el Liverpool, adaptando la presión a un fútbol más posicional.",
    "Convirtió el 'fútbol de heavy metal' (presión constante, ritmo alto, verticalidad) en una escuela reconocible propia.",
  ],
  legacy:
    "El gegenpressing es hoy vocabulario básico de cualquier análisis táctico moderno. Casi todos los equipos de máximo nivel entrenan específicamente qué hacer en los primeros segundos tras perder el balón, una idea que él llevó al mainstream.",
  relatedSchemeIds: ["gegenpressing"],
  boardState: {
    step: 1,
    caption:
      "Gegenpressing: en el instante de la pérdida, los 3 jugadores más cercanos forman un triángulo de presión inmediata sobre el rival, antes de que pueda levantar la cabeza.",
    players: [
      { id: "gk", label: "1", x: 50, y: 135, team: "home" },
      { id: "cb1", label: "4", x: 40, y: 100, team: "home" },
      { id: "cb2", label: "6", x: 60, y: 100, team: "home" },
      { id: "dm", label: "5", x: 50, y: 70, team: "home" },
      { id: "cm1", label: "8", x: 35, y: 42, team: "home", highlighted: true },
      { id: "cm2", label: "10", x: 68, y: 46, team: "home", highlighted: true },
      { id: "st", label: "9", x: 55, y: 30, team: "home", highlighted: true },
      { id: "lw", label: "11", x: 82, y: 38, team: "home" },
      { id: "rw", label: "7", x: 18, y: 38, team: "home" },
      { id: "rint", label: "R", x: 55, y: 32, team: "away" },
    ],
    zones: [{ x: 28, y: 22, width: 45, height: 28, label: "Ventana de pocos segundos", variant: "warning" }],
  },
};