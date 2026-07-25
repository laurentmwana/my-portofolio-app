import { z } from "zod";

export const postCommentSchema = z.object({
	username: z.string().min(1, "L'username est requis"),
	content: z.string().min(1, "Le contenu est requis"),
});

export type PostCommentValues = z.infer<typeof postCommentSchema>;
