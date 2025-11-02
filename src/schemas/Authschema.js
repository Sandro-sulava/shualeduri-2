import z from "zod";

export const schema = z.object({
  lastName: z
    .string()
    .min(3, "Minimum of 3 characthers for last name")
    .max(20, "Maximum of 20 charachters for last name"),
  firstName: z
    .string()
    .min(3, "Minimum of 3 characthers for Frist name")
    .max(20, "Maximum of 20 charachters for Frist name"),
  email: z
    .email()
    .min(3, "Minimum of 3 characthers for email")
    .max(25, "Maximum of 25 charachters for Email"),
  phoneNumber: z
    .string()
    .min(10, "Minimum of 10 characthers for Phone Number")
    .regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, "Invalid phone number format"),
  message: z
    .string()
    .min(10, "Minimum of 10 characthers for Message")
    .max(99, "Maximum of 99 charachters for Message"),
});
