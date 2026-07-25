import { z } from "zod";

export const profileSchema = z.object({
	name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
	email: z.string().email("Email invalide"),
});

export type ProfileValues = z.infer<typeof profileSchema>;

export const changePasswordSchema = z
	.object({
		currentPassword: z.string().min(1, "Le mot de passe actuel est requis"),
		newPassword: z
			.string()
			.min(8, "Le mot de passe doit contenir au moins 8 caractères"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Les mots de passe ne correspondent pas",
		path: ["confirmPassword"],
	});

export type ChangePasswordValues = z.infer<typeof changePasswordSchema>;
