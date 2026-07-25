import { createServerFn } from "@tanstack/react-start";
import { prisma } from "#/lib/prisma";

export const findLatestPublishedWorksFn = createServerFn({ method: "GET" })
	.validator((data: { limit?: number }) => data)
	.handler(async ({ data = { limit: 10 } }) => {
		return await prisma.work.findMany({
			where: { isPublished: true },
			orderBy: { start: "desc" },
			take: data.limit,
		});
	});

export const findPublishedWorkByIdFn = createServerFn({ method: "GET" })
	.validator((data: { id: string }) => data)
	.handler(async ({ data }) => {
		return await prisma.work.findUniqueOrThrow({
			where: { isPublished: true, id: data.id },
		});
	});

export const findPaginatedWorksPublished = createServerFn({
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
				prisma.work.count({ where: { isPublished: true } }),
				prisma.work.findMany({
					where: { isPublished: true },
					orderBy: {
						[data.orderBy]: data.direction,
					},
					take: data.limit,
					skip: data.offset,
				}),
			]);
			return { count, items };
		},
	);
