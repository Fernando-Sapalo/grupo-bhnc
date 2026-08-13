import Link from "next/link";
import { ArrowRight, MapPin, Store } from "lucide-react";

export default function StorePreview() {
  return (
    <section className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Nossa Loja
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Produtos e soluções
              <span className="block text-white/55">
                mais perto de si.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              A Loja do Grupo BHNC disponibiliza produtos, equipamentos e
              soluções para empresas e particulares, com acompanhamento
              comercial e suporte técnico especializado.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/loja"
                className="
                  group
                  inline-flex items-center gap-3
                  rounded-xl
                  bg-[#D4AF37]
                  px-7 py-3.5
                  text-sm font-semibold
                  text-[#0B1220]
                  transition-all duration-300
                  hover:bg-[#C9A431]
                "
              >
                Conhecer a loja

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contacto"
                className="
                  inline-flex items-center gap-3
                  rounded-xl
                  border border-white/15
                  px-7 py-3.5
                  text-sm font-semibold
                  text-white/80
                  transition-all duration-300
                  hover:border-[#D4AF37]/60
                  hover:text-[#D4AF37]
                "
              >
                Contactar
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <Store
                size={26}
                strokeWidth={1.6}
                className="text-[#D4AF37]"
              />

              <h3 className="mt-6 text-lg font-semibold">
                Atendimento presencial
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Uma equipa preparada para apoiar empresas e particulares na
                seleção de produtos e soluções adequadas às suas necessidades.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <MapPin
                size={26}
                strokeWidth={1.6}
                className="text-[#D4AF37]"
              />

              <h3 className="mt-6 text-lg font-semibold">
                Onde estamos
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Via Expressa, sentido Cacuaco, Rua do Depósito de Medicamento,
                Bairro Capalanga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}