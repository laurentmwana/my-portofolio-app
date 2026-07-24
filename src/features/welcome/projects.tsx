// #/features/welcome/projects.tsx
import { useQuery } from "@tanstack/react-query";
import { findLatestPublishedProjectsFn } from "#/actions/project.action";
import { ProjectCard } from "#/features/project/project-card";
import { ProjectCardSkeletonList } from "../project/project-skeleton";

export const Projects = () => {
	const { data: projects, isPending } = useQuery({
		queryKey: ["welcome_projects"],
		queryFn: async () =>
			await findLatestPublishedProjectsFn({ data: { limit: 10 } }),
	});

	return (
		<section>
			<h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-8 bg-linear-to-r from-foreground to-foreground/75 bg-clip-text text-transparent">
				Projets phares
			</h3>
			{isPending ? (
				<ProjectCardSkeletonList count={4} />
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects?.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			)}
		</section>
	);
};
