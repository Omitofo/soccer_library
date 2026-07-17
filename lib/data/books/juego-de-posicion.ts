import { BookItem } from "../library";

export const JUEGO_DE_POSICION_DATA: BookItem = {
  id: "juego-de-posicion",
  title: "Juego de Posición: El Legado Neerlandés",
  author: "Escuela Cruyffista (Michels, Cruyff, Van Gaal, Guardiola)",
  review: "Más que un libro, es una doctrina transmitida de generación en generación: de Rinus Michels a Johan Cruyff, de Cruyff al Ajax y al Barcelona, y de ahí a casi todo el fútbol de élite moderno. Su obsesión central es generar superioridades numéricas y posicionales atrayendo al rival, para encontrar siempre al hombre libre.",
  takeaways: [
    "El objetivo no es tener el balón; es ocupar el espacio correcto para que el balón circule con sentido.",
    "El 'tercer hombre' es el concepto central: dos jugadores atraen la presión para liberar a un tercero.",
    "La presión tras pérdida (contrapressing) es la otra cara de la misma moneda: si pierdes el balón por buscar la superioridad, recupéralo en 5 segundos.",
    "El campo se divide en carriles (bandas, medios carriles, centro) y ninguna línea de altura debe repetir jugador en el mismo carril.",
    "Atraer al rival hacia un lado del campo es tan importante como el pase mismo; el pase solo confirma lo que el posicionamiento ya generó."
  ],
  introduction: "El Juego de Posición no nació con Guardiola; es una tradición que arranca con Rinus Michels en el Ajax de los años 60 y 70, se codifica como filosofía con Johan Cruyff (como jugador y luego como entrenador del 'Dream Team' del Barcelona), y se perfecciona técnicamente con discípulos como Van Gaal y Guardiola. Su premisa es simple de decir y muy difícil de ejecutar: ocupa el espacio antes de que llegue el balón, para que cuando llegue, ya hayas ganado la jugada.",
  chapters: [
    {
      title: "Capítulo 1: Superioridad Posicional (Ocupar el Espacio Antes que el Balón)",
      concept: "No basta con tener más jugadores que el rival en una zona (superioridad numérica); hay que ocupar los espacios correctos entre líneas para que esos jugadores extra realmente sean útiles. Un jugador de más, mal posicionado, no sirve de nada.",
      example: "Tu equipo tiene 4 jugadores en el sector izquierdo contra 3 rivales. Pero si los 4 están a la misma altura y el mismo carril, el rival puede taparlos con una sola línea de marca. La solución: uno se posiciona en el carril interior, otro en la banda, otro entre líneas, y otro por detrás como opción de descarga. Ahora sí, la superioridad numérica se traduce en superioridad posicional real.",
      dos: [
        "Antes de pedir el balón, pregúntate si tu posición actual realmente genera una ventaja o si solo estás 'ocupando espacio' sin sentido.",
        "Varía tu altura y tu carril constantemente para romper las líneas de marca del rival."
      ],
      donts: [
        "No te agrupes con 2 o 3 compañeros en el mismo carril y la misma altura; eso anula la superioridad numérica.",
        "No confundas tener el balón con tener ventaja; la ventaja se construye antes de que llegue el pase."
      ],
      tacticalTip: "Visualiza el campo como una cuadrícula de 5 carriles verticales. Regla de oro: nunca debe haber dos compañeros tuyos en el mismo carril y a la misma altura al mismo tiempo."
    },
    {
      title: "Capítulo 2: El Tercer Hombre (Romper Líneas sin Tocar el Balón)",
      concept: "El concepto táctico más importante de esta escuela: dos jugadores tuyos intercambian un pase corto y aparentemente inofensivo, con el único objetivo de atraer a un rival y abrir una línea de pase hacia un tercer jugador, que es quien realmente recibirá el balón en una posición de ventaja.",
      example: "Tu central le pasa a tu pivote. El mediocentro rival salta a presionar al pivote. En el instante exacto en que el rival salta, tu pivote devuelve el balón de primera hacia tu interior (el 'tercer hombre'), que ha quedado completamente libre porque el rival ya comprometió su posición presionando al pivote.",
      dos: [
        "Como 'tercer hombre', muévete en el momento exacto en que tu compañero recibe el segundo pase, ni antes ni después.",
        "Como jugador que atrae la presión, exagera ligeramente tu intención de avanzar con el balón para comprometer más al rival."
      ],
      donts: [
        "No pienses el pase como un evento aislado; siempre debe ser el segundo paso de una secuencia de 3.",
        "No uses este recurso si tu 'tercer hombre' no está atento o no ha anticipado el movimiento; sin sincronía, la jugada muere."
      ],
      tacticalTip: "Practica el 'rondo' de 4 contra 1 o 5 contra 2 constantemente: es el ejercicio original diseñado por Cruyff para automatizar el concepto del tercer hombre en el entrenamiento diario."
    },
    {
      title: "Capítulo 3: La Presión Tras Pérdida como Extensión Ofensiva (Contrapressing)",
      concept: "Si arriesgas buscando la superioridad posicional, es matemáticamente inevitable perder el balón alguna vez en una zona comprometida. La escuela neerlandesa no ve esto como un fracaso, sino como la otra mitad del plan: en el instante de la pérdida, tus jugadores más cercanos al balón presionan de inmediato, porque saben exactamente dónde están posicionados sus compañeros (fueron ellos quienes diseñaron la jugada).",
      example: "Intentas un pase filtrado que el rival intercepta cerca de tu área rival. En vez de replegar, tus 2 o 3 jugadores más cercanos al punto de pérdida presionan inmediatamente al rival que acaba de robar, porque conocen la estructura de su propio equipo y saben que sus compañeros más retrasados ya están cubriendo el espacio a sus espaldas.",
      dos: [
        "Considera cada pérdida de balón como el inicio inmediato de una nueva fase de presión, no como el fin de la jugada.",
        "Mantén siempre a 2 jugadores cerca del punto donde puede producirse la pérdida (regla de la 'doble cobertura')."
      ],
      donts: [
        "No repliegues instintivamente hacia tu portería tras perder el balón cerca del área rival; eso regala metros gratis al contragolpe.",
        "No arriesgues el juego de posición si tu equipo no tiene la disciplina física para sostener la presión inmediata tras la pérdida."
      ],
      tacticalTip: "El Juego de Posición y la presión tras pérdida no son dos sistemas distintos; son la misma filosofía vista desde dos ángulos: cuando tienes el balón, ataca con estructura; cuando lo pierdes, esa misma estructura te sirve para presionar."
    }
  ]
};