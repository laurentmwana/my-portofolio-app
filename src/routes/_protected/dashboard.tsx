import { createFileRoute } from "@tanstack/react-router";
import { PostChartAreaInteractive } from "#/features/dashboard/chart-area-interactive";
import { StatsCard } from "#/features/dashboard/stat-card";
import { AdminLayout } from "#/layouts/admin-layout";

export const Route = createFileRoute("/_protected/dashboard")({
	component: Page,
});

function Page() {
	return (
		<AdminLayout>
			<div className="w-full">
				<h1 className="text-2xl font-bold text-foreground mb-2">
					Tableau de bord
				</h1>
				<p className="text-sm text-muted-foreground mb-4">
					Gérez votre profil et vos projets
				</p>

				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
					<StatsCard
						title="Projets"
						value="0"
						description="Nombre de projets"
					/>
					<StatsCard
						title="Compétences"
						value="0"
						description="Nombre de compétences"
					/>
					<StatsCard
						title="Expériences"
						value="0"
						description="Nombre d'expériences"
					/>
					<StatsCard
						title="Articles"
						value="0"
						description="Nombre d'articles"
					/>
				</div>
			</div>

			<div className="w-full">
				<PostChartAreaInteractive />
			</div>
		</AdminLayout>
	);
}
