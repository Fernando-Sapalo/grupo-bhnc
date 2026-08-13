import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { products } from "@/constants/products";

export default function ProdutosPage() {
  return (
    <main className="bg-[#0B1220] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 pb-20 pt-44">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Produtos
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Produtos e soluções
              <span className="block text-white/55">
                de marcas internacionais.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
              O Grupo BHNC oferece uma ampla gama de produtos destinados aos
              setores de óleo e gás, energia, indústria e construção,
              selecionados para responder às exigências de eficiência,
              segurança e produtividade das operações.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Qualidade garantida",
              description:
                "Produtos provenientes de fabricantes reconhecidos pelos seus padrões de qualidade e confiabilidade.",
            },
            {
              icon: Zap,
              title: "Tecnologia avançada",
              description:
                "Soluções que incorporam tecnologia e inovação para melhorar eficiência e produtividade.",
            },
            {
              icon: Headphones,
              title: "Suporte técnico",
              description:
                "Acompanhamento comercial e técnico para apoiar a seleção e utilização dos produtos.",
            },
            {
              icon: BadgeCheck,
              title: "Soluções competitivas",
              description:
                "Oferta orientada às necessidades específicas de empresas e operações industriais.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`py-9 lg:px-8 ${
                  index > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                <Icon
                  size={24}
                  strokeWidth={1.6}
                  className="text-[#D4AF37]"
                />

                <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Brands / product lines */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Linhas de produtos
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
              Marcas que comercializamos
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              Explore as principais linhas de produtos disponibilizadas pelo
              Grupo BHNC.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                className="
                  group
                  flex min-h-[190px]
                  flex-col
                  justify-between
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.025]
                  p-7
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/40
                  hover:bg-white/[0.04]
                "
              >
                <div>
                  {product.logo ? (
                    <div className="flex h-16 items-center rounded-xl bg-[#E8E8E8] px-5">
                      <div className="relative h-10 w-full max-w-[150px]">
                        <Image
                          src={product.logo}
                          alt={`${product.name} logo`}
                          fill
                          sizes="150px"
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-16 items-center">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                        Grupo BHNC
                      </span>
                    </div>
                  )}

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    Produtos {product.name}
                  </h3>
                </div>

                <Link
                  href="/contacto"
                  className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white/50 transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  Solicitar informação

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col gap-6 rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                Procura um produto específico?
              </h2>

              <p className="mt-2 text-white/55">
                Fale com a nossa equipa comercial para confirmar
                disponibilidade, especificações e condições de fornecimento.
              </p>
            </div>

            <Link
              href="/contacto"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1220] transition-colors duration-300 hover:bg-[#C9A431]"
            >
              Peça cotação

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}