import { BookItem } from "../library";

export const HERR_PEP_DATA: BookItem = {
  id: "herr-pep",
  title: "Herr Pep",
  author: "Martí Perarnau",
  review: "Un desglose táctico y humano del primer año de Guardiola en el Bayern Múnich. Explica la metamorfosis de los conceptos de posesión hacia la ocupación estricta de los espacios (Juego de Posición), y cómo un sistema ganador (el del Barça) se reconstruye desde cero para adaptarse a un plantel distinto.",
  takeaways: [
    "La posesión del balón solo sirve si desplaza al bloque defensivo rival.",
    "Regla de los 3 segundos: tras perder el balón, presiona a máxima intensidad inmediatamente.",
    "La amplitud en el campo estira las defensas; el carril central define los partidos.",
    "No existe un sistema fijo: existe un jugador correcto ocupando el espacio correcto en cada fase del juego.",
    "El lateral que se convierte en mediocampista (falso lateral) es la solución más elegante a la superioridad posicional en salida."
  ],
  introduction: "Este análisis aborda los secretos del 'Juego de Posición' implementado por Pep Guardiola. No se trata de dar pases porque sí, sino de mover el balón con el único objetivo de desordenar las líneas rivales para encontrar al hombre libre a la espalda de la presión. En Múnich, Guardiola llevó esta filosofía un paso más allá: reconvirtió a un lateral lateral de clase mundial (Lahm) en un mediocampista, demostrando que la posición en el campo importa más que la etiqueta del jugador.",
  chapters: [
    {
      title: "Capítulo 1: El Mito de la Posesión (No al 'Tiki-Taka')",
      concept: "Tener el balón sin intención es un error. Pasar el balón solo tiene sentido si logras atraer a los defensas rivales hacia un lado del campo para liberar el lado opuesto.",
      example: "Si eres mediocampista, da 3 o 4 pases cortos con tu central en el sector izquierdo. El bloque rival se moverá hacia ustedes. En ese microsegundo, lanza un cambio de frente largo hacia tu extremo derecho, quien quedará libre en un duelo 1 contra 1.",
      dos: [
        "Mira el tercer hombre antes de pasar.",
        "Pasa fuerte y al pie lejano de tu compañero para acelerar la jugada."
      ],
      donts: [
        "No pases el balón horizontalmente sin avanzar o atraer rivales.",
        "No te quedes estático tras dar el pase; muévete para ofrecer línea de descarga."
      ],
      tacticalTip: "Antes de recibir, gira tu cuello. Si tu defensor te persigue, dale el pase de primera a tu pivote y pica al espacio libre. Eso es crear un tercer hombre."
    },
    {
      title: "Capítulo 2: La Ley de los 3 Segundos (Transición Defensiva)",
      concept: "El momento más peligroso del fútbol es cuando pierdes el balón. No corras hacia atrás a defender tu arco; salta inmediatamente hacia adelante a presionar al rival que acaba de robar la pelota.",
      example: "Pierdes el balón en tres cuartos de cancha. El rival está de espaldas controlando el rebote. En lugar de retroceder, el extremo y el interior más cercanos lo encierran como una pinza para asfixiarlo antes de que pueda levantar la cabeza y armar el contragolpe.",
      dos: [
        "Presiona al balón con agresividad en los primeros 3 segundos.",
        "Los jugadores alejados deben tapar las líneas de pase fáciles del rival."
      ],
      donts: [
        "Nunca te lamentes o te quedes quieto al perder un balón.",
        "No hagas faltas innecesarias si puedes ralentizar la salida del rival."
      ],
      tacticalTip: "La presión tras pérdida funciona porque el rival gasta 1 o 2 segundos en acomodarse tras robar. Si lo presionas ahí, su mente está bloqueada."
    },
    {
      title: "Capítulo 3: El Lateral que se Convierte en Medio (La Revolución de Lahm)",
      concept: "En la fase de salida, tener dos laterales pegados a la banda deja el centro del campo con inferioridad numérica frente a la presión rival. La solución: el lateral se adentra hacia el carril central, transformándose momentáneamente en un tercer o cuarto mediocampista.",
      example: "Tu equipo construye en salida con 2 centrales y el portero. En vez de que tu lateral derecho suba pegado a la línea de cal, este camina hacia adentro y se ubica al lado del pivote defensivo. Ahora tienes superioridad numérica (3 contra 2) frente a los dos delanteros rivales que presionan, y puedes progresar el balón con pases cortos y seguros.",
      dos: [
        "Ocupa el espacio, no la posición del dorsal; un lateral puede jugar de medio si el sistema lo pide.",
        "Comunica a tu compañero de banda que debe ocupar el espacio que dejaste libre (amplitud)."
      ],
      donts: [
        "No te quedes pegado a la banda 'porque ahí siempre ha jugado el lateral'.",
        "No abandones el carril central sin que otro compañero cubra la profundidad defensiva."
      ],
      tacticalTip: "Piensa en el campo como una cuadrícula de espacios, no de posiciones fijas. El '2' o el '3' en tu camiseta es solo un número de identificación, no una jaula."
    },
    {
      title: "Capítulo 4: El Rombo Interior y la Superioridad Posicional",
      concept: "Guardiola diseña triángulos y rombos de pase constantes entre 4 jugadores cercanos (un rombo: uno abajo, dos a los lados, uno arriba) para que el rival nunca pueda presionar sin dejar una línea de pase abierta. Este rombo se recompone constantemente en cada zona del campo donde está el balón.",
      example: "En el sector derecho tienes a tu lateral (base del rombo), tu interior (lado izquierdo del rombo), tu extremo (lado derecho del rombo) y tu mediapunta o '9' que baja a buscar el balón (cima del rombo). Si el rival cierra una línea de pase, automáticamente hay otras dos abiertas dentro del mismo rombo.",
      dos: [
        "Mantén siempre distancias de 8 a 12 metros entre los 4 jugadores del rombo para que el pase sea seguro pero peligroso.",
        "Rota posiciones dentro del rombo si tu marcador aprende tus patrones."
      ],
      donts: [
        "No dejes que dos jugadores de tu equipo ocupen el mismo carril y la misma altura (duplicar posición mata el rombo).",
        "No fuerces el pase vertical si el rombo aún no está formado; espera un segundo más."
      ],
      tacticalTip: "Cuenta mentalmente: si tienes 3 o menos líneas de pase disponibles alrededor tuyo, el rombo está roto. Reajusta tu posición antes de recibir."
    }
  ]
};