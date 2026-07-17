import Link from "next/link";
import { ArrowLeft, Compass, Target, Brain, Activity, Heart, Repeat, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export default function PhilosophyPage() {
  const systemicPillars = [
    {
      id: "working-backwards",
      title: "1. El Sistema de Reversa: Del Propósito Mayor al Entrenamiento de Hoy",
      subtitle: "La diferencia entre tener un sueño y tener un sistema.",
      concept: "El jugador promedio entrena hoy para 'ver qué pasa' mañana. El jugador de élite define primero su objetivo mayor (ej. Debut profesional en Europa a los 20 años) y desarma ese objetivo hacia atrás año por año, mes por mes, hasta saber exactamente qué tiene que hacer en la sesión de las 8:00 AM de hoy.",
      amateur: "Se estanca porque entrena por inercia, motivado solo cuando las cosas van bien.",
      elite: "Llega porque automatiza su rutina. Cada sprint, cada comida y cada minuto de descanso está justificado por un porqué mayor. Sabe que el entrenamiento de hoy es la primera pieza que derriba el dominó del debut profesional.",
      icon: <Repeat className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "psychological-pilar",
      title: "2. El Pilar Psicológico: Tolerancia al Aburrimiento y Enfoque Obsesivo",
      subtitle: "La mente invisible que sostiene el talento físico.",
      concept: "Los que no llegan culpan a la 'falta de oportunidades', pero la realidad es que se aburren de la repetición. La maestría táctica y técnica requiere hacer lo mismo diez mil veces hasta que sea un acto reflejo inconsciente. El cerebro del profesional encuentra placer en la disciplina invisible.",
      amateur: "Busca la magia, el lujo innecesario en el campo y se frustra cuando la rutina se vuelve monótona.",
      elite: "Entiende que la consistencia aburrida construye imperios. Escanea el campo 5 veces antes de recibir, se perfila bien el 100% de las veces y mantiene el foco bajo presión extrema.",
      icon: <Brain className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "physical-system",
      title: "3. El Pilar Físico: El Cuerpo como una Máquina de Alta Ingeniería",
      subtitle: "El entrenamiento invisible de las 22 horas fuera del club.",
      concept: "El entrenamiento en la cancha dura 2 horas; el entrenamiento biológico dura las otras 22 horas del día. Los que alcanzan el máximo nivel entienden que la nutrición celular, la hidratación milimétrica y los ciclos de sueño profundo (fases REM y no REM) son los que permiten al músculo asimilar la carga táctica.",
      amateur: "Entrena duro en el club, pero destruye su cuerpo con malas noches, azúcar, deshidratación y falta de estiramiento.",
      elite: "Trata su cuerpo como un monoplaza de Fórmula 1. Planifica su nutrición para la demanda energética del partido y respeta el descanso como una sesión de entrenamiento obligatoria.",
      icon: <Activity className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "emotional-management",
      title: "4. El Pilar Emocional: Neutralidad Táctica frente a la Euforia y la Crisis",
      subtitle: "El control del pulso en los momentos de caos.",
      concept: "El fútbol es un juego de alta carga emocional. Los jugadores que se estancan son montañas rusas: un gol los hace sentir reyes y un error los hunde en el miedo. La élite opera en un estado de neutralidad emocional; el pulso no se altera ni ganando 3-0 ni perdiendo una final.",
      amateur: "Juega condicionado por sus emociones, reclama al árbitro, se engancha con la grada y pierde el orden táctico.",
      elite: "Conserva el frío cerebral. Si falla, activa la 'próxima acción' al instante. Si anota, regresa a su posición a organizar la presión en bloque. Su estabilidad mental estabiliza a todo el equipo.",
      icon: <Heart className="w-5 h-5 text-emerald-500" />
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

        {/* Encabezado Principal */}
        <header className="border-b border-zinc-900 pb-8 mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 blur-3xl pointer-events-none bg-emerald-500 w-64 h-64 rounded-full" />
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Compass className="w-5 h-5 animate-spin-slow" />
            <span className="text-xs font-bold tracking-wider uppercase">Pilar 01 — El Manifiesto de la Élite</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight max-w-3xl">
            Los que Llegan vs. Los que se Estancan: El Enfoque Holístico
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
            Este documento no es para aprender a golpear el balón; es para diseñar la mente y la rutina de un atleta que ha decidido, con convicción absoluta, ser profesional. Aquí entendemos que el talento es solo el boleto de entrada; el sistema de vida es lo que define quién debuta en primera y quién se queda en el camino.
          </p>
        </header>

        <main className="space-y-16">
          
          {/* ================= MAPA DE INGENIERÍA INVERSA (PIZARRA TÁCTICA) ================= */}
          <section className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-xl">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-100">
                  La Pizarra del Propósito: Sistema "Working Backwards"
                </h2>
                <p className="text-zinc-500 text-xs mt-0.5">El flujo estratégico que justifica cada acción del día.</p>
              </div>
            </div>

            {/* Renderizado de Pizarra con Tailwind CSS v4 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative">
              {/* Bloque 4: El Propósito Mayor */}
              <div className="flex flex-col items-center justify-between border border-emerald-500/30 bg-emerald-950/10 p-4 rounded-xl text-center shadow-lg relative group">
                <div className="absolute top-2 right-2 text-emerald-400 opacity-60"><Sparkles className="w-3 h-3" /></div>
                <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest">Nivel 01 — Fin Supremo</span>
                <h4 className="text-sm font-bold text-zinc-100 mt-2 mb-1">EL PROPÓSITO MAYOR</h4>
                <p className="text-[11px] text-zinc-400">Debut profesional en Primera División y consolidación internacional.</p>
              </div>

              {/* Bloque 3: Estrategia de Sistemas */}
              <div className="flex flex-col items-center justify-between border border-zinc-800 bg-zinc-900/40 p-4 rounded-xl text-center">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Nivel 02 — Estrategia</span>
                <h4 className="text-sm font-bold text-zinc-200 mt-2 mb-1">LOS SISTEMAS</h4>
                <p className="text-[11px] text-zinc-400">Automatización del pilar físico (nutrición/sueño) y psicológico (enfoque).</p>
              </div>

              {/* Bloque 2: Requerimientos Técnicos */}
              <div className="flex flex-col items-center justify-between border border-zinc-800 bg-zinc-900/40 p-4 rounded-xl text-center">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Nivel 03 — Necesidades</span>
                <h4 className="text-sm font-bold text-zinc-200 mt-2 mb-1">LOS REQUERIMIENTOS</h4>
                <p className="text-[11px] text-zinc-400">Escaneo de 360°, perfilado corporal a 45° y precisión en toma de decisiones.</p>
              </div>

              {/* Bloque 1: El Entrenamiento de Hoy */}
              <div className="flex flex-col items-center justify-between border border-emerald-500/20 bg-zinc-900 p-4 rounded-xl text-center shadow-inner">
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest">Nivel 04 — Acción</span>
                <h4 className="text-sm font-bold text-emerald-400 mt-2 mb-1">EL ENTRENAMIENTO DE HOY</h4>
                <p className="text-[11px] text-zinc-300">Cada sprint, repetición y pase con intención obsesiva en la sesión actual.</p>
              </div>
            </div>
            
            <p className="text-zinc-400 text-xs italic text-center md:text-left">
              * Nota mental para el jugador: Todo lo que haces hoy cobra sentido porque empuja y construye el bloque del nivel superior. Si entrenas a medias hoy, fracturas el propósito mayor.
            </p>
          </section>

          {/* ================= LOS CUATRO PILARES SISTÉMICOS COMPLETOS ================= */}
          <section className="space-y-8">
            <div className="flex items-center gap-2 text-zinc-400">
              <Zap className="w-4 h-4 text-emerald-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">La Anatomía del Éxito Integral</h3>
            </div>

            <div className="space-y-8">
              {systemicPillars.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-zinc-800 transition-all duration-300 space-y-6"
                >
                  {/* Título de Pilar */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-950 border border-zinc-800 text-emerald-500 rounded-2xl shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-zinc-100 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-zinc-500 text-xs font-medium mt-0.5">{pillar.subtitle}</p>
                    </div>
                  </div>

                  {/* Concepto Central */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block">El Concepto Holístico</span>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-emerald-500/50">
                      {pillar.concept}
                    </p>
                  </div>

                  {/* Análisis Comparativo Real: Los que se quedan vs Los que llegan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Los que se estancan */}
                    <div className="bg-red-950/10 border border-red-950/20 p-5 rounded-2xl space-y-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-red-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          Por qué el 95% se estanca
                        </div>
                        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                          {pillar.amateur}
                        </p>
                      </div>
                    </div>

                    {/* Los que alcanzan el nivel */}
                    <div className="bg-emerald-950/10 border border-emerald-950/20 p-5 rounded-2xl space-y-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Cómo opera el 5% que llega
                        </div>
                        <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-medium">
                          {pillar.elite}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= CONCLUSIÓN / RECORDATORIO DE REGRESO AL JUGADOR ================= */}
          <section className="bg-gradient-to-r from-zinc-900/60 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> El Compromiso Invisible con Uno Mismo
              </h4>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                Nadie te va a vigilar cuando estés solo en tu habitación decidiendo si duermes 8 horas o te quedas con el teléfono. Nadie sabrá si diste el 100% en el último sprint del entrenamiento cuando el preparador físico no miraba. Llegar a primera no es una medalla que te dan al final; es una decisión silenciosa que tomas cada hora del día de tu vida.
              </p>
            </div>
            <div className="text-center shrink-0">
              <span className="text-[10px] font-mono font-bold text-zinc-600 block uppercase tracking-widest">Estado del Sistema</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl block mt-1 tracking-wide font-mono">
                MENTALIDAD: ACTIVA
              </span>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-zinc-600 tracking-wider border-t border-zinc-900 pt-8">
          "El éxito no es un accidente. Es trabajo duro, perseverancia, aprendizaje, estudio y, sobre todo, amor por lo que haces." — Pelé
        </footer>
      </div>
    </div>
  );
}
