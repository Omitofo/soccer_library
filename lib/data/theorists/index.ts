import { TacticalTheorist, TacticalConceptCategoryId } from "./types";
import { MICHELS } from "./michels";
import { CRUYFF } from "./cruyff";
import { GUARDIOLA } from "./guardiola";
import { SACCHI } from "./sacchi";
import { BIELSA } from "./bielsa";
import { KLOPP } from "./klopp";
import { MOURINHO } from "./mourinho";
import { ANCELOTTI } from "./ancelotti";
import { BENITEZ } from "./benitez";
import { SIMEONE } from "./simeone";
import { WILSON } from "./wilson";

export * from "./types";

export const THEORISTS: TacticalTheorist[] = [
  MICHELS,
  CRUYFF,
  GUARDIOLA,
  SACCHI,
  BIELSA,
  KLOPP,
  MOURINHO,
  ANCELOTTI,
  BENITEZ,
  SIMEONE,
  WILSON,
];

export function getTheoristById(id: string): TacticalTheorist | undefined {
  return THEORISTS.find((t) => t.id === id);
}

export function getTheoristsByCategory(
  category: TacticalConceptCategoryId
): TacticalTheorist[] {
  return THEORISTS.filter((t) => t.categoryIds.includes(category));
}