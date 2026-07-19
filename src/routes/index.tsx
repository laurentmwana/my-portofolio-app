import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "#/components/sections/navbar/default";
import { HeroHeader } from "#/features/welcome/hero-header";
import { Presentation } from "#/features/welcome/presentation";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="flex flex-col min-h-[100dvh] space-y-10">
			<Navbar />
			<HeroHeader />
			<Presentation />
		</div>
	);
}
