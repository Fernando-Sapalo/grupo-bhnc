"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1220]/95 backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-[1440px] items-center px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group shrink-0"
          aria-label="Grupo BHNC - Página inicial"
        >
          <div
            className="
              relative
              h-[85px]
              w-[220px]
              overflow-hidden
              rounded-l-[46px]
              rounded-r-[12px]
              border
              border-white/10
              bg-[#CFCFCF]
              transition-all
              duration-300
              group-hover:border-[#D4AF37]/50
            "
          >
            <Image
              src="/logos/logo-navbar-cropped.png"
              alt="Grupo BHNC — Comércio Geral e Prestação de Serviços, Lda"
              fill
              priority
              sizes="340px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation + CTA */}
        <div className="ml-auto flex items-center gap-10">
          {/* Navigation */}
          <div className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    py-3
                    text-[15px]
                    font-medium
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0
                        right-0
                        mx-auto
                        h-[2px]
                        w-10
                        bg-[#D4AF37]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
<Link
  href="/contacto"
  className="
    group
    hidden
    items-center
    gap-4
    rounded-xl
    bg-[#D4AF37]
    px-7
    py-3.5
    text-[15px]
    font-semibold
    text-[#0B1220]
    shadow-[0_6px_20px_rgba(212,175,55,0.15)]
    transition-all
    duration-300
    hover:-translate-y-[1px]
    hover:bg-[#C9A431]
    hover:shadow-[0_8px_28px_rgba(212,175,55,0.25)]
    lg:flex
  "
>
  <span>Peça cotação</span>

  <span
    className="
      flex
      h-7
      w-7
      items-center
      justify-center
      rounded-full
      border
      border-[#0B1220]/20
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:border-[#0B1220]/40
    "
  >
    <ArrowRight size={15} strokeWidth={2} />
  </span>
</Link>
      
        </div>
      </div>
    </nav>
  );
}