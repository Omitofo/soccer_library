"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trophy, Shield, Eye, BookOpen, Menu, X, Circle } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: "philosophy", label: "Filosofía de Juego", href: "/philosophy", icon: <Trophy className="w-4 h-4" /> },
  { id: "tactics", label: "Pizarras Tácticas", href: "/tactics", icon: <Shield className="w-4 h-4" /> },
  { id: "vision", label: "Visión y Espacios", href: "/vision", icon: <Eye className="w-4 h-4" /> },
  { id: "books", label: "Biblioteca de Autores", href: "/books", icon: <BookOpen className="w-4 h-4" /> },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="space-y-1" aria-label="Navegación principal">
      {NAV_ITEMS.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group ${
              active
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 border border-transparent"
            }`}
          >
            <span className={active ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-300"}>
              {item.icon}
            </span>
            {item.label}
            {active && <Circle className="w-1.5 h-1.5 ml-auto fill-emerald-400 text-emerald-400" />}
          </Link>
        );
      })}
    </nav>
  );
}

export default function SidebarNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Barra superior móvil */}
      <header className="md:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-zinc-950/95 backdrop-blur border-b border-zinc-900">
        <Link href="/" className="text-sm font-black tracking-tight text-zinc-100">
          Soccer <span className="text-emerald-500">Academy</span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú de navegación"
          className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Sidebar fijo — desktop */}
      <aside className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-64 md:border-r md:border-zinc-900 md:bg-zinc-950 md:px-4 md:py-8 md:z-30">
        <Link href="/" className="px-3 mb-8 block">
          <span className="text-lg font-black tracking-tight text-zinc-100">
            Soccer <span className="text-emerald-500">Academy</span>
          </span>
          <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-0.5">
            Biblioteca de Inteligencia
          </span>
        </Link>
        <NavLinks pathname={pathname} />
        <div className="mt-auto px-3 pt-6 border-t border-zinc-900">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            "The Goal is God"
          </p>
        </div>
      </aside>

      {/* Drawer móvil */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[80%] bg-zinc-950 border-r border-zinc-900 p-6 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-black tracking-tight text-zinc-100">
                Soccer <span className="text-emerald-500">Academy</span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú de navegación"
                className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <NavLinks pathname={pathname} onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}