import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import type React from "react";
import { findPaginatedSkills } from "#/actions/skill.action";
import { ButtonLink } from "#/components/ui/button-link";
import { DataPagination } from "#/components/ui/data-pagination";
import { SkillsTable } from "#/features/skill/skills-table";
import { AdminLayout } from "#/layouts/admin-layout";
import { offsetPagination } from "#/lib/number";
import { paginationQuerySchema } from "#/schemas/default.schema";
import { TableSkeleton } from "#/shared/table-skeleton";

export const Route = createFileRoute("/_protected/admin/skills/")({
	component: Page,
	pendingComponent: () => {
		return (
			<Layout>
				<TableSkeleton columns={4} showHeader={true} />
			</Layout>
		);
	},
	validateSearch: paginationQuerySchema,
	loaderDeps: ({ search }) => search,
	loader: async ({ deps }) => {
		const limit = deps.limit ?? 12;
		const page = deps.page ?? 1;
		const offset = offsetPagination(page, limit);

		return await findPaginatedSkills({
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
		<Layout>
			<SkillsTable skills={skills ?? []} />
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
		</Layout>
	);
}

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<AdminLayout
			breadcrumbs={[
				{ href: "/dashboard", title: "Tableau de bord" },
				{ href: "", title: "Compétences" },
			]}
		>
			<div className="w-full">
				<div className="flex items-center justify-between">
					<div className="mb-4">
						<h1 className="backoffice-title mb-2">Compétences</h1>
						<p className="backoffice-description">Gérez vos compétences</p>
					</div>
					<ButtonLink size="icon-sm" href="/admin/skills/new">
						<Plus size={15} />
						<span className="sr-only">Nouvelle compétence</span>
					</ButtonLink>
				</div>
				<section>{children}</section>
			</div>
		</AdminLayout>
	);
}
