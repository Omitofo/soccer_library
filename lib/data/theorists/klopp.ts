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
      { id: "gk", label: "1", x: 50, y: 95, team: "home" },
      { id: "cb1", label: "4", x: 40, y: 80, team: "home" },
      { id: "cb2", label: "6", x: 60, y: 80, team: "home" },
      { id: "rb", label: "2", x: 18, y: 76, team: "home" },
      { id: "lb", label: "3", x: 82, y: 76, team: "home" },
      { id: "dm", label: "5", x: 50, y: 60, team: "home" },
      { id: "cm1", label: "8", x: 35, y: 38, team: "home", highlighted: true },
      { id: "cm2", label: "10", x: 68, y: 42, team: "home", highlighted: true },
      { id: "st", label: "9", x: 55, y: 28, team: "home", highlighted: true },
      { id: "lw", label: "11", x: 82, y: 34, team: "home" },
      { id: "rw", label: "7", x: 18, y: 34, team: "home" },
      { id: "a1", label: "1", x: 50, y: 4, team: "away" },
      { id: "a2", label: "2", x: 12, y: 18, team: "away" },
      { id: "a3", label: "4", x: 38, y: 16, team: "away" },
      { id: "a4", label: "5", x: 62, y: 16, team: "away" },
      { id: "a5", label: "3", x: 88, y: 18, team: "away" },
      { id: "a6", label: "6", x: 30, y: 32, team: "away" },
      { id: "a7", label: "8", x: 55, y: 30, team: "away", highlighted: true },
      { id: "a8", label: "10", x: 75, y: 32, team: "away" },
      { id: "a9", label: "7", x: 20, y: 48, team: "away" },
      { id: "a10", label: "9", x: 50, y: 48, team: "away" },
      { id: "a11", label: "11", x: 80, y: 48, team: "away" },
    ],
    ball: { x: 55, y: 30 },
    zones: [{ x: 28, y: 20, width: 45, height: 26, label: "Ventana de pocos segundos", variant: "warning" }],
  },
};
