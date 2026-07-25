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

export const findPaginatedSkillsPublished = createServerFn({
	method: "GET",
})
	.validator(
		(data: {
			limit?: number;
			page?: number;
			offset?: number;
			orderBy?: string;
			direction?: string;
		}) => data,
	)
	.handler(
		async ({
			data = {
				limit: 10,
				page: 1,
				offset: 0,
				orderBy: "createdAt",
				direction: "desc",
			},
		}) => {
			const [count, items] = await prisma.$transaction([
				prisma.skill.count({ where: { isPublished: true } }),
				prisma.skill.findMany({
					where: { isPublished: true },
					orderBy: {
						[data.orderBy as keyof typeof prisma.skill]: data.direction,
					},
					take: data.limit,
					skip: data.offset,
				}),
			]);
			return { count, items };
		},
	);
