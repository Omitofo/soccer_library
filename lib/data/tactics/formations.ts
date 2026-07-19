/**
 * Formaciones y utilidades para construir pizarras tácticas realistas.
 *
 * CONVENCIÓN DE COORDENADAS (compartida con TacticsBoard.tsx):
 *  - x: 0-100 → izquierda-derecha del campo.
 *  - y: 0-100 → 0 = línea de fondo del equipo "away" (arco rival, arriba)
 *               100 = línea de fondo del equipo "home" (arco propio, abajo).
 *  - El campo mide ~100-105 m de largo en la realidad, así que 1 unidad de
 *    "y" equivale aproximadamente a 1 metro real. Esto nos permite dibujar
 *    literalmente distancias como "12 metros entre líneas" o "bloque de
 *    25 metros" en vez de aproximarlas a ojo.
 *
 * REGLA DE ORO: una pizarra SIEMPRE combina 11 jugadores "home" + 11 "away"
 * = 22 jugadores, y SIEMPRE declara dónde está el balón (BoardState.ball
 * es obligatorio). Nunca se coloca a un jugador con y > 100 ni y < 0:
 * eso lo saca del viewBox del SVG y desaparece del tablero (el bug que
 * teníamos antes con el portero en y=138).
 */
import { PitchPlayer } from "./types";

type Side = "home" | "away";

/** Distribución horizontal estándar según cuántos jugadores comparten una línea. */
export const LINE_X: Record<number, number[]> = {
  1: [50],
  2: [35, 65],
  3: [18, 50, 82],
  4: [12, 38, 62, 88],
  5: [8, 28, 50, 72, 92],
};

/**
 * Portero. El equipo "home" defiende abajo (cerca de y=97);
 * el equipo "away" defiende arriba (cerca de y=3). Nunca fuera del campo.
 */
export function goalkeeper(side: Side, idPrefix: string): PitchPlayer {
  return {
    id: `${idPrefix}1`,
    label: "1",
    x: 50,
    y: side === "home" ? 97 : 3,
    team: side,
  };
}

/**
 * Genera una línea (defensa, mediocampo o ataque) de jugadores en la
 * misma altura "y". Los ids/labels son deterministas (h2, h3... / a2, a3...)
 * para poder referenciarlos después con moveTo/ballAt sin adivinar nada.
 */
export function line(
  count: 1 | 2 | 3 | 4 | 5,
  y: number,
  side: Side,
  idPrefix: string,
  startShirt: number,
  xs?: number[]
): PitchPlayer[] {
  const positions = xs ?? LINE_X[count];
  return positions.map((x, i) => ({
    id: `${idPrefix}${startShirt + i}`,
    label: `${startShirt + i}`,
    x,
    y,
    team: side,
  }));
}

export function findById(players: PitchPlayer[], id: string): PitchPlayer {
  const p = players.find((pl) => pl.id === id);
  if (!p) throw new Error(`No existe el jugador con id "${id}" en esta pizarra.`);
  return p;
}

/** Copia inmutable del array con UN jugador movido y/o resaltado. */
export function moveTo(
  players: PitchPlayer[],
  id: string,
  patch: Partial<Pick<PitchPlayer, "x" | "y" | "highlighted">>
): PitchPlayer[] {
  return players.map((p) => (p.id === id ? { ...p, ...patch } : p));
}

/** Aplica varios movimientos/resaltados encadenados en una sola pasada. */
export function applyMoves(
  players: PitchPlayer[],
  moves: Array<[string, Partial<Pick<PitchPlayer, "x" | "y" | "highlighted">>]>
): PitchPlayer[] {
  return moves.reduce((acc, [id, patch]) => moveTo(acc, id, patch), players);
}

/**
 * El balón siempre debe estar "en los pies" de alguien (o en tránsito con
 * un offset explícito). Nunca es un punto flotante inventado aparte.
 */
export function ballAt(
  players: PitchPlayer[],
  id: string,
  offset?: { dx?: number; dy?: number }
): { x: number; y: number } {
  const p = findById(players, id);
  return { x: p.x + (offset?.dx ?? 0), y: p.y + (offset?.dy ?? 0) };
}
