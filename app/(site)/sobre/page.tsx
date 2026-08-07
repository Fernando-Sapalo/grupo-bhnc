import { company } from "@/constants/company";
import { services } from "@/constants/services";
import { sectors } from "@/constants/sectors";

export const metadata = {
  title: "Sobre nós | Grupo BHNC",
  description:
    "Conheça o Grupo BHNC — mais de 10 anos a fornecer soluções industriais em Angola, África do Sul e Portugal.",
};

export default function SobrePage() {
  return (
    <main className="bg-[#0B1220] text-white">
      {/* Abertura */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <span className="text-sm font-medium tracking-wide text-[#D4AF37]">
          SOBRE NÓS
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Grupo BHNC
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Fundado em {company.founded}, o Grupo BHNC fornece mão de obra especializada,
          serviços offshore e onshore, e manutenção industrial, com presença em{" "}
          {company.presence.join(", ")}.
        </p>
      </section>

      {/* Missão e Visão */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-[#D4AF37]">Missão</h2>
            <p className="mt-4 text-white/70">{company.mission}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#D4AF37]">Visão</h2>
            <p className="mt-4 text-white/70">{company.vision}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {company.values.map((value) => (
            <span
              key={value}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80"
            >
              {value}
            </span>
          ))}
        </div>
      </section>


{/* Serviços */}
<section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
  <h2 className="text-2xl font-semibold">Áreas de atuação</h2>
  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {services.map((service) => (
      <a
        key={service.title}
        href={service.href}
        className="rounded-lg border border-white/10 p-6 transition-colors hover:border-[#D4AF37]"
      >
        <h3 className="font-medium text-[#D4AF37]">{service.title}</h3>
        <p className="mt-2 text-sm text-white/60">{service.description}</p>
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



      {/* Localização */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Onde estamos</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Via Expressa, sentido Cacuaco, Rua do Depósito de Medicamento, Bairro Capalanga.
        </p>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold">Precisa de uma solução industrial?</h2>
        <p className="mt-4 text-white/70">
          Fale com a nossa equipa comercial e peça uma cotação sem compromisso.
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