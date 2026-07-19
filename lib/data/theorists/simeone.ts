import { TacticalTheorist } from "./types";

export const SIMEONE: TacticalTheorist = {
  id: "simeone",
  name: "Diego Simeone",
  years: "1970–presente",
  role: "Entrenador",
  nationality: "Argentina",
  clubs: ["Atlético de Madrid"],
  categoryIds: ["bloque-defensivo"],
  keyIdea: "Partido a partido: el bloque compacto no es un recurso de emergencia, es una identidad.",
  philosophy:
    "Simeone construyó en el Atlético de Madrid una identidad defensiva total: un bloque de 4-4-2 extremadamente compacto, corto entre líneas, donde los 11 jugadores defienden como una sola unidad. No es un plan de emergencia contra rivales superiores; es la filosofía permanente del club, entrenada con la misma intensidad ganando 3-0 que perdiendo 0-1.",
  contributions: [
    "Ganó dos Ligas españolas (2014, 2021) con el Atlético frente al mayor presupuesto de Real Madrid y Barcelona.",
    "Llevó al Atlético a dos finales de Champions League (2014, 2016) con un bloque defensivo históricamente sólido.",
    "Convirtió el '4-4-2 corto' en una marca de identidad reconocible mundialmente.",
    "Demostró que la solidez colectiva sin balón puede ser, por sí sola, una ventaja competitiva sostenida en el tiempo.",
  ],
  legacy:
    "El Atlético de Simeone es la referencia obligada de cualquier análisis sobre cómo un bloque bajo, entrenado como identidad y no como recurso, puede competir de tú a tú con los presupuestos más grandes del mundo.",
  relatedSchemeIds: ["bloque-compacto"],
  boardState: {
    step: 1,
    caption:
      "El 4-4-2 corto: dos líneas de 4 y 2 delanteros, todas separadas por distancias mínimas. El bloque se mueve entero, nunca como individuos sueltos.",
    players: [
      { id: "gk", label: "1", x: 50, y: 97, team: "home" },
      { id: "rb", label: "2", x: 12, y: 80, team: "home" },
      { id: "cb1", label: "4", x: 38, y: 82, team: "home" },
      { id: "cb2", label: "6", x: 62, y: 82, team: "home" },
      { id: "lb", label: "3", x: 88, y: 80, team: "home" },
      { id: "rm", label: "7", x: 15, y: 62, team: "home" },
      { id: "cm1", label: "8", x: 38, y: 64, team: "home" },
      { id: "cm2", label: "10", x: 62, y: 64, team: "home" },
      { id: "lm", label: "11", x: 85, y: 62, team: "home" },
      { id: "st1", label: "9", x: 40, y: 44, team: "home", highlighted: true },
      { id: "st2", label: "19", x: 60, y: 44, team: "home", highlighted: true },
      { id: "a1", label: "1", x: 50, y: 3, team: "away" },
      { id: "a2", label: "2", x: 12, y: 18, team: "away" },
      { id: "a3", label: "4", x: 38, y: 20, team: "away" },
      { id: "a4", label: "5", x: 62, y: 20, team: "away" },
      { id: "a5", label: "3", x: 88, y: 18, team: "away" },
      { id: "a6", label: "6", x: 20, y: 35, team: "away" },
      { id: "a7", label: "8", x: 50, y: 32, team: "away" },
      { id: "a8", label: "10", x: 80, y: 35, team: "away" },
      { id: "a9", label: "7", x: 20, y: 52, team: "away" },
      { id: "a10", label: "9", x: 50, y: 30, team: "away" },
      { id: "a11", label: "11", x: 80, y: 52, team: "away" },
    ],
    ball: { x: 40, y: 44 },
    zones: [{ x: 12, y: 40, width: 76, height: 26, label: "Bloque corto: 4-4-2 compacto", variant: "positive" }],
  },
};
