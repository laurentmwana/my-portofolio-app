import { createServerFn } from "@tanstack/react-start";
import { prisma } from "#/lib/prisma";

export const findPaginatedPublishedPostsFn = createServerFn({ method: "GET" })
	.validator((data: { page: number; perPage?: number }) => data)
	.handler(async ({ data = { page: 1, perPage: 12 } }) => {
		return await prisma.post.findMany({
			where: { isPublished: true },
			orderBy: { createdAt: "desc" },
			take: data.perPage,
			include: {
				category: true,
				postComments: true,
			},
		});
	});

export const findLatestPublishedPostsFn = createServerFn({ method: "GET" })
	.validator((data: { limit?: number }) => data)
	.handler(async ({ data = { limit: 10 } }) => {
		return await prisma.post.findMany({
			where: { isPublished: true },
			orderBy: { createdAt: "desc" },
			take: data.limit,
			include: {
				category: true,
				postComments: true,
				_count: true,
			},
		});
	});

export const findPostBySlugFn = createServerFn({ method: "GET" })
	.validator((data: { slug: string }) => data)
	.handler(async ({ data: { slug } }) => {
		return await prisma.post.findUnique({
			where: { slug },
			include: {
				category: true,
				postComments: true,
			},
		});
	});

export const findPublishedPostsByCategoryIdFn = createServerFn({
	method: "GET",
})
	.validator((data: { categoryId: string; limit?: number }) => data)
	.handler(async ({ data: { categoryId, limit = 10 } }) => {
		return await prisma.post.findMany({
			where: { isPublished: true, categoryId },
			orderBy: { createdAt: "desc" },
			take: limit,
			include: {
				category: true,
				postComments: true,
			},
		});
	});
