import { Link, useLocation } from "@tanstack/react-router";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { GroupNavItem } from "@/types";

export function AppSidebarNavMain({ items = [] }: { items: GroupNavItem[] }) {
	const location = useLocation();

	return (
		<>
			{items.map((item) => {
				if (!item.isShow) {
					return null;
				}

				return (
					<SidebarGroup className="px-2 py-0" key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarMenu>
							{(item.children ?? []).map((child) => {
								if (!child.isShow) {
									return null;
								}

								const isActive = location.pathname === child.href;

								return (
									<SidebarMenuItem key={child.href}>
										<SidebarMenuButton
											render={(props) => (
												<Link {...props} to={child.href}>
													{child.icon && <child.icon />}
													<span>{child.title}</span>
												</Link>
											)}
											isActive={isActive}
											tooltip={{
												children: child.title,
											}}
										/>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroup>
				);
			})}
		</>
	);
}
