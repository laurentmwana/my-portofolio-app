import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/admin/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_protected/admin/about"!</div>;
}
