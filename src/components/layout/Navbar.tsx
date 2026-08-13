"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1220]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center px-4 sm:px-6 lg:h-28 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group shrink-0"
          aria-label="Grupo BHNC - Página inicial"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              relative
              h-[62px]
              w-[160px]
              overflow-hidden
              rounded-l-[34px]
              rounded-r-[10px]
              border border-white/10
              bg-[#CFCFCF]
              transition-all
              duration-300
              group-hover:border-[#D4AF37]/50
              sm:h-[68px]
              sm:w-[176px]
              lg:h-[85px]
              lg:w-[220px]
              lg:rounded-l-[46px]
              lg:rounded-r-[12px]
            "
          >
            <Image
              src="/logos/logo-navbar-cropped.png"
              alt="Grupo BHNC — Comércio Geral e Prestação de Serviços, Lda"
              fill
              priority
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 220px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-7 xl:gap-9">
            {navigation.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    py-3
                    text-[14px]
                    font-medium
                    transition-colors
                    duration-300
                    xl:text-[15px]
                    ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-10 bg-[#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contacto"
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              bg-[#D4AF37]
              px-5
              py-3
              text-[14px]
              font-semibold
              text-[#0B1220]
              shadow-[0_6px_20px_rgba(212,175,55,0.15)]
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:bg-[#C9A431]
              hover:shadow-[0_8px_28px_rgba(212,175,55,0.25)]
              xl:px-7
              xl:text-[15px]
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
                border border-[#0B1220]/20
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

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          className="
            ml-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border border-white/10
            bg-white/[0.03]
            text-white
            transition-colors
            hover:border-[#D4AF37]/60
            hover:text-[#D4AF37]
            lg:hidden
          "
        >
          {isOpen ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <Menu size={22} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1220] lg:hidden">
          <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6">
            <div className="flex flex-col">
              {navigation.map((item) => {
                const isActive = isActiveLink(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      border-b
                      border-white/10
                      py-4
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "text-[#D4AF37]"
                          : "text-white/75 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="
                group
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#D4AF37]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#0B1220]
                transition-colors
                duration-300
                hover:bg-[#C9A431]
              "
            >
              Peça cotação

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}