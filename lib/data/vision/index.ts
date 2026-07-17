import { VisionConcept, VisionCategory } from "./types";
import { SCANNING_DATA } from "./scanning";
import { BODY_SHAPE_DATA } from "./body-shape";
import { BLIND_SPOT_DATA } from "./blind-spot";
import { PASSING_LANE_DATA } from "./passing-lane";
import { THIRD_MAN_DETECTION_DATA } from "./third-man-detection";

export * from "./types";

export const VISION_CONCEPTS: VisionConcept[] = [
  SCANNING_DATA,
  BODY_SHAPE_DATA,
  BLIND_SPOT_DATA,
  PASSING_LANE_DATA,
  THIRD_MAN_DETECTION_DATA,
];

export function getConceptById(id: string): VisionConcept | undefined {
  return VISION_CONCEPTS.find((c) => c.id === id);
}

export function getConceptsByCategory(category: VisionCategory): VisionConcept[] {
  return VISION_CONCEPTS.filter((c) => c.category === category);
}