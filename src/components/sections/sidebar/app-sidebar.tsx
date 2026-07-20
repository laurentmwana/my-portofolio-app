import { Link } from "@tanstack/react-router";
import { Logo } from "#/shared/logo";
import type { GroupNavItem, NavItem } from "#/types";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AppSidebarNavMain } from "./app-sidebar-nav-main";
import { AppSidebarNavUser } from "./app-sidebar-nav-user";

type Props = { mainNavItems: GroupNavItem[]; navUserItems: NavItem[] };

export function AppSidebar({ mainNavItems, navUserItems }: Props) {
	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							render={(props) => {
								return (
									<Link {...props} to="/">
										<Logo iconSize={26} title="Labeya" />
									</Link>
								);
							}}
						/>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<AppSidebarNavMain items={mainNavItems} />
			</SidebarContent>

			<SidebarFooter>
				<AppSidebarNavUser navUserItems={navUserItems} />
			</SidebarFooter>
		</Sidebar>
	);
}
