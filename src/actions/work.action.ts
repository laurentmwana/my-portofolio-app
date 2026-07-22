// #/actions/work.action.ts
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
