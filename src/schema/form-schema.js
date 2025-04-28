import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." })
    .max(50, { message: "Le nom ne doit pas dépasser 50 caractères." }),
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse email valide." }),
  phone: z.string().length(10, {
    message: "Veuillez entrer un numéro de téléphone valide.",
  }),
  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères." })
    .max(500, { message: "Le message ne doit pas dépasser 500 caractères." }),
});
