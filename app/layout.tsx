import type { Metadata } from "next";
import "./globals.css";
import SidebarNav from "@/components/soccer/SidebarNav";

export const metadata: Metadata = {
  title: "Soccer Academy - Library",
  description: "Búnker táctico estático para el jugador profesional moderno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-zinc-950 text-zinc-50 antialiased selection:bg-emerald-500 selection:text-zinc-950">
        <SidebarNav />
        <div className="md:pl-64">{children}</div>
      </body>
    </html>
  );
}