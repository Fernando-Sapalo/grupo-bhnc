import { notFound } from "next/navigation";
import { servicesDetail } from "@/constants/services-detail";

export function generateStaticParams() {
  return servicesDetail.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesDetail.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesDetail.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-[#0B1220] text-white">
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <span className="text-sm font-medium tracking-wide text-[#D4AF37]">
          SERVIÇOS
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">{service.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">{service.summary}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <p className="max-w-3xl text-white/70">{service.description}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold">O que incluímos</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {service.highlights.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-white/10 px-6 py-4 text-white/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Setores que servimos</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {service.sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80"
            >
              {sector}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold">Precisa deste serviço?</h2>
        <p className="mt-4 text-white/70">Peça uma cotação sem compromisso.</p>
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
