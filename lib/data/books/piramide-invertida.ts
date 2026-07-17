import { BookItem } from "../library";

export const PIRAMIDE_INVERTIDA_DATA: BookItem = {
  id: "piramide-invertida",
  title: "La Pirámide Invertida",
  author: "Jonathan Wilson",
  review: "La biblia de la historia táctica del fútbol. Wilson traza la evolución de los sistemas desde el rígido 2-3-5 victoriano hasta el juego de posición moderno, demostrando que cada revolución táctica nació de una necesidad concreta: anotar más, defender mejor, o aprovechar un cambio de reglamento.",
  takeaways: [
    "Toda evolución táctica es una respuesta a un problema concreto, no una moda estética.",
    "El cambio de la ley del fuera de juego en 1925 (de 3 a 2 rivales) obligó a inventar la defensa moderna en cuestión de meses.",
    "El libero italiano nació de la necesidad de tener un jugador libre que corrigiera los errores de la marca individual.",
    "El Fútbol Total no era solo un sistema, era una filosofía de intercambio de posiciones basada en la inteligencia colectiva.",
    "Todo sistema táctico es, en el fondo, una gestión del espacio y del tiempo, no una simple formación en el papel."
  ],
  introduction: "Wilson desmonta la idea de que las tácticas evolucionan por capricho de un entrenador genial. Cada revolución —el WM inglés, el catenaccio italiano, el fútbol total holandés, el tiki-taka español— surge de una restricción o de una necesidad muy concreta del momento histórico. Entender de dónde viene cada sistema te permite entender por qué tu entrenador actual te pide hacer lo que te pide, y cuál es la contra-táctica lógica para cada uno.",
  chapters: [
    {
      title: "Capítulo 1: Del 2-3-5 al Sistema WM (El Nacimiento de la Defensa Moderna)",
      concept: "En el fútbol de principios del siglo XX, se necesitaban solo 3 rivales entre el atacante y la portería para evitar el fuera de juego, así que las defensas jugaban prácticamente sin cobertura, en un 2-3-5 ofensivo puro. En 1925, la ley cambió a solo 2 rivales, y de la noche a la mañana los delanteros dejaron de estar en fuera de juego con facilidad. Herbert Chapman resolvió el caos retrasando a un mediocentro para convertirlo en un tercer defensa central, creando el famoso sistema WM (3-2-2-3).",
      example: "Imagina que juegas de mediocentro en 1925. Antes tu trabajo era solo repartir juego; ahora, tras el cambio de regla, te piden que retrocedas entre los dos centrales cada vez que el rival ataca, formando una línea de 3 defensores. Naces, sin saberlo, como el primer 'pivote defensivo' de la historia.",
      dos: [
        "Entiende que cada posición moderna (el pivote, el libero, el interior) nació resolviendo un problema específico de espacio o de reglamento.",
        "Cuando un sistema deja de funcionar, la solución casi siempre es reubicar a un jugador de una línea a otra, no fichar 'más talento'."
      ],
      donts: [
        "No memorices formaciones como números fijos (4-4-2, 4-3-3); entiéndelas como soluciones a un problema de espacio.",
        "No asumas que el sistema más nuevo es siempre el mejor; cada sistema responde a un contexto de reglas y rivales distinto."
      ],
      tacticalTip: "Pregúntate siempre: '¿qué problema resuelve esta formación?' antes de memorizar dónde se para cada jugador."
    },
    {
      title: "Capítulo 2: Catenaccio (El Arte Italiano de la Destrucción Organizada)",
      concept: "El catenaccio ('cerrojo' en italiano) introdujo al libero: un defensor libre de marca individual, posicionado detrás de la línea defensiva, cuya única función era barrer cualquier balón que superara a sus compañeros. Nació de un fútbol italiano de posguerra con pocos recursos ofensivos, donde ganar 1-0 con solidez defensiva era más rentable que arriesgar por un ataque vistoso.",
      example: "Tus tres centrales marcan hombre a hombre a los tres delanteros rivales. Tú, como líbero, no marcas a nadie; te posicionas 5 metros por detrás de tus compañeros. Si un rival se escapa de su marcador con un pase filtrado, tú apareces desde atrás para interceptar el balón antes de que llegue a portería.",
      dos: [
        "Si juegas de líbero o de central 'libre' en un sistema con marca individual, tu prioridad es la lectura de espacios, no la marca directa.",
        "Comunica constantemente a tus compañeros de marca individual cuándo deben apretar o soltar a su hombre."
      ],
      donts: [
        "No abandones tu posición de cobertura para ir a doblar una marca a menos que sea estrictamente necesario.",
        "No confundas 'defender bien' con 'no arriesgar nunca'; el catenaccio bien jugado también sabe salir en contragolpe."
      ],
      tacticalTip: "El catenaccio ganó mundiales, pero también enseñó al fútbol que la contra-táctica perfecta contra la marca individual es el movimiento constante sin balón para desordenar las referencias del marcador."
    },
    {
      title: "Capítulo 3: El Fútbol Total (La Revolución Holandesa de Michels y Cruyff)",
      concept: "El Ajax y la selección neerlandesa de los años 70 rompieron con la idea de posiciones fijas. Cualquier jugador podía ocupar temporalmente el rol de otro, siempre que un compañero cubriera el espacio que dejaba libre. Esto exigía una inteligencia colectiva y una condición física superiores a cualquier equipo de la época.",
      example: "Tu lateral derecho decide subir a la banda a atacar. En ese instante, tu interior derecho, en vez de quedarse esperando, retrocede a cubrir el carril de lateral. El sistema no colapsa porque el espacio siempre está ocupado por alguien, aunque no sea 'el titular natural' de esa posición.",
      dos: [
        "Aprende a leer el campo como espacios que deben estar siempre ocupados, no como una lista de 11 posiciones fijas.",
        "Comunica en voz alta cuando rotas de posición, para que tu compañero sepa que debe cubrir tu hueco."
      ],
      donts: [
        "No rotes de posición si no tienes la certeza de que alguien cubrirá el espacio que dejas.",
        "No confundas el Fútbol Total con jugar sin orden; es un sistema de reglas de cobertura muy estrictas, disfrazado de libertad."
      ],
      tacticalTip: "El Fútbol Total exige una regla de oro: nunca dejes un espacio vacío más de 2 o 3 segundos. Si rotas, alguien más ya debería estar entrando a cubrir."
    },
    {
      title: "Capítulo 4: Tiki-Taka y la Globalización del Juego de Posición",
      concept: "El Barcelona de Guardiola y la selección española (2008-2012) llevaron el legado del Fútbol Total a su máxima expresión de control: posesión extrema, campo reducido con presión asfixiante, y una obsesión por encontrar superioridades numéricas en cada zona del campo antes de progresar el balón.",
      example: "Tu equipo tiene el balón en el círculo central. En vez de buscar el pase vertical inmediato, generas primero superioridad numérica local: 4 jugadores tuyos contra 2 rivales en un radio de 10 metros. Solo cuando esa superioridad existe, uno de los 4 rompe líneas con un pase filtrado hacia el espacio libre.",
      dos: [
        "Prioriza siempre generar superioridad numérica local antes de arriesgar el pase vertical.",
        "Usa la posesión como herramienta de desgaste físico y psicológico del rival, no como un fin en sí mismo."
      ],
      donts: [
        "No confundas tiki-taka con 'pasar por pasar'; cada toque debe tener una intención posicional.",
        "No abuses de la posesión si tu equipo no tiene la condición física o técnica para sostener la presión tras pérdida que este sistema exige."
      ],
      tacticalTip: "El tiki-taka murió como moda cuando los rivales aprendieron a defender en bloque muy bajo y compacto; la contra-táctica lógica es la verticalidad rápida y los centros al área en el segundo palo."
    }
  ]
};