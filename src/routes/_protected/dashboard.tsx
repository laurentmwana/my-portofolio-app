import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { countEducations } from "#/actions/education.action";
import { countPosts } from "#/actions/post.action";
import { countProjects } from "#/actions/project.action";
import { countSkills } from "#/actions/skill.action";
import { Skeleton } from "#/components/ui/skeleton";
import { PostChartAreaInteractive } from "#/features/dashboard/chart-area-interactive";
import { StatsCard } from "#/features/dashboard/stat-card";
import { AdminLayout } from "#/layouts/admin-layout";

export const Route = createFileRoute("/_protected/dashboard")({
	component: Page,
	loader: async () => {
		return {
			projects: await countProjects({ data: { isPublished: true } }),
			skills: await countSkills({ data: { isPublished: true } }),
			educations: await countEducations({ data: { isPublished: true } }),
			posts: await countPosts({ data: { isPublished: true } }),
		};
	},
	pendingComponent: () => {
		return (
			<Layout>
				<div className="flex flex-col gap-4">
					<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
						<Skeleton className="w-full h-32" />
						<Skeleton className="w-full h-32" />
						<Skeleton className="w-full h-32" />
						<Skeleton className="w-full h-32" />
					</div>
					<Skeleton className="w-full h-96" />
				</div>
			</Layout>
		);
	},
});

function Page() {
	const { projects, skills, educations, posts } = Route.useLoaderData();

	return (
		<Layout>
			<div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
					<StatsCard
						title="Projets"
						value={projects}
						description="Nombre de projets"
						to="/admin/projects"
					/>
					<StatsCard
						title="Compétences"
						value={skills}
						description="Nombre de compétences"
						to="/admin/skills"
					/>
					<StatsCard
						title="Expériences"
						value={educations}
						description="Nombre d'expériences"
						to="/admin/educations"
					/>
					<StatsCard
						title="Articles"
						value={posts}
						description="Nombre d'articles"
						to="/admin/posts"
					/>
				</div>
				<PostChartAreaInteractive />
			</div>
		</Layout>
	);
}

function Layout({ children }: { children: ReactNode }) {
	return (
		<AdminLayout
			breadcrumbs={[{ href: "/dashboard", title: "Tableau de bord" }]}
		>
			<div className="mb-4">
				<h1 className="backoffice-title mb-2">Tableau de bord</h1>
				<p className="backoffice-description">
					Gérez votre profil et vos projets
				</p>
			</div>

			<section>{children}</section>
		</AdminLayout>
	);
}
