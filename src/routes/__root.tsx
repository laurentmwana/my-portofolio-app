import { TanStackDevtools } from "@tanstack/react-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { getSessionFn } from "#/actions/auth.action";
import { ThemeProvider } from "#/components/themes/theme-provider";
import { Toaster } from "#/components/ui/sonner";
import { TooltipProvider } from "#/components/ui/tooltip";
import { SessionProvider } from "#/hooks/use-session";
import appCss from "../styles/globals.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,

	beforeLoad: async () => {
		const session = await getSessionFn();

		return { auth: session };
	},
});

function RootDocument() {
	const queryClient = new QueryClient();
	return (
		<html lang="fr" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<QueryClientProvider client={queryClient}>
					<SessionProvider>
						<ThemeProvider defaultTheme="system" storageKey="theme">
							<TooltipProvider delay={0}>
								<Outlet />
								<Toaster
									position="top-center"
									richColors={true}
									closeButton={true}
								/>
							</TooltipProvider>
						</ThemeProvider>
					</SessionProvider>
				</QueryClientProvider>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
