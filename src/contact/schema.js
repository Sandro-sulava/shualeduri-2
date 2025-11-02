import { z } from "zod";

export const ContactSchema = z.object({
  lastName: z.string().min(2, "Last name is too short"),
  firstName: z.string().min(2, "First name is too short"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .optional()
    .refine(
      (v) => !v || /^(\+?[0-9\s()-]{7,16})$/.test(v),
      "Enter a valid phone number"
    ),
  message: z.string().min(10, "Tell us a bit more (10+ chars)").max(1000),
});
