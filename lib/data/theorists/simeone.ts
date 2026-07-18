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
      { id: "gk", label: "1", x: 50, y: 138, team: "home" },
      { id: "rb", label: "2", x: 18, y: 108, team: "home" },
      { id: "cb1", label: "4", x: 38, y: 110, team: "home" },
      { id: "cb2", label: "6", x: 62, y: 110, team: "home" },
      { id: "lb", label: "3", x: 82, y: 108, team: "home" },
      { id: "rm", label: "7", x: 20, y: 88, team: "home" },
      { id: "cm1", label: "8", x: 40, y: 90, team: "home" },
      { id: "cm2", label: "10", x: 60, y: 90, team: "home" },
      { id: "lm", label: "11", x: 80, y: 88, team: "home" },
      { id: "st1", label: "9", x: 42, y: 70, team: "home", highlighted: true },
      { id: "st2", label: "19", x: 58, y: 70, team: "home", highlighted: true },
      { id: "rrival", label: "R", x: 50, y: 45, team: "away" },
    ],
    zones: [{ x: 15, y: 82, width: 70, height: 32, label: "Bloque corto: 4-4-2 compacto", variant: "positive" }],
  },
};