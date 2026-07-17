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

export interface PitchPlayer {
  id: string;
  label: string; // dorsal, ej. "9"
  x: number; // 0-100 (izquierda-derecha)
  y: number; // 0-100 (0 = arco rival, 100 = arco propio)
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
  players: PitchPlayer[];
  ball?: { x: number; y: number };
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
  boardStates: BoardState[];
  relatedSchemeIds?: string[];
}