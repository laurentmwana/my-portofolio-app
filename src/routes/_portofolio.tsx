import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "#/components/sections/navbar/default";
import { HeroHeader } from "#/features/welcome/hero-header";

export const Route = createFileRoute("/_portofolio")({
	component: Layout,
});

function Layout() {
	return (
		<div className="relative flex flex-col min-h-[100dvh] space-y-10">
			<Navbar />
			<HeroHeader />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
