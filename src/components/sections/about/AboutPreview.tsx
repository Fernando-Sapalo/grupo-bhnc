

import Image from "next/image";
import Link from "next/link";

import { company } from "@/constants/company";

export default function AboutPreview() {
  return (
    <section className="border-t border-white/10 bg-[#0B1220] py-24 text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-8 lg:grid-cols-2">
        {/* Globe */}

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <Image
              src="/images/globe.png"
              alt="Grupo BHNC"
              width={520}
              height={520}
              className="relative w-full max-w-[480px]"
            />
          </div>
        </div>

        {/* Content */}

        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="text-sm font-semibold tracking-[0.16em] text-[#D4AF37]">
              SOBRE O GRUPO BHNC
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Experiência, qualidade e soluções industriais.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            {company.mission}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Man-Power",
              "Offshore",
              "Onshore",
              "Manutenção Industrial",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          <Link
            href="/sobre"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-[#D4AF37]
              px-7
              py-3
              font-semibold
              text-[#D4AF37]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-[#0B1220]
            "
          >
            Conhecer a empresa →

          </Link>
        </div>
      </div>
    </section>
  );
}