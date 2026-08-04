import { z } from "zod";

// name unique check in database

export const skillSchema = z.object({
	name: z.string().min(1, "Le nom est requis"),
	description: z.string().min(1, "La description est requise"),
	iconKey: z.string().nullable(),
	isPublished: z.boolean(),
});

export type SkillValues = z.infer<typeof skillSchema>;
