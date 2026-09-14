import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portofolio/legal/privacy")({
	component: Page,
});

function Page() {
	return <div>Hello "/legal/privacy"!</div>;
}
