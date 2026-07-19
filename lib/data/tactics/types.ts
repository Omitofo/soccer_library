export type TacticCategory =
  | "organizacion-defensiva"
  | "presion"
  | "construccion"
  | "ataque"
  | "transiciones";

export const CATEGORY_LABELS: Record<TacticCategory, string> = {
  "organizacion-defensiva": "Organización Defensiva",
  presion: "Presión y Recuperación",
  construccion: "Construcción y Salida",
  ataque: "Fase Ofensiva",
  transiciones: "Transiciones",
};

/** Formaciones estándar soportadas por el generador de pizarras (ver formations.ts). */
export type FormationName =
  | "4-3-3"
  | "4-4-2"
  | "4-2-3-1"
  | "3-4-3"
  | "3-5-2"
  | "5-3-2";

export interface PitchPlayer {
  id: string;
  label: string; // dorsal, ej. "9"
  x: number; // 0-100 (izquierda-derecha)
  y: number; // 0-100 (0 = arco rival, 100 = arco propio). ~1 unidad ≈ 1 metro real.
  team: "home" | "away";
  highlighted?: boolean; // resalta al jugador clave del paso (glow)
}

export interface PitchArrow {
  from: { x: number; y: number };
  to: { x: number; y: number };
  type: "pass" | "run" | "press" | "dribble";
  curved?: boolean;
}

export interface PitchZone {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  variant?: "positive" | "warning" | "neutral";
}

export interface BoardState {
  step: number;
  caption: string; // qué está pasando en este paso, en lenguaje simple
  /** SIEMPRE 22: 11 jugadores "home" + 11 "away". Nunca menos. */
  players: PitchPlayer[];
  /** El balón SIEMPRE está en el tablero, en los pies de alguien o en tránsito. */
  ball: { x: number; y: number };
  arrows?: PitchArrow[];
  zones?: PitchZone[];
}

export interface TacticalScheme {
  id: string;
  category: TacticCategory;
  title: string;
  shortSummary: string; // para la tarjeta en el índice
  concept: string;
  execution: string;
  keyPoints: string[];
  commonMistakes: string[];
  formationContext?: string;
  /** Formación base del equipo que protagoniza el esquema. */
  formationHome?: FormationName;
  /** Formación base del equipo rival, usada como contraste táctico. */
  formationAway?: FormationName;
  boardStates: BoardState[];
  relatedSchemeIds?: string[];
}
