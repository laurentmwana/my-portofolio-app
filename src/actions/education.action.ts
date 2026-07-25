// #/actions/education.action.ts
import { createServerFn } from "@tanstack/react-start";
import { prisma } from "#/lib/prisma";

export const findLatestPublishedEducationsFn = createServerFn({ method: "GET" })
	.validator((data: { limit?: number }) => data)
	.handler(async ({ data = { limit: 10 } }) => {
		return await prisma.education.findMany({
			where: { isPublished: true },
			orderBy: { start: "desc" },
			take: data.limit,
			include: {
				grades: {
					where: { isPublished: true },
				},
			},
		});
	});

export const findPublishedEducationByIdFn = createServerFn({ method: "GET" })
	.validator((data: { id: string }) => data)
	.handler(async ({ data }) => {
		return await prisma.education.findUniqueOrThrow({
			where: { isPublished: true, id: data.id },
			include: { grades: true },
		});
	});

export const findPaginatedEducationsPublished = createServerFn({
	method: "GET",
})
	.validator(
		(data: {
			limit?: number;
			page?: number;
			offset?: number;
			orderBy?: string;
			direction?: string;
		}) => {
			let safeOrderBy = data.orderBy || "updatedAt";
			if (safeOrderBy === "startAt") {
				safeOrderBy = "start";
			}

			const safeDirection = data.direction === "asc" ? "asc" : "desc";

			return {
				...data,
				orderBy: safeOrderBy,
				direction: safeDirection,
			};
		},
	)
	.handler(
		async ({
			data = {
				limit: 12,
				page: 1,
				offset: 0,
				orderBy: "updatedAt",
				direction: "desc",
			},
		}) => {
			const [count, items] = await prisma.$transaction([
				prisma.education.count({ where: { isPublished: true } }),
				prisma.education.findMany({
					where: { isPublished: true },
					orderBy: {
						[data.orderBy]: data.direction,
					},
					take: data.limit,
					skip: data.offset,
					include: { grades: true },
				}),
			]);
			return { count, items };
		},
	);
