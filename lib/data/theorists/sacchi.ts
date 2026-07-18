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
      { id: "gk", label: "1", x: 50, y: 138, team: "home" },
      { id: "rb", label: "2", x: 20, y: 105, team: "home" },
      { id: "cb1", label: "4", x: 38, y: 108, team: "home" },
      { id: "cb2", label: "6", x: 62, y: 108, team: "home" },
      { id: "lb", label: "3", x: 80, y: 105, team: "home" },
      { id: "cm1", label: "8", x: 30, y: 85, team: "home" },
      { id: "dm", label: "5", x: 50, y: 88, team: "home" },
      { id: "cm2", label: "10", x: 70, y: 85, team: "home" },
      { id: "rw", label: "7", x: 22, y: 65, team: "home", highlighted: true },
      { id: "st", label: "9", x: 50, y: 63, team: "home", highlighted: true },
      { id: "lw", label: "11", x: 78, y: 65, team: "home", highlighted: true },
      { id: "rrival", label: "R", x: 50, y: 40, team: "away" },
    ],
    zones: [{ x: 20, y: 60, width: 60, height: 48, label: "Bloque: 25 metros defensa-ataque", variant: "positive" }],
  },
};