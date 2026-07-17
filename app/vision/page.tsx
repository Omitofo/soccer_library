import Link from "next/link";
import { ArrowLeft, Eye, Target, Sparkles, Compass, Lightbulb, ShieldAlert } from "lucide-react";

export default function VisionPage() {
  const visionConcepts = [
    {
      id: "scanning",
      title: "1. Escaneo de Alta Frecuencia (3 a 5 Vistazos)",
      concept: "El jugador amateur mira el balón fijamente mientras viaja hacia él. El profesional escanea su entorno entre 3 y 5 veces antes de que la pelota toque su botín. Debes forzar a tu cuello a girar justo en los microsegundos en los que el balón se está moviendo de un compañero a otro.",
      execution: "No busques el balón con los ojos cuando ya sabes que viene hacia ti. Desconecta la mirada de la pelota por medio segundo, gira la cabeza hacia tu espalda para detectar la presión del rival y toma la decisión antes del control.",
    },
    {
      id: "body-profiling",
      title: "2. El Perfilado Matemático a 45 Grados",
      concept: "Si recibes de espaldas al arco rival, estás anulando el 50% de tus opciones de ataque y facilitando la presión del defensor. Tu cuerpo debe estar siempre orientado en un ángulo diagonal que te permita ver, en un mismo plano periférico, el balón que viene y el espacio que vas a atacar.",
      execution: "Coloca tu pie de apoyo apuntando hacia el carril lateral y recibe el balón siempre con la pierna lejana a la presión. Esto te orienta automáticamente hacia adelante y te permite dar un pase filtrado de primera intención.",
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12 selection:bg-emerald-500 selection:text-zinc-950">
      <div className="max-w-5xl mx-auto">
        
        {/* Navegación */}
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver al Centro de Mando
          </Link>
        </nav>

        {/* Encabezado de Visión */}
        <header className="border-b border-zinc-900 pb-8 mb-12">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Eye className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase">Pilar 03 — Percepción Espacial</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
            Visión de Campo y Dominio del Espacio
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed max-w-2xl">
            Los mejores jugadores del mundo no tienen mejores ojos, tienen mejores hábitos de escaneo. Domina los secretos del perfilado corporal para ganar dos segundos de ventaja en cada jugada.
          </p>
        </header>

        <main className="space-y-16">
          
          {/* ================= SIMULADOR VISUAL DE CONO DE VISIÓN (45 GRADOS) ================= */}
          <section className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Simulador Óptico 01</span>
                <h2 className="text-xl font-bold text-zinc-100">La Geometría del Perfilado Perfecto</h2>
              </div>
              <span className="text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-xl">
                Ángulo Óptimo: 45°
              </span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">{visionConcepts[1].concept}</p>

            {/* Gráfico Táctico hecho con Tailwind */}
            <div className="w-full max-w-lg mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden shadow-2xl">
              
              {/* Cono de Visión Eficiente (Sombreado Verde Radial) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/5 to-emerald-500/10 rounded-full clip-path-cone pointer-events-none transform -rotate-12" />

              {/* Nodo Superior: El Objetivo a Espaldas de la Presión */}
              <div className="absolute top-8 right-12 z-10 flex flex-col items-center">
                <div className="bg-zinc-900 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-md">
                  [Espacio de Ataque]
                </div>
                <div className="text-[9px] font-mono text-emerald-500/60 mt-1 uppercase tracking-widest">Zona Libre Detectada</div>
              </div>

              {/* Centro de la Pizarra: El Jugador Perfilado */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Indicador de Ángulo de Hombros */}
                <div className="w-20 h-2 bg-zinc-800 border-x-4 border-emerald-500 rounded-full transform rotate-45 shadow-lg relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-500 font-bold uppercase">Línea Hombros</div>
                </div>
                
                {/* El Jugador (Círculo Central) */}
                <div className="w-10 h-10 bg-zinc-900 border-2 border-emerald-400 rounded-full flex items-center justify-center text-xs font-black text-emerald-400 mt-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  M
                </div>
                <span className="text-[10px] font-mono text-zinc-400 mt-1.5 font-bold">Tú (Mediocampista)</span>
              </div>

              {/* Nodo Inferior Izquierdo: Origen del Pase */}
              <div className="absolute bottom-8 left-12 z-10 flex flex-col items-center">
                <div className="w-6 h-6 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-[10px] font-bold text-zinc-400">P</div>
                <div className="text-[9px] font-mono text-zinc-500 mt-1 uppercase">Pase de Origen</div>
                <div className="text-[8px] font-mono text-emerald-500 animate-pulse mt-0.5">▲ Balón en Trayecto</div>
              </div>

              {/* Línea divisoria de visibilidad ciega */}
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-red-500/40 uppercase tracking-tighter border border-red-500/10 bg-red-950/5 px-2 py-1 rounded">
                Punto Ciego Evitado
              </div>
            </div>

            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900/60 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                <strong className="text-zinc-200 block mb-0.5">Mecánica de ejecución:</strong> {visionConcepts[1].execution}
              </p>
            </div>
          </section>

          {/* ================= SECCIÓN DE CONCEPTO 02: ESCANEO DE ALTA FRECUENCIA ================= */}
          <section className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Metodología Crítica 02</span>
                <h2 className="text-xl font-bold text-zinc-100">{visionConcepts[0].title}</h2>
              </div>
              <span className="text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-xl">
                Hábito de Élite
              </span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">{visionConcepts[0].concept}</p>

            {/* Línea de Tiempo del Escaneo Explicada */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">Cronología del Escaneo Profesional</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-900/40 border border-zinc-900 p-4 rounded-xl space-y-1.5">
                  <div className="text-xs font-mono font-bold text-emerald-400">Paso 01: Antes del Pase</div>
                  <p className="text-zinc-400 text-xs leading-relaxed">Mientras tu central controla el balón, tú giras el cuello para ubicar la posición de tu marcador más cercano.</p>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-900 p-4 rounded-xl space-y-1.5 border-emerald-500/20 shadow-md">
                  <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                    Paso 02: Balón Viajando <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-zinc-300 text-xs leading-relaxed font-medium">Justo cuando el balón sale de los pies de tu compañero, quitas la mirada de la pelota por 0.4 segundos y miras el arco rival.</p>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-900 p-4 rounded-xl space-y-1.5">
                  <div className="text-xs font-mono font-bold text-emerald-400">Paso 03: El Control</div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Regresas la mirada al balón únicamente para asegurar un control orientado perfecto hacia el espacio que ya descubriste.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900/60 flex items-start gap-2.5">
              <Compass className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                <strong className="text-zinc-200 block mb-0.5">Mecánica de ejecución:</strong> {visionConcepts[0].execution}
              </p>
            </div>
          </section>

          {/* ================= ALERTA EXTRA: REGLA DE ORO CONTRA EL ESTANCAMIENTO ================= */}
          <section className="bg-gradient-to-r from-zinc-900/40 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-500" /> El Defecto Ocular del Jugador de Parque
              </h4>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                Un visor de talento detecta a un jugador amateur en los primeros 5 minutos observando exclusivamente su cabeza. Si el jugador corre mirando al suelo, o si solo gira el cuello cuando tiene la pelota en sus pies, ese jugador está descartado para el fútbol profesional. La élite recopila información constantemente para jugar un toque por delante del oponente.
              </p>
            </div>
            <div className="text-center shrink-0">
              <span className="text-[10px] font-mono font-bold text-zinc-600 block uppercase tracking-widest">Estado Cognitivo</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl block mt-1 tracking-wide font-mono">
                PERCEPCIÓN: 360°
              </span>
            </div>
          </section>

        </main>

        {/* Footer Final */}
        <footer className="mt-16 text-center text-xs text-zinc-600 tracking-wider border-t border-zinc-900 pt-8">
          "Los jugadores mediocres miran el balón. Los buenos jugadores miran la jugada. Los genios miran el espacio libre." — Johan Cruyff
        </footer>
      </div>
    </div>
  );
}

