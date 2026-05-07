"use client";

import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-white text-xl md:text-2xl font-semibold tracking-wide"
        >
          Casa Apícola Los Cerezos
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-8 text-white text-sm font-medium">

          <Link href="/">
            Inicio
          </Link>

          <Link href="/consumo">
            Consumo
          </Link>

          <Link href="/apicultores">
            Apicultores
          </Link>

          <Link href="/servicios">
            Servicios
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#1d160f] border-t border-white/10">

          <nav className="flex flex-col p-6 gap-6 text-white">

            <Link
              href="/"
              onClick={() => setOpen(false)}
            >
              Inicio
            </Link>

            <Link
              href="/consumo"
              onClick={() => setOpen(false)}
            >
              Consumo
            </Link>

            <Link
              href="/apicultores"
              onClick={() => setOpen(false)}
            >
              Apicultores
            </Link>

            <Link
              href="/servicios"
              onClick={() => setOpen(false)}
            >
              Servicios
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}