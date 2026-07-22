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
		<div className="container">
			<h3 className="text-xl lg:text-2xl font-semibold mb-4">Projets</h3>
			{isPending ? (
				<ProjectCardSkeletonList count={4} />
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{projects?.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			)}
		</div>
	);
};
