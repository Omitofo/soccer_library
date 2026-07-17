import { TacticalScheme, TacticCategory } from "./types";
import { COMPACT_BLOCK } from "./compact-block";
import { UNIT_PRESSING } from "./unit-pressing";
import { GEGENPRESSING } from "./gegenpressing";
import { BUILDUP_OVERLOAD } from "./buildup-overload";
import { WING_OVERLOAD } from "./wing-overload";
import { COUNTER_ATTACK } from "./counter-attack";

export * from "./types";

export const TACTICS_SCHEMES: TacticalScheme[] = [
  COMPACT_BLOCK,
  UNIT_PRESSING,
  GEGENPRESSING,
  BUILDUP_OVERLOAD,
  WING_OVERLOAD,
  COUNTER_ATTACK,
];

export function getSchemeById(id: string): TacticalScheme | undefined {
  return TACTICS_SCHEMES.find((s) => s.id === id);
}

export function getSchemesByCategory(category: TacticCategory): TacticalScheme[] {
  return TACTICS_SCHEMES.filter((s) => s.category === category);
}