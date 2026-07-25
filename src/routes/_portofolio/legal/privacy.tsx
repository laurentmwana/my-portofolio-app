import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portofolio/legal/privacy")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/legal/privacy"!</div>;
}
