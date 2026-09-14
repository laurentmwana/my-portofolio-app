import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/admin/hackathons/")({
	component: Page,
});

function Page() {
	return <div>Hello "/_protected/admin/hackathons/"!</div>;
}
