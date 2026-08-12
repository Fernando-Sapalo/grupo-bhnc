import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function LojaPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] px-8 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
          Nossa Loja
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Bem-vindo à Loja do Grupo BHNC
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
          A nossa loja disponibiliza uma ampla gama de produtos e soluções
          para responder às necessidades de empresas e particulares. Estamos
          localizados na Via Expressa, sentido Cacuaco, Rua do Depósito de
          Medicamento, Bairro Capalanga, onde a nossa equipa está pronta para
          o receber e prestar o apoio necessário.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/produtos"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-[#0B1220] transition-all duration-300 hover:bg-[#C9A431]"
          >
            Ver produtos
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <div className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-6 py-3.5 text-white/70">
            <MapPin size={18} className="text-[#D4AF37]" />
            Bairro Capalanga, Via Expressa
          </div>
        </div>
      </div>
    </main>
  );
}
