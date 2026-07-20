import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "#/layouts/admin-layout";

export const Route = createFileRoute("/_protected/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AdminLayout>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa
				aperiam corrupti, omnis et nisi, molestias iure quam velit in, molestiae
				accusantium libero blanditiis animi excepturi. Quae saepe veniam odit.
			</p>
		</AdminLayout>
	);
}
