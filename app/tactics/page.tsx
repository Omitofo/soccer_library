import Link from "next/link";
import { ArrowLeft, Shield, Eye, Zap, Layers, ShieldAlert, CheckCircle } from "lucide-react";

export default function TacticsPage() {
  const tacticalConcepts = [
    {
      id: "lineal-distances",
      title: "1. El Bloque Compacto (La Regla de los 12 Metros)",
      concept: "El fútbol moderno se juega comprimiendo el espacio. La distancia vertical máxima entre tu línea defensiva y tus mediocampistas nunca debe superar los 12 metros. Si el equipo se estira, dejas pasillos interlineales libres donde los mediapuntas rivales te destruirán.",
      execution: "Cuando tu delantero salta a presionar, la línea defensiva debe dar tres pasos hacia adelante de inmediato para empujar al equipo. Defender hacia adelante reduce el campo del rival a la mitad.",
    },
    {
      id: "unit-pressing",
      title: "2. Unit Pressing (Direccionamiento de la Presión)",
      concept: "Presionar no es correr hacia el balón como un loco; es tapar líneas de pase lógicas para ahogar al rival. El bloque debe activarse como una sola unidad en cuanto el central oponente suelta un pase defectuoso o lento hacia el lateral.",
      execution: "El extremo tapa el pasillo interior (línea de pase al volante), obligando al rival a pasar la pelota hacia la banda. En cuanto el balón viaja al lateral, el equipo entero bascula (se mueve de lado) cerrando el espacio contra la línea de cal.",
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

        {/* Encabezado Táctico */}
        <header className="border-b border-zinc-900 pb-8 mb-12">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase">Pilar 02 — Estrategia Colectiva</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-100 tracking-tight">
            Pizarras Tácticas de Alta Competencia
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed max-w-2xl">
            Entiende los sistemas, las estructuras y los movimientos sincronizados del equipo. En el profesionalismo, el orden es el que genera los espacios para el talento.
          </p>
        </header>

        <main className="space-y-16">
          
          {/* ================= SIMULADOR DE PIZARRA 01: COMPACTACIÓN ================= */}
          <section className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Esquema Táctico 01</span>
                <h2 className="text-xl font-bold text-zinc-100">{tacticalConcepts[0].title}</h2>
              </div>
              <span className="text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-xl">
                Fase: Organización Defensiva
              </span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">{tacticalConcepts[0].concept}</p>

            {/* Renderizado Visual de Cancha - Bloque Acordeón */}
            <div className="w-full max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-64 shadow-xl">
              {/* Líneas de campo de fondo */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] border-b border-zinc-900 border-dashed" />
              
              {/* Bloque de Ataque Rival (Arriba) */}
              <div className="flex justify-around w-full opacity-40">
                <div className="w-7 h-7 bg-red-950 border border-red-800 rounded-full flex items-center justify-center text-[10px] font-bold text-red-400">9</div>
                <div className="w-7 h-7 bg-red-950 border border-red-800 rounded-full flex items-center justify-center text-[10px] font-bold text-red-400">7</div>
              </div>

              {/* LÍNEA MEDIOCAMPISTAS NUESTROS */}
              <div className="flex justify-around w-full relative z-10">
                <div className="w-7 h-7 bg-zinc-900 border border-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]">8</div>
                <div className="w-7 h-7 bg-zinc-900 border border-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]">5</div>
                <div className="w-7 h-7 bg-zinc-900 border border-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]">10</div>
              </div>

              {/* ESPACIO INTERLINEAL / CANAL DE COMPRESIÓN */}
              <div className="w-full flex flex-col items-center justify-center relative py-1">
                <div className="absolute inset-x-4 h-full bg-emerald-500/5 border-y border-dashed border-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-500/80 uppercase">
                    Distancia Estricta: Máximo 12 Metros
                  </span>
                </div>
              </div>

              {/* LÍNEA DEFENSIVA NUESTRA */}
              <div className="flex justify-around w-full relative z-10">
                <div className="w-7 h-7 bg-zinc-900 border border-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400">3</div>
                <div className="w-7 h-7 bg-zinc-900 border border-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400">4</div>
                <div className="w-7 h-7 bg-zinc-900 border border-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400">2</div>
              </div>

              {/* Arco Nuestro (Abajo) */}
              <div className="w-16 h-4 border-t-2 border-x-2 border-zinc-800 mx-auto rounded-t-sm opacity-20" />
            </div>

            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900/60 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                <strong className="text-zinc-200 block mb-0.5">Mecánica de ejecución:</strong> {tacticalConcepts[0].execution}
              </p>
            </div>
          </section>

          {/* ================= SIMULADOR DE PIZARRA 02: UNIT PRESSING ================= */}
          <section className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">Esquema Táctico 02</span>
                <h2 className="text-xl font-bold text-zinc-100">{tacticalConcepts[1].title}</h2>
              </div>
              <span className="text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-xl">
                Fase: Presión Tras Pérdida
              </span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">{tacticalConcepts[1].concept}</p>

            {/* Renderizado Visual de Cancha - Presión en Banda */}
            <div className="w-full max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-64 shadow-xl">
              {/* Líneas de banda y esquina */}
              <div className="absolute right-0 inset-y-0 w-[1px] border-r border-dashed border-zinc-800" />
              
              {/* Zona Alta: Central Rival salta pase */}
              <div className="flex justify-between items-center w-full px-8">
                <div className="w-7 h-7 bg-red-950 border border-red-800 rounded-full flex items-center justify-center text-[10px] font-bold text-red-400 opacity-30">Central</div>
                <div className="text-[10px] font-mono font-bold text-zinc-600 tracking-wider">── Pase Lento ──&gt;</div>
                <div className="w-7 h-7 bg-red-900 border border-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-red-200 animate-pulse">Lateral</div>
              </div>

              {/* Zona Media: Trampa de presión */}
              <div className="flex justify-end items-center w-full pr-4 gap-12">
                <div className="text-center">
                  <span className="text-[9px] font-mono block text-red-500 font-bold uppercase tracking-tighter">Cerrado</span>
                  <div className="w-7 h-7 bg-red-950 border border-red-800 rounded-full flex items-center justify-center text-[10px] font-bold text-red-400 opacity-40">Volante</div>
                </div>
                
                {/* Bloque de presión de pinza */}
                <div className="flex gap-4 relative">
                  <div className="absolute -top-6 left-2 text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest animate-pulse">¡Cierre de Pinza!</div>
                  <div className="w-7 h-7 bg-zinc-900 border border-emerald-400 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">9</div>
                  <div className="w-7 h-7 bg-zinc-900 border border-emerald-400 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">7</div>
                </div>
              </div>

              {/* Zona de Bloqueo contra la línea */}
              <div className="w-full flex justify-end px-4">
                <div className="border border-dashed border-red-500/30 bg-red-500/5 text-[9px] font-mono font-bold px-4 py-1 rounded text-red-400 uppercase">
                  Zona de Ahogo Obligado Contra la Banda
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900/60 flex items-start gap-2.5">
              <Eye className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                <strong className="text-zinc-200 block mb-0.5">Mecánica de ejecución:</strong> {tacticalConcepts[1].execution}
              </p>
            </div>
          </section>

          {/* ================= SECCIÓN DE ALERTAS: ERROR COMÚN EN JUVENILES ================= */}
          <section className="bg-gradient-to-r from-zinc-900/40 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-500" /> El Error que te Saca del Profesionalismo
              </h4>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                El juvenil promedio persigue el balón como un imán. Si juegas de mediocampista central y rompes tu posición para ir a corretear un balón a la banda sin que te corresponda, destruyes el engranaje del equipo. Un profesional defiende su zona, mantiene las distancias métricas y salta únicamente cuando se activa el gatillo de presión colectiva.
              </p>
            </div>
            <div className="text-center shrink-0">
              <span className="text-[10px] font-mono font-bold text-zinc-600 block uppercase tracking-widest">Nivel Táctico</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl block mt-1 tracking-wide font-mono">
                SISTEMA: COMPACTO
              </span>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-zinc-600 tracking-wider border-t border-zinc-900 pt-8">
          "Si tienes espacio, tienes tiempo. Si tienes tiempo, puedes pensar. Si piensas, juegas bien." — Xavi Hernández
        </footer>
      </div>
    </div>
  );
}

