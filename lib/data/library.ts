import { HERR_PEP_DATA } from "./books/herr-pep";

// 1. DEFINICIÓN DE ESTRUCTURAS (INTERFACES)
export interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  visualContent?: string;
}

// NUEVAS INTERFACES PARA LECTURA PROFUNDA
export interface ChapterItem {
  title: string;
  concept: string; // Explicación estilo Tarzán (directa y simple)
  example: string; // Caso real en el campo de juego
  dos: string[];
  donts: string[];
  tacticalTip?: string; // Consejo mental o de posicionamiento
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  review: string;
  takeaways: string[];
  introduction?: string; // Texto introductorio largo
  chapters?: ChapterItem[]; // El desglose profundo por capítulos
}

export interface SoccerLibrary {
  philosophy: ArticleItem[];
  tactics: ArticleItem[];
  vision: ArticleItem[];
  books: BookItem[];
}

// 2. CONTENIDO EXCLUSIVO DE LA BIBLIOTECA
export const SOCCER_LIBRARY: SoccerLibrary = {
  philosophy: [
    {
      id: "the-goal-is-god",
      title: "El Gol es Dios (Pensamiento Inverso)",
      summary: "La regla de oro de la inteligencia futbolística. No juegues hacia adelante por inercia; planifica cada movimiento en el tablero pensando a la inversa desde las redes del arco rival hacia tu propia área.",
      keyPoints: [
        "Identifica dónde está el espacio libre en el bloque defensivo rival antes de recibir.",
        "Cada pase debe tener la intención de desestabilizar, no solo de mantener la posesión.",
        "Si el delantero está libre en largo, la transición directa es la prioridad divina."
      ],
      visualContent: `
[ ARCO RIVAL ] (El Objetivo Divino)
      ^
      |  3. Pase filtrado al espacio atacado
   [Extremo] <---- [Medio] (Escaneo previo)
                      ^
                      | 2. Pase interlineal
                   [Central] 
                      ^
                      | 1. Inicio en corto
[ ARCO PROPIO ] (A la inversa)
      `
    }
  ],
  tactics: [
    {
      id: "unit-pressing",
      title: "Presión en Bloque (Unit Pressing)",
      summary: "La defensa moderna no es individual; el equipo se mueve como un solo acordeón. Cuando el rival salta líneas, la distancia entre tus defensas y mediocampistas nunca debe superar los 12 metros.",
      keyPoints: [
        "El primer delantero salta a tapar la línea de pase interna del central.",
        "Los extremos cierran pasillos interiores, forzando al rival a ir por banda.",
        "La línea defensiva sube en bloque para dejar al rival en fuera de juego."
      ],
      visualContent: `
    [Central Rival] (Balón)
       /          \\
 (Presiona)     (Tapa línea)
  [Delantero]    [Extremo]
  
  [Medio]        [Medio]  <-- Cierran pasillos centrales
  
  ======= Línea de 12 metros =======
  
  [Defensa]      [Defensa] <-- Suben juntos
      `
    }
  ],
  vision: [
    {
      id: "scanning-fields",
      title: "Escaneo de Espacios y Perfiles",
      summary: "Un jugador de élite escanea el campo entre 3 y 5 veces antes de recibir el balón. Tu perfil corporal debe estar siempre a 45 grados para ver el balón y el arco rival al mismo tiempo.",
      keyPoints: [
        "Nunca recibas de espaldas si puedes girar el cuerpo.",
        "Identifica al 'Tercer Hombre' para romper presiones intensas.",
        "Gira la cabeza justo en el trayecto del pase del compañero hacia ti."
      ]
    }
  ],
  books: [
        HERR_PEP_DATA
  ]
};
