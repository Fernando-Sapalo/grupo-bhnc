import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    brand: "CAT",
    category: "Equipamentos industriais",
  },
  {
    brand: "Shell",
    category: "Lubrificantes e fluidos",
  },
  {
    brand: "Siemens",
    category: "Automação e controlo",
  },
  {
    brand: "Atlas Copco",
    category: "Compressores e equipamentos",
  },
  {
    brand: "3M",
    category: "Soluções industriais",
  },
  {
    brand: "Parker",
    category: "Hidráulica e controlo",
  },
];

export default function ProductsPreview() {
  return (
    <section className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Produtos
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Soluções de marcas
              <span className="block text-white/55">
                reconhecidas mundialmente.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/60 lg:pb-1">
            O Grupo BHNC comercializa uma ampla gama de produtos para os
            setores de óleo e gás, energia, indústria e construção, com foco
            em qualidade, tecnologia, suporte técnico e competitividade.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((item) => (
            <div
              key={item.brand}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D4AF37]/40
                hover:bg-white/[0.04]
              "
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                {item.category}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                {item.brand}
              </h3>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-white/45">
                  Ver linha de produtos
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/produtos"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-white/65
              transition-colors
              duration-300
              hover:text-[#D4AF37]
            "
          >
            Ver catálogo completo

            <ArrowRight
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}