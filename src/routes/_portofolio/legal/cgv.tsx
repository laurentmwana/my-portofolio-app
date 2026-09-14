import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portofolio/legal/cgv")({
	component: Page,
});

function Page() {
	return <div>Hello "/legal/cgv"!</div>;
}
