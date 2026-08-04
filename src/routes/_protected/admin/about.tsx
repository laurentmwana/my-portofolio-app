import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/admin/about")({
	component: Page,
});

function Page() {
	return <div>Hello "/_protected/admin/about"!</div>;
}
