import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/admin/projects/")({
	component: Page,
});

function Page() {
	return <div>Hello "/_protected/admin/projects/"!</div>;
}
