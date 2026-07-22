import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "#/features/welcome/presentation";
import { Skills } from "#/features/welcome/skills";

export const Route = createFileRoute("/_portofolio/")({ component: Page });

function Page() {
	return (
		<div>
			<Presentation />
			<Skills />
		</div>
	);
}
