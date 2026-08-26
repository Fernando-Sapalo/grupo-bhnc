"use client";

import GoogleMap from "@/components/sections/contact/GoogleMap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/schemas/contact-schema";

import { contact } from "@/constants/contact";

export default function ContactoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // O envio real por e-mail será implementado posteriormente.
    console.log("Pedido de contacto:", data);

    await new Promise((resolve) => setTimeout(resolve, 500));

    reset();
  }

  return (
    <main className="bg-[#0B1220] text-white">
      {/* Hero / Introdução */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32">
        <span className="text-sm font-medium tracking-wide text-[#D4AF37]">
          CONTACTO
        </span>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Fale connosco
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Descreva o seu projeto ou necessidade e entre em contacto com a nossa
          equipa comercial.
        </p>
      </section>

      {/* Formulário + Informações */}
      <section className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 px-6 py-16 md:grid-cols-2">
        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          {/* Nome */}
          <div>
            <label
              htmlFor="nome"
              className="block text-sm text-white/70"
            >
              Nome *
            </label>

            <input
              id="nome"
              {...register("nome")}
              className="
                mt-2
                w-full
                rounded-md
                border
                border-white/20
                bg-white/5
                px-4
                py-3
                text-white
                placeholder:text-white/40
                focus:border-[#D4AF37]
                focus:outline-none
              "
              placeholder="O seu nome"
            />

            {errors.nome && (
              <p className="mt-1 text-sm text-red-400">
                {errors.nome.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-white/70"
            >
              E-mail *
            </label>

            <input
              id="email"
              type="email"
              {...register("email")}
              className="
                mt-2
                w-full
                rounded-md
                border
                border-white/20
                bg-white/5
                px-4
                py-3
                text-white
                placeholder:text-white/40
                focus:border-[#D4AF37]
                focus:outline-none
              "
              placeholder="seu@email.com"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label
              htmlFor="telefone"
              className="block text-sm text-white/70"
            >
              Telefone
            </label>

            <input
              id="telefone"
              type="tel"
              {...register("telefone")}
              className="
                mt-2
                w-full
                rounded-md
                border
                border-white/20
                bg-white/5
                px-4
                py-3
                text-white
                placeholder:text-white/40
                focus:border-[#D4AF37]
                focus:outline-none
              "
              placeholder="Opcional"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm text-white/70"
            >
              Mensagem *
            </label>

            <textarea
              id="mensagem"
              {...register("mensagem")}
              rows={5}
              className="
                mt-2
                w-full
                rounded-md
                border
                border-white/20
                bg-white/5
                px-4
                py-3
                text-white
                placeholder:text-white/40
                focus:border-[#D4AF37]
                focus:outline-none
              "
              placeholder="Descreva o seu projeto ou necessidade"
            />

            {errors.mensagem && (
              <p className="mt-1 text-sm text-red-400">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              rounded-md
              bg-[#D4AF37]
              px-8
              py-3
              font-medium
              text-[#0B1220]
              transition-opacity
              hover:opacity-90
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {isSubmitting ? "A processar..." : "Registar pedido"}
          </button>

          {isSubmitSuccessful && (
            <p className="text-sm text-green-400">
              Pedido registado. Para contacto imediato, utilize o WhatsApp ou
              telefone.
            </p>
          )}
        </form>

        {/* Informações de contacto */}
        <div className="space-y-8">
          {/* Telefone */}
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Telefone
            </h2>

            <div className="mt-2 space-y-1">
              <p className="text-white/80">
                {contact.phone}
              </p>

              <p className="text-white/80">
                {contact.phoneSecondary}
              </p>

              <p className="text-white/80">
                {contact.phoneThird}
              </p>
            </div>
          </div>

          {/* Email */}
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              E-mail
            </h2>

            <p className="mt-2 text-white/80">
              {contact.email}
            </p>
          </div>

          {/* Morada */}
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Morada
            </h2>

            <p className="mt-2 max-w-md text-white/80">
              {contact.address}
            </p>
          </div>

          {/* Horário */}
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Horário
            </h2>

            <p className="mt-2 text-white/80">
              {contact.hours}
            </p>
          </div>

          {/* WhatsApp */}
          {contact.social.whatsapp && (
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
                WhatsApp
              </h2>

              <a
                href={contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3
                  inline-flex
                  items-center
                  rounded-md
                  border
                  border-[#D4AF37]/40
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-[#D4AF37]
                  transition-colors
                  hover:border-[#D4AF37]
                  hover:bg-[#D4AF37]
                  hover:text-[#0B1220]
                "
              >
                Falar pelo WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Localização */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Localização
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
            A nossa localização
          </h2>

          <p className="mb-8 mt-4 max-w-2xl text-white/60">
            Visite as instalações do Grupo BHNC em Luanda.
          </p>

          <GoogleMap />
        </div>
      </section>
    </main>
  );
}