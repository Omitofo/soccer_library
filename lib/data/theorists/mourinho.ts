import { TacticalTheorist } from "./types";

export const MOURINHO: TacticalTheorist = {
  id: "mourinho",
  name: "José Mourinho",
  years: "1963–presente",
  role: "Entrenador",
  nationality: "Portugal",
  clubs: ["Porto", "Chelsea", "Inter de Milán", "Real Madrid"],
  categoryIds: ["transiciones"],
  keyIdea: "Gana el que mejor controla el instante exacto en que el balón cambia de dueño.",
  philosophy:
    "Mourinho construye sus equipos alrededor del momento de la transición: cede la posesión de forma deliberada, organiza un bloque bajo casi infranqueable, y espera el instante en que el rival se desordena atacando para golpear con un contragolpe corto y letal. No es un sistema pasivo; es una gestión extrema del riesgo, donde cada minuto del partido tiene una función táctica distinta según el marcador.",
  contributions: [
    "Ganó la Champions League con el Porto en 2004, un club fuera de las potencias históricas del continente.",
    "Eliminó al Barcelona de Guardiola en semifinales de Champions 2010 con un bloque bajo casi perfecto, camino al triplete con el Inter.",
    "Popularizó la idea de gestionar los 'momentos' del partido en vez de imponer un estilo fijo de posesión.",
    "Demostró que la solidez defensiva y la eficacia en transición pueden vencer sistemáticamente a equipos de mayor posesión.",
  ],
  legacy:
    "Su Inter de 2010 sigue siendo el ejemplo de referencia de cómo un bloque bajo bien organizado puede anular al mejor equipo de posesión de una época.",
  relatedSchemeIds: ["contragolpe", "bloque-compacto"],
};