import { createFileRoute } from "@tanstack/react-router";
import { findPublishedEducationByIdFn } from "#/actions/education.action";
import { Banner } from "#/components/sections/banner/default";
import { EducationDetails } from "#/features/education/education-details";

export const Route = createFileRoute("/_portofolio/educations/$id")({
	component: Page,
	loader: async ({ params }) => {
		return await findPublishedEducationByIdFn({ data: { id: params.id } });
	},
});

function Page() {
	const education = Route.useLoaderData();

	return (
		<div className="container">
			<Banner
				breadcrumbs={[
					{ label: "Accueil", href: "/" },
					{ label: "Educations", href: "/educations" },
					{ label: "Détails" },
				]}
				title={education.school}
				description={education?.description || undefined}
			/>
			<EducationDetails education={education} />
		</div>
	);
}
