import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/schemas/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Dados inválidos.",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { nome, email, telefone, mensagem } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Website Grupo BHNC <website@grupobhnc.com>",
      to: ["comercial@grupobhnc.com"],
      replyTo: email,
      subject: `Novo pedido através do website — ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>Novo contacto através do website</h2>

          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone || "Não informado"}</p>

          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e5e7eb;" />

          <p><strong>Mensagem:</strong></p>
          <p>${mensagem.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Não foi possível enviar a mensagem." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Erro interno ao processar a mensagem." },
      { status: 500 }
    );
  }
}