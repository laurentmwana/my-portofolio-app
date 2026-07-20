import { AppSidebar } from "#/components/sections/sidebar/app-sidebar";
import { AppSidebarContent } from "#/components/sections/sidebar/app-sidebar-content";
import { AppSidebarHeader } from "#/components/sections/sidebar/app-sidebar-header";
import { AppSidebarShell } from "#/components/sections/sidebar/app-sidebar-shell";
import type { AppLayoutProps } from "#/types";

export function AppSidebarTemplate({
	children,
	breadcrumbs = [],
	mainItems = [],
	navUserItems = [],
}: AppLayoutProps) {
	return (
		<AppSidebarShell variant="sidebar">
			<AppSidebar navUserItems={navUserItems} mainNavItems={mainItems} />
			<AppSidebarContent variant="sidebar" className="overflow-x-hidden">
				<AppSidebarHeader breadcrumbs={breadcrumbs} />
				{children}
			</AppSidebarContent>
		</AppSidebarShell>
	);
}
