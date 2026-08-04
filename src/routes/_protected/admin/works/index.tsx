import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/admin/works/")({
	component: Page,
});

function Page() {
	return <div>Hello "/_protected/admin/works/"!</div>;
}
