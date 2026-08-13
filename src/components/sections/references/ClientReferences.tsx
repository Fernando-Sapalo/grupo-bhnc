const references = [
  "BP Angola",
  "ENI Angola",
  "SLB",
  "Aker Solutions",
  "Baker Hughes",
  "SBM Offshore",
  "Halliburton",
  "Efacec",
];

export default function ClientReferences() {
  return (
    <section className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Clientes & Referências
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Experiência comprovada
            <span className="block text-white/55">
              junto de empresas de referência.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            Ao longo da sua atividade, o Grupo BHNC tem desenvolvido relações
            comerciais e prestado serviços a organizações de referência nos
            setores industrial, energético e de óleo e gás.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
          {references.map((company) => (
            <div
              key={company}
              className="flex min-h-28 items-center justify-center bg-[#0F1729] px-6 py-7 text-center transition-colors duration-300 hover:bg-white/[0.05]"
            >
              <span className="text-sm font-semibold tracking-wide text-white/65 transition-colors duration-300 hover:text-[#D4AF37]">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}