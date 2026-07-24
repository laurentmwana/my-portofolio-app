import { createFileRoute } from "@tanstack/react-router";
import { Educations } from "#/features/welcome/educations";
import { Hackathons } from "#/features/welcome/hackathons";
import { Presentation } from "#/features/welcome/presentation";
import { Projects } from "#/features/welcome/projects";
import { Skills } from "#/features/welcome/skills";
import { Works } from "#/features/welcome/works";

export const Route = createFileRoute("/_portofolio/")({ component: Page });

function Page() {
	return (
		<div className="container py-12 sm:py-16 md:py-20 lg:py-24">
			<div className="flex flex-col gap-16">
				<Presentation />
				<Works />
				<Educations />
				<Skills />
				<Projects />
				<Hackathons />
			</div>
		</div>
	);
}
