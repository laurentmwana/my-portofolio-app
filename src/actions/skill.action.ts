import { createServerFn } from "@tanstack/react-start";
import { prisma } from "#/lib/prisma";

export const findLatestPublishedSkillsFn = createServerFn({ method: "GET" })
	.validator((data: { limit?: number }) => data)
	.handler(async ({ data = { limit: 10 } }) => {
		return await prisma.skill.findMany({
			where: { isPublished: true },
			orderBy: { updatedAt: "desc" },
			take: data.limit,
		});
	});

export const findSkillByIdAndSlug = createServerFn({ method: "GET" })
	.validator((data: { slug: string; id: string }) => data)
	.handler(async ({ data }) => {
		return await prisma.skill.findFirstOrThrow({
			where: { isPublished: true, slug: data.slug, id: data.id },
		});
	});

export const findSkillPublished = createServerFn({ method: "GET" }).handler(
	async () => {
		return await prisma.skill.findMany({
			where: { isPublished: true },
		});
	},
);
