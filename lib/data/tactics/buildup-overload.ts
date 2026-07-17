import { TacticalScheme } from "./types";

export const BUILDUP_OVERLOAD: TacticalScheme = {
  id: "salida-lateral-falso",
  category: "construccion",
  title: "Salida en Superioridad: El Lateral Falso",
  shortSummary: "El lateral se adentra al carril central en la salida para generar un jugador de más frente a la presión rival.",
  concept: "Con 2 centrales contra 2 delanteros rivales no hay hombre libre: es una igualdad numérica. La solución (popularizada por Guardiola con Lahm en el Bayern) es que un lateral abandone la banda y se ubique junto al pivote, generando una superioridad de 3 contra 2 en la primera línea de construcción.",
  execution: "El lateral camina hacia adentro en vez de subir pegado a la banda. Esto forma una línea de 3 (o un rombo) junto al pivote defensivo. El extremo de ese costado baja a ocupar el espacio de banda que el lateral dejó libre, manteniendo la amplitud del equipo.",
  keyPoints: [
    "Ocupa el espacio, no la posición del dorsal: un lateral puede jugar de mediocentro si el sistema lo necesita.",
    "Alguien debe cubrir siempre el carril que el lateral abandona, normalmente el extremo de ese costado.",
    "La superioridad numérica solo sirve si se usa para progresar el balón, no solo para tenerlo."
  ],
  commonMistakes: [
    "El lateral se mete adentro pero nadie cubre la banda, perdiendo la amplitud del equipo.",
    "Se genera la superioridad numérica pero se sigue jugando en corto sin buscar el pase de progresión hacia el 'tercer hombre'."
  ],
  formationContext: "Requiere un lateral con buena visión de pase; muy asociado al Juego de Posición y al Bayern de Guardiola.",
  boardStates: [
    {
      step: 1,
      caption: "Salida clásica: 2 centrales contra 2 delanteros rivales. Igualdad numérica, sin hombre libre.",
      players: [
        { id: "gk", label: "1", x: 50, y: 140, team: "home" },
        { id: "cb1", label: "4", x: 38, y: 120, team: "home" },
        { id: "cb2", label: "6", x: 62, y: 120, team: "home" },
        { id: "rb", label: "2", x: 15, y: 110, team: "home" },
        { id: "lb", label: "3", x: 85, y: 110, team: "home" },
        { id: "dm", label: "5", x: 50, y: 102, team: "home" },
        { id: "cm1", label: "8", x: 30, y: 90, team: "home" },
        { id: "cm2", label: "10", x: 70, y: 90, team: "home" },
        { id: "rw", label: "7", x: 15, y: 60, team: "home" },
        { id: "st", label: "9", x: 50, y: 55, team: "home" },
        { id: "lw", label: "11", x: 85, y: 60, team: "home" },
        { id: "rst1", label: "R", x: 38, y: 95, team: "away" },
        { id: "rst2", label: "R", x: 62, y: 95, team: "away" },
        { id: "rvol", label: "R", x: 50, y: 80, team: "away" }
      ],
      zones: [{ x: 25, y: 85, width: 50, height: 40, label: "Igualdad numérica: sin hombre libre", variant: "warning" }]
    },
    {
      step: 2,
      caption: "El lateral derecho se adentra junto al pivote. El extremo baja a cubrir la banda vacía.",
      players: [
        { id: "gk", label: "1", x: 50, y: 140, team: "home" },
        { id: "cb1", label: "4", x: 38, y: 120, team: "home" },
        { id: "cb2", label: "6", x: 62, y: 120, team: "home" },
        { id: "rb", label: "2", x: 35, y: 100, team: "home", highlighted: true },
        { id: "lb", label: "3", x: 85, y: 110, team: "home" },
        { id: "dm", label: "5", x: 55, y: 98, team: "home" },
        { id: "cm1", label: "8", x: 30, y: 78, team: "home" },
        { id: "cm2", label: "10", x: 70, y: 90, team: "home" },
        { id: "rw", label: "7", x: 10, y: 85, team: "home", highlighted: true },
        { id: "st", label: "9", x: 50, y: 55, team: "home" },
        { id: "lw", label: "11", x: 85, y: 60, team: "home" },
        { id: "rst1", label: "R", x: 38, y: 95, team: "away" },
        { id: "rst2", label: "R", x: 62, y: 95, team: "away" }
      ],
      arrows: [
        { from: { x: 15, y: 110 }, to: { x: 35, y: 100 }, type: "run" },
        { from: { x: 15, y: 60 }, to: { x: 10, y: 85 }, type: "run" }
      ],
      zones: [{ x: 25, y: 90, width: 50, height: 32, label: "Superioridad 3 vs 2 en salida", variant: "positive" }]
    },
    {
      step: 3,
      caption: "El hombre libre progresa el balón rompiendo la primera línea de presión.",
      players: [
        { id: "gk", label: "1", x: 50, y: 140, team: "home" },
        { id: "cb1", label: "4", x: 38, y: 120, team: "home" },
        { id: "cb2", label: "6", x: 62, y: 120, team: "home" },
        { id: "rb", label: "2", x: 35, y: 100, team: "home" },
        { id: "dm", label: "5", x: 55, y: 98, team: "home" },
        { id: "cm2", label: "10", x: 70, y: 90, team: "home", highlighted: true },
        { id: "rst1", label: "R", x: 38, y: 95, team: "away" },
        { id: "rst2", label: "R", x: 62, y: 95, team: "away" }
      ],
      ball: { x: 70, y: 90 },
      arrows: [
        { from: { x: 38, y: 120 }, to: { x: 35, y: 100 }, type: "pass" },
        { from: { x: 35, y: 100 }, to: { x: 70, y: 90 }, type: "pass" }
      ]
    }
  ],
  relatedSchemeIds: ["sobrecarga-banda"]
};