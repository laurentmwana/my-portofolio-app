import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { LogoIcon } from "#/shared/logo";
import { Loader } from "@/components/ui/loader";

export const Route = createFileRoute("/_guest/auth")({
	component: AuthLayout,
	pendingComponent: () => <Loader />,
});

function AuthLayout() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
			<div className="w-full max-w-md">
				<header className="mb-4 flex-col gap-4">
					<div>
						<Link
							to="/"
							className="flex flex-col items-center gap-2 font-medium"
						>
							<div className="flex size-8 items-center justify-center rounded-md">
								<LogoIcon className="size-9" />
							</div>
							<span className="sr-only">Labeya</span>
						</Link>
					</div>
				</header>
				<main>
					<Outlet />
				</main>
				<footer className="text-sm text-muted-foreground px-4 text-center mt-6">
					En cliquant sur continuer, vous acceptez nos{" "}
					<Link className="underline font-medium" to="/legal/cgv">
						Conditions d&apos;utilisation
					</Link>{" "}
					et notre{" "}
					<Link className="underline font-medium" to="/legal/privacy">
						Politique de confidentialité
					</Link>
					.
				</footer>
			</div>
		</div>
	);
}
