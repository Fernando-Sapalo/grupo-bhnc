"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact-schema";
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
    // TODO: ligar a um endpoint real (API route, e-mail, ou serviço externo)
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 500));
    reset();
  }

  return (
    <main className="bg-[#0B1220] text-white">
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <span className="text-sm font-medium tracking-wide text-[#D4AF37]">
          CONTACTO
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Fale connosco</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Descreva o seu projeto e a nossa equipa comercial entra em contacto em até 24 horas úteis.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10 grid gap-12 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div>
            <label htmlFor="nome" className="block text-sm text-white/70">
              Nome *
            </label>
            <input
              id="nome"
              {...register("nome")}
              className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none"
              placeholder="O seu nome"
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-400">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-white/70">
              E-mail *
            </label>
            <input
              id="email"
              {...register("email")}
              className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm text-white/70">
              Telefone
            </label>
            <input
              id="telefone"
              {...register("telefone")}
              className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none"
              placeholder="Opcional"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm text-white/70">
              Mensagem *
            </label>
            <textarea
              id="mensagem"
              {...register("mensagem")}
              rows={5}
              className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none"
              placeholder="Descreva o seu projeto ou necessidade"
            />
            {errors.mensagem && (
              <p className="mt-1 text-sm text-red-400">{errors.mensagem.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-[#D4AF37] px-8 py-3 font-medium text-[#0B1220] hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "A enviar..." : "Enviar mensagem"}
          </button>

          {isSubmitSuccessful && (
            <p className="text-sm text-green-400">
              Mensagem enviada com sucesso. Entraremos em contacto em breve.
            </p>
          )}
        </form>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Telefone
            </h2>
            <p className="mt-2 text-white/80">{contact.phone}</p>
            <p className="text-white/80">{contact.phoneSecondary}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              E-mail
            </h2>
            <p className="mt-2 text-white/80">{contact.email}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Morada
            </h2>
            <p className="mt-2 text-white/80">{contact.address}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-white/50">
              Horário
            </h2>
            <p className="mt-2 text-white/80">{contact.hours}</p>
          </div>
        </div>
      </section>
    </main>
  );
}