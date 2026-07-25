import { createFileRoute } from "@tanstack/react-router";
import { findPublishedHackathonByIdFn } from "#/actions/hackthon.action";
import { Banner } from "#/components/sections/banner/default";
import { HackathonDetails } from "#/features/hackathon/hackathon-details";

export const Route = createFileRoute("/_portofolio/hackathons/$id")({
	component: Page,
	loader: async ({ params }) => {
		return await findPublishedHackathonByIdFn({ data: { id: params.id } });
	},
});

function Page() {
	const hackathon = Route.useLoaderData();

	return (
		<div className="container">
			<Banner
				breadcrumbs={[
					{ label: "Accueil", href: "/" },
					{ label: "Hackathon", href: "/hackathons" },
					{ label: "Détails" },
				]}
				title={hackathon.title}
				description={hackathon.description}
			/>
			<HackathonDetails hackathon={hackathon} />
		</div>
	);
}
