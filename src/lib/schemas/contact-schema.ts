import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().trim().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().trim().email("Introduza um e-mail válido"),
  telefone: z.string().trim().optional(),
  mensagem: z.string().trim().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;