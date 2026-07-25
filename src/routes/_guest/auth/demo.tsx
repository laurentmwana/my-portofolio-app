import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_guest/auth/demo")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/auth/demo"!</div>;
}
