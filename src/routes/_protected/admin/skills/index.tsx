import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { findPaginatedSkills } from "#/actions/skill.action";
import { ButtonLink } from "#/components/ui/button-link";
import { DataPagination } from "#/components/ui/data-pagination";
import { SearchInput } from "#/components/ui/search-input";
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
				search: deps.q,
			},
		});
	},
});

function Page() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const { count, items: skills } = Route.useLoaderData();

	// État local pour réagir instantanément dans l'input
	const [searchTerm, setSearchTerm] = useState(search.q || "");

	// Synchroniser l'état local si l'URL change (ex: bouton retour arrière du navigateur)
	useEffect(() => {
		setSearchTerm(search.q || "");
	}, [search.q]);

	// Effet de debounce pour mettre à jour l'URL après 300ms d'inactivité de frappe
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm !== (search.q || "")) {
				navigate({
					search: (old) => ({
						...old,
						page: 1, // On revient à la première page lors d'une recherche
						q: searchTerm ? searchTerm : undefined,
					}),
					replace: true, // Évite d'empiler l'historique à chaque frappe
				});
			}
		}, 300);

		return () => clearTimeout(timer);
	}, [searchTerm, navigate, search.q]);

	const onSearch = (q?: string | null) => {
		setSearchTerm(q || "");
	};

	return (
		<Layout onSearch={onSearch} searchValue={searchTerm}>
			<SkillsTable skills={skills ?? []} />
			<DataPagination
				itemsPerPage={search.limit || 12}
				totalItems={count}
				page={search.page || 1}
				href="/skills"
				onPageChange={(page) => {
					navigate({
						search: (old) => ({
							...old,
							page,
						}),
					});
				}}
			/>
		</Layout>
	);
}

function Layout({
	children,
	onSearch,
	searchValue,
}: {
	children: React.ReactNode;
	onSearch?: (value?: string | null) => void;
	searchValue?: string;
}) {
	return (
		<AdminLayout
			breadcrumbs={[
				{ href: "/dashboard", title: "Tableau de bord" },
				{ href: "", title: "Compétences" },
			]}
		>
			<div className="w-full">
				<div className="mb-4 flex w-full flex-col gap-6 md:gap-4 md:flex-row md:items-center md:justify-between">
					<div>
						<h1 className="backoffice-title mb-2">Compétences</h1>
						<p className="backoffice-description">Gérez vos compétences</p>
					</div>
					<div className="flex w-full items-center gap-4 md:w-auto">
						{onSearch && (
							<SearchInput
								clearable={true}
								placeholder="Rechercher une compétence"
								value={searchValue || ""}
								onChange={(e) => onSearch(e.target.value ?? "")}
							/>
						)}
						<ButtonLink size="sm" href="/admin/skills/new">
							<Plus size={15} />
							<span className="sr-only">Nouvelle compétence</span>
						</ButtonLink>
					</div>
				</div>
				<section>{children}</section>
			</div>
		</AdminLayout>
	);
}
