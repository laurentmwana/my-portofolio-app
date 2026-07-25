import { createFileRoute } from "@tanstack/react-router";
import { findPublishedProjectByIdFn } from "#/actions/project.action";
import { Banner } from "#/components/sections/banner/default";
import { ProjectDetails } from "#/features/project/project-details";

export const Route = createFileRoute("/_portofolio/projects/$id")({
	component: Page,
	loader: async ({ params }) => {
		return await findPublishedProjectByIdFn({ data: { id: params.id } });
	},
});

function Page() {
	const project = Route.useLoaderData();

	return (
		<div className="container">
			<Banner
				breadcrumbs={[
					{ label: "Accueil", href: "/" },
					{ label: "Projects", href: "/projects" },
					{ label: "Détails" },
				]}
				title={project.title}
				description={project.description}
			/>
			<ProjectDetails project={project} />
		</div>
	);
}
