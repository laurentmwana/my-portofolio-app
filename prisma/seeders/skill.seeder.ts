import { prisma } from "#/lib/prisma";
import { faker } from '@faker-js/faker';

const SKILLS = [
	{ name: "React", slug: "react", icon: "REACT" },
	{ name: "Next.js", slug: "nextjs", icon: "NEXTJS" },
	{ name: "TypeScript", slug: "typescript", icon: "TYPESCRIPT" },
	{ name: "Node.js", slug: "nodejs", icon: "NODEJS" },
	{ name: "Python", slug: "python", icon: "PYTHON" },
	{ name: "Go", slug: "go", icon: "GO" },
	{ name: "PostgreSQL", slug: "postgres", icon: "POSTGRES" },
	{ name: "Docker", slug: "docker", icon: "DOCKER" },
	{ name: "Kubernetes", slug: "kubernetes", icon: "KUBERNETES" },
	{ name: "Java", slug: "java", icon: "JAVA" },
	{ name: "C++", slug: "cpp", icon: "CPP" },
] as const;

export async function skillSeeder() {
	await Promise.all(
		SKILLS.map((sk, k) =>
			prisma.skill.create({
				data: {
					name: sk.name,
					slug: sk.slug,
					iconKey: sk.icon,
					description: faker.lorem.sentence(),
               isPublished: k%2 === 0
				},
			})
		)
	);
}
