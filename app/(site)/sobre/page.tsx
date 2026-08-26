import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { company } from "@/constants/company";
import { services } from "@/constants/services";
import { sectors } from "@/constants/sectors";

export const metadata = {
  title: "Sobre nós",
  description:
    "Conheça o Grupo BHNC, empresa angolana fundada em 2013, com atuação nos setores industrial, energético e de óleo e gás.",
};

export default function SobrePage() {
  return (
    <main className="bg-[#0B1220] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-8 pb-20 pt-44 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Sobre o Grupo BHNC
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Experiência, qualidade
              <span className="block text-white/55">
                e compromisso com Angola.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
              {company.introduction}
            </p>

            <p className="mt-5 max-w-3xl leading-7 text-white/50">
              {company.description}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <Image
                src="/images/globe.png"
                alt="Símbolo institucional do Grupo BHNC"
                width={500}
                height={500}
                className="relative w-full max-w-[420px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company numbers */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-8 md:grid-cols-4">
          <div className="py-9">
            <p className="text-3xl font-bold text-[#D4AF37]">
              {company.founded}
            </p>
            <p className="mt-2 text-sm text-white/50">Ano de fundação</p>
          </div>

          <div className="border-l border-white/10 py-9 pl-8">
            <p className="text-3xl font-bold text-[#D4AF37]">10+</p>
            <p className="mt-2 text-sm text-white/50">
              Anos de experiência
            </p>
          </div>

          <div className="md:border-l md:border-white/10 md:py-9 md:pl-8">
            <p className="text-3xl font-bold text-[#D4AF37]">
              {company.presence.length}
            </p>
            <p className="mt-2 text-sm text-white/50">
              Países de presença
            </p>
          </div>

          <div className="border-l border-white/10 py-9 pl-8">
            <p className="text-3xl font-bold text-[#D4AF37]">
              {company.partners.length}+
            </p>
            <p className="mt-2 text-sm text-white/50">
              Marcas e fabricantes
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 md:p-10">
              <Globe2
                size={28}
                strokeWidth={1.5}
                className="text-[#D4AF37]"
              />

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Missão
              </p>

              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Criar valor através de produtos e serviços de qualidade.
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                {company.mission}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 md:p-10">
              <Sparkles
                size={28}
                strokeWidth={1.5}
                className="text-[#D4AF37]"
              />

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Visão
              </p>

              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Ser uma referência no mercado industrial angolano.
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                {company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Os nossos valores
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
              Princípios que orientam
              <span className="block text-white/55">
                cada relação e cada projeto.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {company.values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                {index === 0 && (
                  <ShieldCheck
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#D4AF37]"
                  />
                )}

                {index === 1 && (
                  <Sparkles
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#D4AF37]"
                  />
                )}

                {index === 2 && (
                  <Users
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#D4AF37]"
                  />
                )}

                {index === 3 && (
                  <Check
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#D4AF37]"
                  />
                )}

                <h3 className="mt-6 text-lg font-semibold">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-8 py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Porquê escolher o Grupo BHNC
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
              Uma equipa preparada para
              <span className="block text-white/55">
                responder às suas necessidades.
              </span>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {company.whyChooseUs.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37]">
                  <Check size={14} strokeWidth={2} />
                </span>

                <p className="text-sm font-medium text-white/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="flex items-end justify-between gap-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Áreas de atuação
              </span>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Soluções industriais integradas
              </h2>
            </div>

            <Link
              href="/servicos"
              className="hidden text-sm font-semibold text-white/55 transition-colors hover:text-[#D4AF37] md:block"
            >
              Ver todos os serviços →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40"
              >
                <h3 className="font-semibold text-[#D4AF37]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {service.description}
                </p>

                <ArrowRight
                  size={18}
                  strokeWidth={1.7}
                  className="mt-7 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Setores que servimos
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Experiência em diferentes
              <span className="block text-white/55">
                ambientes industriais.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="bg-[#0F1729] p-7"
              >
                <h3 className="font-semibold">
                  {sector.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Presença
              </span>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Angola, África do Sul
                <span className="block text-white/55">
                  e Portugal.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {company.presence.map((location) => (
  <span
    key={location.country}
    className="
      inline-flex items-center gap-3
      rounded-full
      border border-white/10
      bg-white/[0.025]
      px-5 py-3
      text-sm text-white/70
    "
  >
    <span className="text-lg leading-none">
      {location.flag}
    </span>

    <span>{location.country}</span>
  </span>
))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1440px] px-8 py-24">
          <div className="flex flex-col gap-8 rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Precisa de uma solução industrial?
              </h2>

              <p className="mt-3 max-w-2xl text-white/55">
                Fale com a nossa equipa e conheça as soluções que o Grupo BHNC
                pode disponibilizar para a sua operação.
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