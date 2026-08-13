import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { navigation } from "@/constants/navigation";
import { contact } from "@/constants/contact";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Empresa */}
<div>
  <Image
    src="/images/globe.png"
    alt="Grupo BHNC"
    width={80}
    height={80}
    className="h-20 w-auto"
  />

  <h3 className="mt-5 text-xl font-semibold text-white">
    Grupo BHNC
  </h3>

  <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
    Soluções industriais em Man-Power, Offshore, Onshore e
    Manutenção Industrial, com presença em Angola,
    África do Sul e Portugal.
  </p>
</div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Navegação
            </h3>

            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#D4AF37]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Contacto
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/65">
              <li>
                <a
                  href="tel:+244935046464"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  +244 935 046 464
                </a>
              </li>

              <li>
                <a
                  href="tel:+244923862714"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  +244 923 862 714
                </a>
              </li>

              <li>
                <a
                  href="tel:+244923329244"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  +244 923 329 244
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  {contact.email}
                </a>
              </li>

              <li className="max-w-xs leading-6">{contact.address}</li>
            </ul>

            {contact.social.whatsapp && (
              <div className="mt-8 flex items-center gap-3">
                <a
                  href={contact.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/[0.03]
                    text-white/60
                    transition-all duration-300
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]/10
                    hover:text-[#D4AF37]
                  "
                >
                  <MessageCircle size={18} strokeWidth={1.8} />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Grupo BHNC. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}