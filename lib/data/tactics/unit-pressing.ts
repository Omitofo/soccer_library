import { TacticalScheme } from "./types";
import { goalkeeper, line, applyMoves, ballAt } from "./formations";

// Local: 4-3-3 presionando alto y en diagonal hacia la banda.
const HOME = [
  goalkeeper("home", "h"),
  ...line(4, 76, "home", "h", 2), // defensa adelantada, sube con el bloque
  ...line(3, 58, "home", "h", 6), // mediocampo
  ...line(3, 30, "home", "h", 9), // delanteros presionando la salida
];

// Rival: 4-2-3-1 construyendo desde atrás con doble pivote.
const AWAY = [
  goalkeeper("away", "a"),
  ...line(4, 22, "away", "a", 2), // defensa
  ...line(2, 40, "away", "a", 6), // doble pivote
  ...line(3, 54, "away", "a", 8), // mediapuntas
  ...line(1, 66, "away", "a", 11), // punta
];

const step1Players = applyMoves([...HOME, ...AWAY], [
  ["h10", { highlighted: true }],
  ["a7", { highlighted: true }],
]);

const step2Players = applyMoves([...HOME, ...AWAY], [
  ["h5", { x: 92, y: 66 }],
  ["h8", { x: 90, y: 48 }],
  ["h11", { x: 92, y: 20, highlighted: true }],
  ["a5", { highlighted: true }],
]);

const step3Players = applyMoves(step2Players, [
  ["h11", { x: 90, y: 26 }],
  ["h8", { x: 90, y: 42 }],
  ["a5", { x: 90, y: 28 }],
]);

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
  formationHome: "4-3-3",
  formationAway: "4-2-3-1",
  boardStates: [
    {
      step: 1,
      caption: "El rival construye desde el central. Nuestro '9' tapa el pasillo interior hacia el volante.",
      players: step1Players,
      ball: ballAt(step1Players, "a4"),
      arrows: [{ from: { x: 50, y: 30 }, to: { x: 60, y: 40 }, type: "press" }],
      zones: [{ x: 40, y: 26, width: 30, height: 20, label: "Pasillo interior tapado", variant: "positive" }],
    },
    {
      step: 2,
      caption: "Sin pase interior disponible, el rival fuerza el pase hacia su lateral. Se activa el disparador.",
      players: step2Players,
      ball: ballAt(step2Players, "a5"),
      arrows: [
        { from: { x: 62, y: 22 }, to: { x: 88, y: 22 }, type: "pass" },
        { from: { x: 82, y: 30 }, to: { x: 92, y: 22 }, type: "press", curved: true },
      ],
      zones: [{ x: 74, y: 8, width: 26, height: 30, label: "Zona de ahogo: línea de cal", variant: "warning" }],
    },
    {
      step: 3,
      caption: "Cierre de pinza contra la banda: el lateral rival no tiene salida y perdemos el balón.",
      players: step3Players,
      ball: ballAt(step3Players, "a5"),
      arrows: [{ from: { x: 90, y: 42 }, to: { x: 90, y: 28 }, type: "press" }],
      zones: [{ x: 76, y: 16, width: 22, height: 24, label: "Balón recuperado", variant: "positive" }],
    },
  ],
  relatedSchemeIds: ["bloque-compacto", "gegenpressing"],
};
