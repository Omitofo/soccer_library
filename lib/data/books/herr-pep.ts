import { BookItem } from "../library";

export const HERR_PEP_DATA: BookItem = {
  id: "herr-pep",
  title: "Herr Pep",
  author: "Martí Perarnau",
  review: "Un desglose táctico y humano del primer año de Guardiola en el Bayern Múnich. Explica la metamorfosis de los conceptos de posesión hacia la ocupación estricta de los espacios (Juego de Posición).",
  takeaways: [
    "La posesión del balón solo sirve si desplaza al bloque defensivo rival.",
    "Regla de los 3 segundos: tras perder el balón, presiona a máxima intensidad inmediatamente.",
    "La amplitud en el campo estira las defensas; el carril central define los partidos."
  ],
  introduction: "Este análisis aborda los secretos del 'Juego de Posición' implementado por Pep Guardiola. No se trata de dar pases porque sí, sino de mover el balón con el único objetivo de desordenar las líneas rivales para encontrar al hombre libre a la espalda de la presión.",
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
    }
  ]
};
