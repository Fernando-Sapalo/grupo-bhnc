





"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0B1220]/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/globe-icon.png"
            alt="Grupo BHNC"
            width={32}
            height={32}
          />
          <span className="text-lg font-semibold text-white">Grupo BHNC</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white transition-colors hover:text-[#D4AF37]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contacto"
          className="hidden rounded-md bg-[#D4AF37] px-4 py-2 text-sm font-medium text-[#0B1220] transition-opacity hover:opacity-90 md:block"
        >
          Peça cotação
        </Link>
      </div>
    </nav>
  );
}



