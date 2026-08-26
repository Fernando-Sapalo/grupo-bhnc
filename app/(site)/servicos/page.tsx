import { services } from "@/constants/services";
import { sectors } from "@/constants/sectors";

export const metadata = {
  title: "Serviços",
  description:
    "Man-Power, Offshore, Onshore e Manutenção Industrial — soluções especializadas para os setores de óleo e gás, energia e indústria em Angola.",
};

export default function ServicosPage() {
  return (
    <main className="bg-[#0B1220] text-white">
      {/* Abertura */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <span className="text-sm font-medium tracking-wide text-[#D4AF37]">
          NOSSOS SERVIÇOS
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Quatro áreas, um único padrão de qualidade
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Da mão de obra especializada à manutenção industrial, cada serviço segue os
          mesmos processos de controlo de qualidade e segurança que exigimos a nós
          próprios.
        </p>
      </section>

      {/* Grelha de serviços */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group rounded-lg border border-white/10 p-8 transition-colors hover:border-[#D4AF37]"
            >
              <h2 className="text-xl font-semibold text-[#D4AF37]">
                {service.title}
              </h2>
              <p className="mt-3 text-white/70">{service.description}</p>
              <span className="mt-4 inline-block text-sm text-white/50 transition-colors group-hover:text-[#D4AF37]">
                Saber mais →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Setores servidos */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Setores que servimos</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div key={sector.name} className="rounded-lg bg-white/5 p-6">
              <h3 className="font-medium">{sector.name}</h3>
              <p className="mt-2 text-sm text-white/60">{sector.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold">Precisa de um serviço específico?</h2>
        <p className="mt-4 text-white/70">
          Fale com a nossa equipa comercial e descreva o seu projeto.
        </p>
        
        <a
          href="/contacto"
          className="mt-8 inline-block rounded-md bg-[#D4AF37] px-8 py-3 font-medium text-[#0B1220] hover:opacity-90"
        >
          Peça cotação
        </a>
      </section>
    </main>
  );
}