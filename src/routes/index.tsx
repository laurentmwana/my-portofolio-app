import { createFileRoute } from "@tanstack/react-router";
import { HeroHeader } from "#/features/welcome/hero-header";
import { Presentation } from "#/features/welcome/presentation";

export const Route = createFileRoute("/")({ component: Home });

const BLUR_FADE_DELAY = 0.5;

function Home() {
	return (
		<div>
			<HeroHeader />
			<Presentation />
		</div>
	);
}
