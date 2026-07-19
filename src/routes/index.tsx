import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "#/components/sections/navbar/default";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="flex flex-col min-h-[100dvh] space-y-10">
			<Navbar />
		</div>
	);
}
