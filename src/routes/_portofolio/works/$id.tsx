import { createFileRoute } from "@tanstack/react-router";
import { findPublishedWorkByIdFn } from "#/actions/work.action";
import { Banner } from "#/components/sections/banner/default";
import { WorkDetails } from "#/features/work/work-details";

export const Route = createFileRoute("/_portofolio/works/$id")({
	component: Page,
	loader: async ({ params }) => {
		return await findPublishedWorkByIdFn({ data: { id: params.id } });
	},
});

function Page() {
	const work = Route.useLoaderData();

	return (
		<div className="container">
			<Banner
				breadcrumbs={[
					{ label: "Accueil", href: "/" },
					{ label: "Expériences", href: "/works" },
					{ label: "Détails" },
				]}
				title={work.title}
				description={work.description}
			/>
			<WorkDetails work={work} />
		</div>
	);
}
