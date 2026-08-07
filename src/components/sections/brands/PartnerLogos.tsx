import { brands } from "@/constants/brands";

export default function PartnerLogos() {
  return (
    <section className="border-t border-white/10 bg-[#0B1220] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-sm font-medium uppercase tracking-wide text-white/50">
          Marcas que representamos
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center rounded-md border border-white/10 px-4 py-6 text-center text-sm text-white/70 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}