import { createServerFn } from "@tanstack/react-start";
import { prisma } from "#/lib/prisma";
import { generateSlug } from "#/lib/string";
import type { SkillValues } from "#/schemas/skill.schema";

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

export const findPaginatedSkills = createServerFn({
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
				prisma.skill.count(),
				prisma.skill.findMany({
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

export const deleteSkillFn = createServerFn({ method: "POST" })
	.validator((data: { id: string }) => data)
	.handler(async ({ data }) => {
		return await prisma.skill.delete({ where: { id: data.id } });
	});

export const findSkill = createServerFn({ method: "GET" })
	.validator((data: { id: string }) => data)
	.handler(async ({ data }) => {
		return await prisma.skill.findFirstOrThrow({
			where: { id: data.id },
		});
	});

export const updateSkill = createServerFn({ method: "POST" })
	.validator((data: { id: string; formData: SkillValues }) => data)
	.handler(async ({ data }) => {
		// Vérifier si une autre compétence possède déjà ce nom
		const existingSkill = await prisma.skill.findFirst({
			where: {
				name: data.formData.name,
				NOT: { id: data.id },
			},
		});

		if (existingSkill) {
			throw new Error("Une compétence avec ce nom existe déjà.");
		}

		return await prisma.skill.update({
			where: { id: data.id },
			data: {
				name: data.formData.name,
				description: data.formData.description,
				iconKey: data.formData.iconKey,
				isPublished: data.formData.isPublished,
				slug: generateSlug(data.formData.name),
			},
		});
	});

export const createSkill = createServerFn({ method: "POST" })
	.validator((data: SkillValues) => data)
	.handler(async ({ data }) => {
		const existingSkill = await prisma.skill.findFirst({
			where: { name: data.name },
		});

		if (existingSkill) {
			throw new Error("Une compétence avec ce nom existe déjà.");
		}

		return await prisma.skill.create({
			data: {
				name: data.name,
				description: data.description,
				iconKey: data.iconKey,
				isPublished: data.isPublished,
				slug: generateSlug(data.name),
			},
		});
	});
