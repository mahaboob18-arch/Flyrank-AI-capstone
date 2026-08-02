import { z } from "zod";

export const NAME_MAX_LENGTH = 100;
export const EMAIL_MAX_LENGTH = 254;

export const settingsFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(NAME_MAX_LENGTH, `Name must be at most ${NAME_MAX_LENGTH} characters`),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(EMAIL_MAX_LENGTH, `Email must be at most ${EMAIL_MAX_LENGTH} characters`)
    .email("Enter a valid email address"),
  notifications: z.boolean(),
});

export type SettingsFormValues = z.infer<typeof settingsFormSchema>;

export const settingsFormDefaultValues: SettingsFormValues = {
  name: "",
  email: "",
  notifications: true,
};
