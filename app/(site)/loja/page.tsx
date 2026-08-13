import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Store,
  PackageCheck,
  Headphones,
} from "lucide-react";

export default function LojaPage() {
  return (
    <main className="bg-[#0B1220] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 pb-20 pt-44">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Nossa Loja
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Bem-vindo à Loja
              <span className="block text-white/55">
                do Grupo BHNC.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
              A nossa loja oferece uma ampla gama de produtos e soluções para
              responder às necessidades de empresas e particulares, com
              acompanhamento comercial e apoio técnico especializado.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/produtos"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1220] transition-colors duration-300 hover:bg-[#C9A431]"
              >
                Ver produtos

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Store features */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-px bg-white/10 px-8 py-24 lg:grid-cols-3">
          {[
            {
              icon: Store,
              title: "Atendimento presencial",
              description:
                "Uma equipa preparada para apoiar empresas e particulares na escolha das soluções adequadas.",
            },
            {
              icon: PackageCheck,
              title: "Ampla gama de produtos",
              description:
                "Produtos e equipamentos de marcas internacionais para diferentes necessidades industriais e comerciais.",
            },
            {
              icon: Headphones,
              title: "Apoio comercial",
              description:
                "Suporte na seleção de produtos, especificações, disponibilidade e processo de fornecimento.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#0F1729] p-8"
              >
                <Icon
                  size={26}
                  strokeWidth={1.6}
                  className="text-[#D4AF37]"
                />

                <h2 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Location */}
      <section>
        <div className="mx-auto grid max-w-[1440px] gap-12 px-8 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Onde estamos
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
              Visite a Loja do Grupo BHNC
            </h2>

            <div className="mt-8 flex gap-4">
              <MapPin
                size={24}
                strokeWidth={1.6}
                className="mt-1 shrink-0 text-[#D4AF37]"
              />

              <div>
                <p className="font-semibold text-white">
                  Via Expressa, sentido Cacuaco
                </p>

                <p className="mt-2 leading-7 text-white/55">
                  Rua do Depósito de Medicamento
                  <br />
                  Bairro Capalanga
                  <br />
                  Luanda, Angola
                </p>
              </div>
            </div>

            <Link
              href="/contacto"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-white/65 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              Pedir informações

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-10 text-center">
            <div>
              <MapPin
                size={36}
                strokeWidth={1.4}
                className="mx-auto text-[#D4AF37]"
              />

              <p className="mt-6 text-lg font-semibold">
                Localização da loja
              </p>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/50">
                Aqui podemos integrar posteriormente um mapa, fotografia da
                fachada ou imagens reais do interior da loja.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}