import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
	component: () => <Outlet />,
	beforeLoad: async ({ location, context }) => {
		if (context.auth !== null && context.auth.user !== null) {
			return { auth: context.auth };
		}

		throw redirect({
			to: "/auth/login",
			search: { redirect: location.pathname },
		});
	},
});
