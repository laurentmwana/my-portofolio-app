import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getSessionFn } from "#/actions/auth.action";
import { Loader } from "#/components/ui/loader";

export const Route = createFileRoute("/_guest")({
	component: () => <Outlet />,
	pendingComponent: () => {
		return <Loader label="Redirection..." />;
	},
	beforeLoad: async () => {
		const session = await getSessionFn();

		if (session !== null && session.user !== null) {
			throw redirect({
				to: "/dashboard",
			});
		}
	},
});
