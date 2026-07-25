import { createFileRoute } from "@tanstack/react-router";
import { findPaginatedSkillsPublished } from "#/actions/skill.action";
import { Banner } from "#/components/sections/banner/default";
import { DataPagination } from "#/components/ui/data-pagination";
import { SkillGridCard } from "#/features/skill/skill-card";
import { offsetPagination } from "#/lib/number";
import { paginationQuerySchema } from "#/schemas/default.schema";

export const Route = createFileRoute("/_portofolio/skills")({
	component: Page,
	validateSearch: paginationQuerySchema,
	loaderDeps: ({ search }) => search,
	loader: async ({ deps }) => {
		const limit = deps.limit ?? 12;
		const page = deps.page ?? 1;
		const offset = offsetPagination(page, limit);

		return await findPaginatedSkillsPublished({
			data: {
				limit: limit,
				page: page,
				offset,
				direction: "asc",
				orderBy: "createdAt",
			},
		});
	},
});

function Page() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const { count, items: skills } = Route.useLoaderData();

	return (
		<div className="container">
			<Banner
				breadcrumbs={[
					{ label: "Accueil", href: "/" },
					{ label: "Compétences" },
				]}
				title="Mes compétences"
				description="Explorez les compétences et technologies que j'ai développées et utilisées au fil de mon parcours."
			/>

			<div className="w-full mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{skills.map((sk) => {
					return <SkillGridCard key={sk.id} skill={sk} />;
				})}
			</div>

			<DataPagination
				itemsPerPage={search.limit || 12}
				totalItems={count}
				page={search.page || 1}
				href="/skills"
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
