import Image from "next/image";
import Link from "next/link";
import { hero } from "@/constants/hero";
import { company } from "@/constants/company";

export default function Hero() {
  return (
    <section className="bg-[#0B1220] pt-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-medium tracking-wide text-[#D4AF37]">
            {hero.badge}
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {hero.title.map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">{hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="rounded-md bg-[#D4AF37] px-6 py-3 font-medium text-[#0B1220] transition-opacity hover:opacity-90"
            >
              {hero.primaryButton}
            </Link>
            <Link
              href="/servicos"
              className="rounded-md border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              {hero.secondaryButton}
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/40">
            Desde {company.founded} · Presente em {company.presence.join(", ")}
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
          <Image
            src="/images/hero-manpower.jpg"
  alt="Técnico do Grupo BHNC a inspecionar equipamento industrial"
  fill
  className="object-cover"
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[#0B1220]/20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

