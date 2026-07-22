import { prisma } from "#/lib/prisma";
import { auth } from "#/lib/auth";
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

const WORKS = [
	{
		company: "Atomic Finance",
		href: "https://atomic.finance",
		title: "Bitcoin Protocol Engineer",
		location: "Remote",
		logoUrl: "/atomic.png",
		badges: [] as string[],
		start: new Date("2021-05-01"),
		end: new Date("2022-10-01"),
	},
	{
		company: "Shopify",
		href: "https://shopify.com",
		title: "Software Engineer",
		location: "Remote",
		logoUrl: "/shopify.svg",
		badges: [] as string[],
		start: new Date("2021-01-01"),
		end: new Date("2021-04-01"),
	},
	{
		company: "Nvidia",
		href: "https://nvidia.com/",
		title: "Software Engineer",
		location: "Santa Clara, CA",
		logoUrl: "/nvidia.png",
		badges: [] as string[],
		start: new Date("2020-01-01"),
		end: new Date("2020-04-01"),
	},
	{
		company: "Splunk",
		href: "https://splunk.com",
		title: "Software Engineer",
		location: "San Jose, CA",
		logoUrl: "/splunk.svg",
		badges: [] as string[],
		start: new Date("2019-01-01"),
		end: new Date("2019-04-01"),
	},
	{
		company: "Lime",
		href: "https://li.me/",
		title: "Software Engineer",
		location: "San Francisco, CA",
		logoUrl: "/lime.svg",
		badges: [] as string[],
		start: new Date("2018-01-01"),
		end: new Date("2018-04-01"),
	},
	{
		company: "Mitre Media",
		href: "https://mitremedia.com/",
		title: "Software Engineer",
		location: "Toronto, ON",
		logoUrl: "/mitremedia.png",
		badges: [] as string[],
		start: new Date("2017-05-01"),
		end: new Date("2017-08-01"),
	},
] as const;

const EDUCATIONS = [
	{
		school: "Buildspace",
		href: "https://buildspace.so",
		degree: "s3, s4, sf1, s5",
		logoUrl: "/buildspace.jpg",
		start: new Date("2023-01-01"),
		end: new Date("2024-01-01"),
		grades: ["s3", "s4", "sf1", "s5"],
	},
	{
		school: "University of Waterloo",
		href: "https://uwaterloo.ca",
		degree: "Bachelor's Degree of Computer Science (BCS)",
		logoUrl: "/waterloo.png",
		start: new Date("2016-01-01"),
		end: new Date("2021-01-01"),
		grades: ["Year 1", "Year 2", "Year 3", "Year 4"],
	},
	{
		school: "Wilfrid Laurier University",
		href: "https://wlu.ca",
		degree: "Bachelor's Degree of Business Administration (BBA)",
		logoUrl: "/laurier.png",
		start: new Date("2016-01-01"),
		end: new Date("2021-01-01"),
		grades: ["Year 1", "Year 2"],
	},
	{
		school: "International Baccalaureate",
		href: "https://ibo.org",
		degree: "IB Diploma",
		logoUrl: "/ib.png",
		start: new Date("2012-01-01"),
		end: new Date("2016-01-01"),
		grades: ["Grade 11", "Grade 12"],
	},
] as const;

const PROJECTS = [
	{
		title: "Chat Collect",
		href: "https://chatcollect.com",
		start: new Date("2024-01-01"),
		end: new Date("2024-02-01") as Date | null,
		active: true,
		technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe"],
		image: "",
		video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
		links: [{ type: "Website", href: "https://chatcollect.com", icon: "globe" }],
	},
	{
		title: "Magic UI",
		href: "https://magicui.design",
		start: new Date("2023-06-01"),
		end: null as Date | null,
		active: true,
		technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe"],
		image: "",
		video: "https://cdn.magicui.design/bento-grid.mp4",
		links: [
			{ type: "Website", href: "https://magicui.design", icon: "globe" },
			{ type: "Source", href: "https://github.com/magicuidesign/magicui", icon: "github" },
		],
	},
	{
		title: "llm.report",
		href: "https://llm.report",
		start: new Date("2023-04-01"),
		end: new Date("2023-09-01") as Date | null,
		active: true,
		technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "Cloudflare Workers"],
		image: "",
		video: "https://cdn.llm.report/openai-demo.mp4",
		links: [
			{ type: "Website", href: "https://llm.report", icon: "globe" },
			{ type: "Source", href: "https://github.com/dillionverma/llm.report", icon: "github" },
		],
	},
	{
		title: "Automatic Chat",
		href: "https://automatic.chat",
		start: new Date("2023-04-01"),
		end: new Date("2024-03-01") as Date | null,
		active: true,
		technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "Cloudflare Workers"],
		image: "",
		video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
		links: [{ type: "Website", href: "https://automatic.chat", icon: "globe" }],
	},
] as const;

const HACKATHONS = [
	{
		title: "Hack Western 5",
		location: "London, Ontario",
		start: new Date("2018-11-23"),
		end: new Date("2018-11-25") as Date | null,
		image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
		mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" as string | null,
		win: null as string | null,
		icon: null as string | null,
		links: [] as { title: string; href: string; icon: string | null }[],
	},
	{
		title: "Hack The North",
		location: "Waterloo, Ontario",
		start: new Date("2018-09-14"),
		end: new Date("2018-09-16") as Date | null,
		image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
		mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" as string | null,
		win: null as string | null,
		icon: null as string | null,
		links: [] as { title: string; href: string; icon: string | null }[],
	},
	{
		title: "FirstNet Public Safety Hackathon",
		location: "San Francisco, California",
		start: new Date("2018-03-23"),
		end: new Date("2018-03-24") as Date | null,
		image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
		mlh: null as string | null,
		win: null as string | null,
		icon: "public" as string | null,
		links: [] as { title: string; href: string; icon: string | null }[],
	},
	{
		title: "DeveloperWeek Hackathon",
		location: "San Francisco, California",
		start: new Date("2018-02-03"),
		end: new Date("2018-02-04") as Date | null,
		image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
		mlh: null as string | null,
		win: null as string | null,
		icon: null as string | null,
		links: [{ title: "Github", href: "https://github.com/cryptotrends/cryptotrends", icon: "github" }],
	},
	{
		title: "HackDavis",
		location: "Davis, California",
		start: new Date("2018-01-20"),
		end: new Date("2018-01-21") as Date | null,
		image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
		mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" as string | null,
		win: "Best Data Hack" as string | null,
		icon: null as string | null,
		links: [
			{ title: "Devpost", href: "https://devpost.com/software/my6footprint", icon: "globe" },
			{ title: "ML", href: "https://github.com/Wallet6/my6footprint-machine-learning", icon: "github" },
			{ title: "iOS", href: "https://github.com/Wallet6/CarbonWallet", icon: "github" },
			{ title: "Server", href: "https://github.com/Wallet6/wallet6-server", icon: "github" },
		],
	},
	{
		title: "ETH Waterloo",
		location: "Waterloo, Ontario",
		start: new Date("2017-10-13"),
		end: new Date("2017-10-15") as Date | null,
		image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
		mlh: null as string | null,
		win: null as string | null,
		icon: null as string | null,
		links: [{ title: "Organization", href: "https://github.com/ethdocnet", icon: "github" }],
	},
	{
		title: "StartHacks I",
		location: "Waterloo, Ontario",
		start: new Date("2017-03-04"),
		end: new Date("2017-03-05") as Date | null,
		image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
		mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg" as string | null,
		win: "1st Place Winner" as string | null,
		icon: null as string | null,
		links: [
			{ title: "Source (Mobile)", href: "https://github.com/mattBlackDesign/recipic-ionic", icon: "github" },
			{ title: "Source (Server)", href: "https://github.com/mattBlackDesign/recipic-rails", icon: "github" },
		],
	},
] as const;


const DEFAULT_EMAIL = "laurentmwn@gmail.com";
const DEFAULT_PASSWORD = "@Labeya123";

async function authSeeder() {
	const result = await auth.api.signUpEmail({
		body: {
			name: "Labeya",
			email: DEFAULT_EMAIL,
			password: DEFAULT_PASSWORD,
		},
	});

	await prisma.user.update({
		where: { id: result.user.id },
		data: { emailVerified: true },
	});
}


async function skillSeeder() {
	await Promise.all(
		SKILLS.map((sk, k) =>
			prisma.skill.create({
				data: {
					name: sk.name,
					slug: sk.slug,
					iconKey: sk.icon,
					description: faker.lorem.sentence(),
					isPublished: k % 2 === 0,
				},
			})
		)
	);
}


async function workSeeder() {
	await Promise.all(
		WORKS.map((w, k) =>
			prisma.work.create({
				data: {
					company: w.company,
					href: w.href,
					title: w.title,
					location: w.location,
					logoUrl: w.logoUrl,
					badges: [...w.badges],
					description: faker.lorem.paragraph(),
					start: w.start,
					end: w.end,
					isPublished: k % 2 === 0,
				},
			})
		)
	);
}


async function educationSeeder() {
	await Promise.all(
		EDUCATIONS.map(async (edu, k) => {
			const created = await prisma.education.create({
				data: {
					school: edu.school,
					href: edu.href,
					degree: edu.degree,
					logoUrl: edu.logoUrl,
					description: faker.lorem.paragraph(),
					start: edu.start,
					end: edu.end,
					isPublished: k % 2 === 0,
				},
			});

			await Promise.all(
				edu.grades.map((name, j) =>
					prisma.grade.create({
						data: {
							name,
							description: faker.lorem.sentence(),
							isPublished: j % 2 === 0,
							educationId: created.id,
						},
					})
				)
			);
		})
	);
}


async function projectSeeder() {
	await Promise.all(
		PROJECTS.map(async (p, k) => {
			const created = await prisma.project.create({
				data: {
					title: p.title,
					href: p.href,
					description: faker.lorem.paragraph(),
					technologies: [...p.technologies],
					image: p.image,
					video: p.video,
					start: p.start,
					end: p.end,
					isPublished: k % 2 === 0,
				},
			});

			await Promise.all(
				p.links.map((link) =>
					prisma.projectLink.create({
						data: {
							type: link.type,
							href: link.href,
							icon: link.icon,
							projectId: created.id,
						},
					})
				)
			);
		})
	);
}

// ==========================================
// HACKATHONS + HACKATHON LINKS
// ==========================================

async function hackathonSeeder() {
	await Promise.all(
		HACKATHONS.map(async (h, k) => {
			const created = await prisma.hackathon.create({
				data: {
					title: h.title,
					location: h.location,
					description: faker.lorem.paragraph(),
					image: h.image,
					mlh: h.mlh,
					win: h.win,
					icon: h.icon,
					start: h.start,
					end: h.end,
					isPublished: k % 2 === 0,
				},
			});

			await Promise.all(
				h.links.map((link) =>
					prisma.hackathonLink.create({
						data: {
							title: link.title,
							href: link.href,
							icon: link.icon,
							hackathonId: created.id,
						},
					})
				)
			);
		})
	);
}

// ==========================================
// MAIN
// ==========================================

async function main() {
	await authSeeder();
	await skillSeeder();
	await workSeeder();
	await educationSeeder();
	await projectSeeder();
	await hackathonSeeder();
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
