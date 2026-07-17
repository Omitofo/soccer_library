import { TacticalScheme } from "./types";

export const UNIT_PRESSING: TacticalScheme = {
  id: "unit-pressing",
  category: "presion",
  title: "Presión Orientada: La Trampa de Banda",
  shortSummary: "Tapas el pasillo interior a propósito para forzar el pase hacia la banda, donde el rival queda encerrado contra la línea de cal.",
  concept: "Presionar no es correr hacia el balón como un loco; es tapar líneas de pase lógicas para dirigir al rival hacia una zona donde tienes ventaja numérica: la banda, con la línea de cal como defensor extra.",
  execution: "El delantero centro tapa la línea de pase hacia el volante rival. Esto obliga al central a pasar hacia el lateral. En cuanto el balón viaja hacia la banda, el extremo salta a presionar de inmediato mientras el resto del bloque bascula (se desplaza lateralmente) para cerrar todas las salidas.",
  keyPoints: [
    "El disparador de presión es siempre un pase hacia atrás o hacia el lateral, nunca un pase hacia adelante.",
    "El extremo no presiona solo; todo el bloque bascula hacia el mismo costado en el mismo instante.",
    "La línea de cal (línea de banda) actúa como un defensor invisible extra: úsala."
  ],
  commonMistakes: [
    "El extremo presiona pero sus compañeros no basculan, dejando líneas de pase interiores abiertas.",
    "Se presiona sin haber tapado antes la línea de pase interior, permitiendo al rival salir por el centro con facilidad."
  ],
  formationContext: "Muy efectivo en 4-3-3 con extremos que puedan presionar en diagonal hacia el lateral rival.",
  boardStates: [
    {
      step: 1,
      caption: "El rival construye desde el central. Nuestro '9' tapa el pasillo interior hacia el volante.",
      players: [
        { id: "gk", label: "1", x: 50, y: 138, team: "home" },
        { id: "rb", label: "2", x: 20, y: 100, team: "home" },
        { id: "cb1", label: "4", x: 38, y: 105, team: "home" },
        { id: "cb2", label: "6", x: 62, y: 105, team: "home" },
        { id: "lb", label: "3", x: 80, y: 100, team: "home" },
        { id: "dm", label: "5", x: 50, y: 90, team: "home" },
        { id: "cm1", label: "8", x: 30, y: 80, team: "home" },
        { id: "cm2", label: "10", x: 70, y: 80, team: "home" },
        { id: "rw", label: "7", x: 15, y: 55, team: "home" },
        { id: "st", label: "9", x: 50, y: 50, team: "home", highlighted: true },
        { id: "lw", label: "11", x: 85, y: 55, team: "home" },
        { id: "rcb1", label: "R", x: 35, y: 35, team: "away" },
        { id: "rcb2", label: "R", x: 65, y: 35, team: "away", highlighted: true },
        { id: "rlateral", label: "R", x: 85, y: 42, team: "away" },
        { id: "rvolante", label: "R", x: 50, y: 55, team: "away" }
      ],
      ball: { x: 65, y: 35 },
      arrows: [{ from: { x: 50, y: 50 }, to: { x: 50, y: 55 }, type: "press" }],
      zones: [{ x: 40, y: 46, width: 20, height: 16, label: "Pasillo interior tapado", variant: "positive" }]
    },
    {
      step: 2,
      caption: "Sin pase interior disponible, el rival fuerza el pase hacia su lateral. Se activa el disparador.",
      players: [
        { id: "gk", label: "1", x: 50, y: 138, team: "home" },
        { id: "rb", label: "2", x: 20, y: 100, team: "home" },
        { id: "cb1", label: "4", x: 38, y: 105, team: "home" },
        { id: "cb2", label: "6", x: 62, y: 105, team: "home" },
        { id: "lb", label: "3", x: 80, y: 100, team: "home" },
        { id: "dm", label: "5", x: 58, y: 88, team: "home" },
        { id: "cm1", label: "8", x: 30, y: 80, team: "home" },
        { id: "cm2", label: "10", x: 78, y: 70, team: "home" },
        { id: "rw", label: "7", x: 85, y: 45, team: "home", highlighted: true },
        { id: "st", label: "9", x: 55, y: 48, team: "home" },
        { id: "lw", label: "11", x: 85, y: 60, team: "home" },
        { id: "rcb2", label: "R", x: 65, y: 35, team: "away" },
        { id: "rlateral", label: "R", x: 85, y: 42, team: "away" }
      ],
      ball: { x: 85, y: 42 },
      arrows: [
        { from: { x: 65, y: 35 }, to: { x: 85, y: 42 }, type: "pass" },
        { from: { x: 15, y: 55 }, to: { x: 85, y: 45 }, type: "press", curved: true }
      ],
      zones: [{ x: 72, y: 28, width: 26, height: 32, label: "Zona de ahogo: línea de cal", variant: "warning" }]
    },
    {
      step: 3,
      caption: "Cierre de pinza contra la banda: el lateral rival no tiene salida y perdemos el balón.",
      players: [
        { id: "gk", label: "1", x: 50, y: 138, team: "home" },
        { id: "rb", label: "2", x: 20, y: 100, team: "home" },
        { id: "cb1", label: "4", x: 38, y: 105, team: "home" },
        { id: "cb2", label: "6", x: 62, y: 100, team: "home" },
        { id: "lb", label: "3", x: 80, y: 85, team: "home" },
        { id: "dm", label: "5", x: 60, y: 82, team: "home" },
        { id: "cm1", label: "8", x: 40, y: 75, team: "home" },
        { id: "cm2", label: "10", x: 78, y: 60, team: "home", highlighted: true },
        { id: "rw", label: "7", x: 88, y: 40, team: "home", highlighted: true },
        { id: "st", label: "9", x: 55, y: 48, team: "home" },
        { id: "lw", label: "11", x: 80, y: 55, team: "home" },
        { id: "rlateral", label: "R", x: 85, y: 42, team: "away" }
      ],
      ball: { x: 74, y: 50 },
      zones: [{ x: 65, y: 38, width: 20, height: 20, label: "Balón recuperado", variant: "positive" }]
    }
  ],
  relatedSchemeIds: ["bloque-compacto", "gegenpressing"]
};