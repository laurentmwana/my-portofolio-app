import { createFileRoute } from "@tanstack/react-router";
import { findPaginatedHackathonsPublished } from "#/actions/hackthon.action";
import { Banner } from "#/components/sections/banner/default";
import { DataPagination } from "#/components/ui/data-pagination";
import { HackathonCard } from "#/features/hackathon/hackathon-card";
import { offsetPagination } from "#/lib/number";
import { paginationQuerySchema } from "#/schemas/default.schema";

export const Route = createFileRoute("/_portofolio/hackathons/")({
	component: Page,
	validateSearch: paginationQuerySchema,
	loaderDeps: ({ search }) => search,
	loader: async ({ deps }) => {
		const limit = deps.limit ?? 12;
		const page = deps.page ?? 1;
		const offset = offsetPagination(page, limit);

		return await findPaginatedHackathonsPublished({
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
	const { count, items: hackathons } = Route.useLoaderData();

	return (
		<div className="container">
			<Banner
				breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Hackathons" }]}
				title="Mes Hackathons"
				description="Explorez les expériences professionnelles que j'ai vécues au fil de mon parcours."
			/>

			<div className="w-full mb-20 grid grid-cols-1 gap-4">
				{hackathons.map((hackathon) => {
					return <HackathonCard key={hackathon.id} hackathon={hackathon} />;
				})}
			</div>

			<DataPagination
				itemsPerPage={search.limit || 12}
				totalItems={count}
				page={search.page || 1}
				href="/hackathons"
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
