"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o fundo da navbar ao rolar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavActive = scrolled;

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* CAMADA DE FUNDO ACRÍLICO (A EXPANSÃO FLUIDA) */}
      <div
        className={cn(
          "absolute inset-0 origin-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-white/10 bg-white/70 opacity-100 shadow-lg backdrop-blur-xl dark:bg-zinc-900/70"
            : "h-20 opacity-0",
        )}
      />

      <div className="relative container mx-auto h-full px-4">
        {/* BARRA SUPERIOR (HEADER) */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group z-[70] flex items-center gap-3"
          >
            <div className="relative">
              <Image
                src={
                  isNavActive
                    ? "/images/logo/logo-verde.png"
                    : "/images/logo/logo-branca.png"
                }
                width={800}
                height={800}
                className="h-12 w-24 object-contain transition-all duration-500 group-hover:-rotate-1"
                alt="Logo da Marcha da Maconha"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Oculto */}
          {/* <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group relative rounded-lg px-4 py-2 text-sm font-bold tracking-wider transition-all hover:text-emerald-600",
                  isNavActive
                    ? "text-zinc-700 dark:text-zinc-300"
                    : "text-white",
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 rounded-lg bg-emerald-500/0 opacity-0 transition-all group-hover:bg-emerald-500/10 group-hover:opacity-100" />
              </Link>
            ))}
          </div> */}

          {/* Desktop Navigation Links & CTA */}
          <div className="flex items-center gap-6 md:flex">
            {/* Loja Link */}
            <Link
              href="/loja"
              className={cn(
                "text-sm font-bold tracking-wider transition-colors",
                isNavActive
                  ? "text-zinc-700 hover:text-emerald-600"
                  : "text-white hover:text-emerald-300",
              )}
            >
              Loja
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}
