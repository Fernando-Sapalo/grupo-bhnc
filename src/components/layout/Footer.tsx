import Link from "next/link";
import { navigation } from "@/constants/navigation";
import { contact } from "@/constants/contact";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <span className="text-lg font-semibold">Grupo BHNC</span>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Soluções industriais em Man-Power, Offshore, Onshore e Manutenção
              Industrial, com presença em Angola, África do Sul e Portugal.
            </p>
          </div>

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

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.address}</li>
            </ul>

            {(contact.social.linkedin || contact.social.facebook || contact.social.instagram) && (
              <div className="mt-4 flex gap-4">
                {contact.social.linkedin && (
                  <a href={contact.social.linkedin} className="text-sm text-white/70 hover:text-[#D4AF37]">
                    LinkedIn
                  </a>
                )}
                {contact.social.facebook && (
                  <a href={contact.social.facebook} className="text-sm text-white/70 hover:text-[#D4AF37]">
                    Facebook
                  </a>
                )}
                {contact.social.instagram && (
                  <a href={contact.social.instagram} className="text-sm text-white/70 hover:text-[#D4AF37]">
                    Instagram
                  </a>
                )}
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

