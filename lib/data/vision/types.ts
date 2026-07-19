import { BoardState } from "../tactics/types";

export type VisionCategory =
  | "escaneo"
  | "perfilado-corporal"
  | "conciencia-espacial"
  | "toma-de-decisiones";

export const VISION_CATEGORY_LABELS: Record<VisionCategory, string> = {
  escaneo: "Escaneo de Campo",
  "perfilado-corporal": "Perfilado Corporal",
  "conciencia-espacial": "Conciencia Espacial",
  "toma-de-decisiones": "Toma de Decisiones",
};

export interface VisionSector {
  startAngle: number; // grados relativos a la orientación del jugador (0 = al frente)
  endAngle: number;
  radius: number; // 0-46 aprox
  variant: "visible" | "peripheral" | "blind";
}

export interface VisionMarker {
  x: number; // 0-100, coordenada fija de la escena (no rota con el jugador)
  y: number;
  label: string;
  kind: "ball" | "teammate" | "defender" | "space";
}

export interface BodyDiagramConfig {
  playerAngle: number; // 0 = de frente al ataque, 180 = de espaldas
  sectors: VisionSector[];
  markers: VisionMarker[];
}

export interface VisionConcept {
  id: string;
  category: VisionCategory;
  title: string;
  shortSummary: string;
  concept: string;
  execution: string;
  keyPoints: string[];
  commonMistakes: string[];
  /**
   * Excepción explícita a la regla general del concepto (ej. cuándo NO
   * aplica o cuándo se puede saltar el hábito descrito). Se renderiza
   * como una tarjeta/nota aparte en la página de detalle, para no diluir
   * los "Errores Comunes" con un caso que en realidad es válido.
   */
  exceptionNote?: string;
  bodyDiagram?: BodyDiagramConfig; // diagrama correcto (perfilado-corporal, conciencia-espacial)
  bodyDiagramCaption?: string;
  mistakeDiagram?: BodyDiagramConfig; // comparación: el error común
  mistakeDiagramCaption?: string;
  boardStates?: BoardState[]; // secuencia de pizarra (escaneo, toma-de-decisiones)
  relatedConceptIds?: string[];
}
