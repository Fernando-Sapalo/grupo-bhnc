import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { brands } from "@/constants/brands";

export default function PartnerLogos() {
  return (
    <section className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-24">
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Parceiros & Marcas
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Marcas internacionais.
              <span className="block text-white/55">
                Soluções para a indústria.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/60 lg:pb-1">
            Trabalhamos com fabricantes e marcas internacionais para fornecer
            equipamentos, materiais e soluções adequadas às exigências dos
            setores industrial, energético e de óleo e gás.
          </p>
        </div>

        {/* Brand grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
             className="
  flex
  min-h-[120px]
  items-center
  justify-center
  rounded-xl
  border
  border-black/10
  bg-[#E7E7E7]
  px-5
  py-5
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-[#D4AF37]/50
"
            >
      <div className="relative h-20 w-[72%]">
  <Image
    src={brand.logo}
    alt={brand.name}
    fill
    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
    className="object-contain"
  />
</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/produtos"
            className="
              group
              inline-flex items-center gap-3
              text-sm font-semibold
              text-white/60
              transition-colors duration-300
              hover:text-[#D4AF37]
            "
          >
            Ver todos os produtos

            <ArrowRight
              size={18}
              strokeWidth={1.8}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}