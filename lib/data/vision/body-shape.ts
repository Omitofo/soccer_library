import { VisionConcept } from "./types";

// Marcadores del diagrama CORRECTO (45°): el origen del pase se movió a
// la periferia derecha (opuesta al marcador, que está en la periferia
// izquierda), en vez de caer en el punto ciego trasero.
const CORRECT_MARKERS = [
  { x: 76, y: 75, label: "Origen del pase", kind: "ball" as const },
  { x: 78, y: 28, label: "Espacio de ataque", kind: "space" as const },
  { x: 30, y: 18, label: "Marcador rival", kind: "defender" as const },
];

// Marcadores del diagrama de ERROR (180°, de espaldas): se mantienen
// como estaban, ya que con la espalda al ataque los tres puntos caen
// igualmente en el punto ciego trasero.
const MISTAKE_MARKERS = [
  { x: 22, y: 78, label: "Origen del pase", kind: "ball" as const },
  { x: 78, y: 28, label: "Espacio de ataque", kind: "space" as const },
  { x: 30, y: 18, label: "Marcador rival", kind: "defender" as const },
];

const SECTORS = [
  { startAngle: -65, endAngle: 65, radius: 42, variant: "visible" as const },
  { startAngle: 65, endAngle: 100, radius: 42, variant: "peripheral" as const },
  { startAngle: -100, endAngle: -65, radius: 42, variant: "peripheral" as const },
  { startAngle: 100, endAngle: 260, radius: 42, variant: "blind" as const },
];

export const BODY_SHAPE_DATA: VisionConcept = {
  id: "perfilado-45-grados",
  category: "perfilado-corporal",
  title: "El Perfilado Matemático a 45 Grados",
  shortSummary: "Recibir de espaldas anula la mitad de tus opciones de ataque. Un perfil a 45° te muestra el balón, el espacio y al marcador al mismo tiempo.",
  concept: "Tu cuerpo debe estar siempre orientado en un ángulo diagonal que te permita ver, en un mismo plano periférico, el balón que viene y el espacio que vas a atacar. Recibir de frente al pase (de espaldas al ataque) te obliga a un control a ciegas.",
  execution: "Coloca tu pie de apoyo apuntando hacia el carril lateral y recibe el balón siempre con la pierna lejana a la presión. Esto orienta tus hombros automáticamente hacia adelante y te permite dar un pase filtrado de primera intención sin necesitar un toque extra para girar.",
  keyPoints: [
    "El perfil a 45° reparte tu atención entre el balón (en tu periferia), el espacio de ataque (al frente) y el marcador (en la periferia opuesta), sin mover el cuello.",
    "El pie de apoyo decide el ángulo: apúntalo hacia donde quieres jugar antes de que llegue el balón.",
    "Recibe con la pierna más alejada del defensor: esto además protege el balón de forma natural."
  ],
  commonMistakes: [
    "Recibir con el cuerpo completamente de espaldas al arco rival, dependiendo de un giro post-control que rara vez da tiempo.",
    "Orientar los pies hacia el balón en vez de hacia el espacio que se quiere atacar."
  ],
  bodyDiagram: { playerAngle: 45, sectors: SECTORS, markers: CORRECT_MARKERS },
  bodyDiagramCaption: "A 45°, el balón que llega queda en tu periferia (no en tu punto ciego), el espacio de ataque en tu cono visible frontal, y el marcador rival en la periferia opuesta: ves los tres puntos clave sin girar el cuello.",
  mistakeDiagram: { playerAngle: 180, sectors: SECTORS, markers: MISTAKE_MARKERS },
  mistakeDiagramCaption: "De espaldas al ataque, tanto el balón como el marcador rival caen en tu punto ciego trasero: controlas sin saber qué hay detrás ni a dónde vas a jugar.",
  relatedConceptIds: ["conciencia-360-punto-ciego", "escaneo-alta-frecuencia"]
};
