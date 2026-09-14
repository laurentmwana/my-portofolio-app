import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "#/layouts/admin-layout";

export const Route = createFileRoute("/_protected/admin/posts/")({
	component: Page,
});

function Page() {
	return (
		<AdminLayout
			breadcrumbs={[
				{ href: "/dashboard", title: "Tableau de bord" },
				{ href: "/admin/posts", title: "Articles" },
			]}
		>
			<h1>hello</h1>
		</AdminLayout>
	);
}
