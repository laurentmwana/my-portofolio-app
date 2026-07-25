import { createFileRoute } from "@tanstack/react-router";
import { findPaginatedEducationsPublished } from "#/actions/education.action";
import { Banner } from "#/components/sections/banner/default";
import { DataPagination } from "#/components/ui/data-pagination";
import { EducationCard } from "#/features/education/education-card";
import { offsetPagination } from "#/lib/number";
import { paginationQuerySchema } from "#/schemas/default.schema";

export const Route = createFileRoute("/_portofolio/educations/")({
	component: Page,
	validateSearch: paginationQuerySchema,
	loaderDeps: ({ search }) => search,
	loader: async ({ deps }) => {
		const limit = deps.limit ?? 12;
		const page = deps.page ?? 1;
		const offset = offsetPagination(page, limit);

		return await findPaginatedEducationsPublished({
			data: {
				limit: limit,
				page: page,
				offset,
				direction: "asc",
				orderBy: "startAt",
			},
		});
	},
});

function Page() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const { count, items: educations } = Route.useLoaderData();

	return (
		<div className="container">
			<Banner
				breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Educations" }]}
				title="Formation & Etude"
				description="Explorez les expériences professionnelles que j'ai vécues au fil de mon parcours."
			/>

			<div className="w-full mb-20 grid grid-cols-1 gap-4">
				{educations.map((education) => {
					return <EducationCard key={education.id} education={education} />;
				})}
			</div>

			<DataPagination
				itemsPerPage={search.limit || 12}
				totalItems={count}
				page={search.page || 1}
				href="/educations"
				onPageChange={(page) => {
					navigate({
						search: {
							page,
							limit: search.limit,
							direction: search.direction,
							orderBy: search.orderBy,
						},
					});
				}}
			/>
		</div>
	);
}
