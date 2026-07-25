import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getSessionFn } from "#/actions/auth.action";
import { Loader } from "#/components/ui/loader";
import { queriesSchema } from "#/schemas/default.schema";

export const Route = createFileRoute("/_guest")({
	validateSearch: queriesSchema,
	component: () => <Outlet />,
	pendingComponent: () => {
		return <Loader label="Redirection..." />;
	},
	beforeLoad: async ({ search }) => {
		const session = await getSessionFn();

		if (session !== null && session.user !== null) {
			throw redirect({
				to: search.redirect ?? "/dashboard",
			});
		}
	},
});
