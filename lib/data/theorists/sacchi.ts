import { TacticalTheorist } from "./types";

export const SACCHI: TacticalTheorist = {
  id: "sacchi",
  name: "Arrigo Sacchi",
  years: "1946–presente",
  role: "Entrenador",
  nationality: "Italia",
  clubs: ["AC Milan", "Italia"],
  categoryIds: ["espacios", "presion", "bloque-defensivo"],
  keyIdea: "No importa el balón; importa el espacio que el equipo ocupa cuando no lo tiene.",
  philosophy:
    "Sacchi llegó al AC Milan sin haber sido futbolista profesional y aun así abolió la marca individual y el líbero, el corazón del catenaccio italiano. Impuso la defensa en zona: el equipo se mueve como un bloque compacto de máximo 25 metros entre el portero y el delantero, y cada jugador cubre un espacio, no a un hombre. La presión se activa de forma sincronizada según disparadores colectivos, no según la iniciativa individual.",
  contributions: [
    "Sustituyó el catenaccio y la marca individual por la defensa en zona en el AC Milan (1987-1991).",
    "Ganó dos Copas de Europa consecutivas (1989, 1990) con un bloque de 25 metros y presión sincronizada.",
    "Estableció los disparadores colectivos de presión: nadie presiona solo, todo el bloque se mueve junto.",
    "Influyó directamente en Carlo Ancelotti (su jugador en el Milan) y en toda la escuela italiana de bloque compacto.",
  ],
  legacy:
    "La defensa en zona que hoy se da por sentada en cualquier equipo profesional es, en gran medida, obra suya. Guardiola lo ha citado como una de sus principales influencias tácticas.",
  relatedSchemeIds: ["bloque-compacto", "unit-pressing"],
  boardState: {
    step: 1,
    caption:
      "El bloque de 25 metros: la distancia máxima entre la línea defensiva y la delantera. Todo el equipo se desplaza junto, nunca como líneas independientes.",
    players: [
      { id: "gk", label: "1", x: 50, y: 97, team: "home" },
      { id: "rb", label: "2", x: 12, y: 78, team: "home" },
      { id: "cb1", label: "4", x: 38, y: 80, team: "home" },
      { id: "cb2", label: "6", x: 62, y: 80, team: "home" },
      { id: "lb", label: "3", x: 88, y: 78, team: "home" },
      { id: "cm1", label: "8", x: 22, y: 62, team: "home" },
      { id: "dm", label: "5", x: 50, y: 66, team: "home" },
      { id: "cm2", label: "10", x: 78, y: 62, team: "home" },
      { id: "rw", label: "7", x: 15, y: 55, team: "home", highlighted: true },
      { id: "st", label: "9", x: 50, y: 55, team: "home", highlighted: true },
      { id: "lw", label: "11", x: 85, y: 55, team: "home", highlighted: true },
      { id: "a1", label: "1", x: 50, y: 3, team: "away" },
      { id: "a2", label: "2", x: 12, y: 20, team: "away" },
      { id: "a3", label: "4", x: 38, y: 18, team: "away" },
      { id: "a4", label: "5", x: 62, y: 18, team: "away" },
      { id: "a5", label: "3", x: 88, y: 20, team: "away" },
      { id: "a6", label: "6", x: 30, y: 35, team: "away" },
      { id: "a7", label: "8", x: 70, y: 35, team: "away" },
      { id: "a8", label: "7", x: 15, y: 42, team: "away" },
      { id: "a9", label: "10", x: 50, y: 42, team: "away" },
      { id: "a10", label: "11", x: 85, y: 42, team: "away" },
      { id: "a11", label: "9", x: 50, y: 30, team: "away" },
    ],
    ball: { x: 50, y: 55 },
    zones: [{ x: 10, y: 55, width: 80, height: 25, label: "Bloque: 25 metros defensa-ataque", variant: "positive" }],
  },
};
