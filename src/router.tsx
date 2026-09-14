import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import {
	ErrorPage,
	NotFoundPage,
} from "./components/sections/errors/error-page";
import { Loader } from "./components/ui/loader";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: (props) => {
			return <ErrorPage onReset={props.reset} message={props.error.message} />;
		},
		defaultPendingComponent: () => <Loader />,
		defaultNotFoundComponent: () => <NotFoundPage />,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
