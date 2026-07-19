import { TacticalTheorist } from "./types";

export const CRUYFF: TacticalTheorist = {
  id: "cruyff",
  name: "Johan Cruyff",
  years: "1947–2016",
  role: "Jugador y entrenador",
  nationality: "Países Bajos",
  clubs: ["Ajax", "FC Barcelona", "Países Bajos"],
  categoryIds: ["espacios", "posesion", "superioridades"],
  keyIdea: "Jugar simple es lo más difícil que hay: exige saber exactamente qué espacio ocupar.",
  philosophy:
    "Cruyff heredó de Michels la idea de una posesión con propósito y la convirtió en una ciencia del espacio. Como entrenador del Barcelona (1988-1996) estableció que el campo se divide en carriles verticales y que nunca dos compañeros pueden ocupar el mismo carril a la misma altura al mismo tiempo, porque eso anula una línea de pase. Formalizó también el concepto de 'tercer hombre': dos jugadores atraen la presión para liberar a un tercero. No enseñaba formaciones; enseñaba geometría aplicada al balón.",
  contributions: [
    "Como jugador, fue la figura central del Fútbol Total del Ajax y la Naranja Mecánica de 1974.",
    "Como entrenador del 'Dream Team' del Barcelona, fundó el Juego de Posición moderno y sentó las bases filosóficas de La Masia.",
    "Formalizó la regla de los carriles: nunca dos compañeros en el mismo carril y la misma altura.",
    "Formó directamente a Pep Guardiola como jugador y luego como discípulo ideológico.",
  ],
  legacy:
    "Cada 'rondo' que se entrena hoy en cualquier academia del mundo desciende de sus sesiones en La Masia. Su idea de que el espacio se ocupa antes de que llegue el balón sigue siendo el estándar de la élite mundial.",
  relatedSchemeIds: ["salida-lateral-falso", "sobrecarga-banda"],
  relatedBookId: "juego-de-posicion",
  boardState: {
    step: 1,
    caption:
      "La regla de los carriles: el 8 y el 10 nunca comparten carril ni altura. Cada uno abre una línea de pase distinta y el rival no puede taparlas todas con una sola línea de marca.",
    players: [
      { id: "gk", label: "1", x: 50, y: 97, team: "home" },
      { id: "rb", label: "2", x: 12, y: 80, team: "home" },
      { id: "cb1", label: "4", x: 38, y: 82, team: "home" },
      { id: "cb2", label: "6", x: 62, y: 82, team: "home" },
      { id: "lb", label: "3", x: 88, y: 80, team: "home" },
      { id: "dm", label: "5", x: 50, y: 64, team: "home" },
      { id: "cm1", label: "8", x: 22, y: 48, team: "home", highlighted: true },
      { id: "cm2", label: "10", x: 78, y: 40, team: "home", highlighted: true },
      { id: "rw", label: "7", x: 10, y: 22, team: "home" },
      { id: "st", label: "9", x: 50, y: 18, team: "home" },
      { id: "lw", label: "11", x: 90, y: 22, team: "home" },
      { id: "a1", label: "1", x: 50, y: 3, team: "away" },
      { id: "a2", label: "2", x: 15, y: 18, team: "away" },
      { id: "a3", label: "4", x: 38, y: 16, team: "away" },
      { id: "a4", label: "5", x: 62, y: 16, team: "away" },
      { id: "a5", label: "3", x: 85, y: 18, team: "away" },
      { id: "a6", label: "6", x: 40, y: 32, team: "away" },
      { id: "a7", label: "8", x: 60, y: 32, team: "away" },
      { id: "a8", label: "7", x: 15, y: 45, team: "away" },
      { id: "a9", label: "10", x: 50, y: 45, team: "away" },
      { id: "a10", label: "11", x: 85, y: 45, team: "away" },
      { id: "a11", label: "9", x: 50, y: 60, team: "away" },
    ],
    ball: { x: 50, y: 64 },
    zones: [
      { x: 14, y: 40, width: 20, height: 22, label: "Carril interior izq.", variant: "positive" },
      { x: 66, y: 32, width: 20, height: 22, label: "Carril interior der.", variant: "positive" },
    ],
  },
};
