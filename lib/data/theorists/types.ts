import { BoardState } from "../tactics/types";

export type TacticalConceptCategoryId =
  | "espacios"
  | "presion"
  | "posesion"
  | "transiciones"
  | "superioridades"
  | "bloque-defensivo"
  | "historia-formaciones";

export const CATEGORY_ORDER: TacticalConceptCategoryId[] = [
  "espacios",
  "presion",
  "posesion",
  "superioridades",
  "transiciones",
  "bloque-defensivo",
  "historia-formaciones",
];

export const CATEGORY_LABELS: Record<TacticalConceptCategoryId, string> = {
  espacios: "Espacios",
  presion: "Presión",
  posesion: "Posesión",
  transiciones: "Transiciones",
  superioridades: "Superioridades",
  "bloque-defensivo": "Bloque Defensivo",
  "historia-formaciones": "Historia de las Formaciones",
};

export const CATEGORY_DESCRIPTIONS: Record<TacticalConceptCategoryId, string> = {
  espacios:
    "Ocupar el espacio correcto antes de que llegue el balón: la base geométrica de todo sistema moderno.",
  presion:
    "Recuperar el balón lo más rápido y lo más arriba posible, convirtiendo la defensa en el primer acto del ataque.",
  posesion:
    "El balón como herramienta para desestabilizar al rival, nunca como un fin en sí mismo.",
  superioridades:
    "Generar ventaja numérica, posicional o cualitativa antes de decidir la jugada, no durante ella.",
  transiciones:
    "El instante exacto en que el balón cambia de dueño: el momento más decisivo y menos entrenado del fútbol.",
  "bloque-defensivo":
    "La organización colectiva sin balón como un sistema de 11 piezas, no como la suma de duelos individuales.",
  "historia-formaciones":
    "Cómo cada sistema táctico nació resolviendo un problema concreto de su época y su reglamento.",
};

export interface TacticalTheorist {
  id: string;
  name: string;
  years: string;
  role: string;
  nationality: string;
  clubs: string[];
  categoryIds: TacticalConceptCategoryId[];
  keyIdea: string;
  philosophy: string;
  contributions: string[];
  legacy: string;
  relatedSchemeIds?: string[];
  relatedBookId?: string;
  boardState?: BoardState;
}