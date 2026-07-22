import { createServerFn } from "@tanstack/react-start";
import { prisma } from "#/lib/prisma";

export const findLatestPublishedHackathonsFn = createServerFn({ method: "GET" })
	.validator((data: { limit?: number }) => data)
	.handler(async ({ data = { limit: 10 } }) => {
		return await prisma.hackathon.findMany({
			where: { isPublished: true },
			orderBy: { start: "desc" },
			take: data.limit,
			include: {
				links: true,
			},
		});
	});
