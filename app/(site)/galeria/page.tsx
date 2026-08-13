import Image from "next/image";

import { gallery } from "@/constants/gallery";

export default function GaleriaPage() {
  return (
    <main className="bg-[#0B1220] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-8 pb-20 pt-44">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Galeria
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              O Grupo BHNC
              <span className="block text-white/55">
                em operação.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
              Conheça através de imagens alguns dos nossos serviços, operações,
              instalações, produtos e capacidade de fornecimento.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery sections */}
      <div className="mx-auto max-w-[1440px] px-8 py-24">
        <div className="space-y-24">
          {gallery.map((section) => (
            <section key={section.id}>
              <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
               <div className="flex items-center gap-4">
  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
    {section.title}
  </span>

  <span className="h-px w-10 bg-[#D4AF37]/60" />
</div>

                <p className="max-w-xl text-sm leading-6 text-white/50">
                  {section.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.images.map((image, index) => (
                  <div
                    key={image}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border border-white/10
                      bg-[#0F1729]
                      ${
                        index === 0 && section.images.length > 2
                          ? "sm:col-span-2 lg:col-span-2"
                          : ""
                      }
                    `}
                  >
                    <div
                      className={
                        index === 0 && section.images.length > 2
                          ? "relative aspect-[16/9]"
                          : "relative aspect-[4/3]"
                      }
                    >
                      <Image
  src={image}
  alt={`${section.title} - imagem ${index + 1}`}
  fill
  loading={
    section.id === "manpower" && index === 0
      ? "eager"
      : "lazy"
  }
  fetchPriority={
    section.id === "manpower" && index === 0
      ? "high"
      : "auto"
  }
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
/>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/45 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-35" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}