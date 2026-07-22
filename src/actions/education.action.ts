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
