import { ChevronsUpDown } from "lucide-react";
import { Loader } from "#/components/ui/loader";
import { useSession } from "#/hooks/use-session";
import type { NavItem } from "#/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppSidebarUserInfo } from "./app-sidebar-user-info";
import { AppSidebarUserMenuContent } from "./app-sidebar-user-menu-content";

type Props = { navUserItems: NavItem[] };

export function AppSidebarNavUser({ navUserItems }: Props) {
	const { state } = useSidebar();
	const isMobile = useIsMobile();
	const session = useSession();

	if (session.isPending) {
		return (
			<SidebarMenu>
				<SidebarMenuItem>
					<div className="flex items-center gap-2">
						<div className="relative flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
							<Loader size={5} />
						</div>
						<div className="flex flex-col overflow-hidden">
							<div className="flex h-6 items-center gap-2 rounded-sm px-2 outline-none transition-colors focus:bg-sidebar-accent focus:text-sidebar-accent-foreground"></div>
						</div>
					</div>
				</SidebarMenuItem>
			</SidebarMenu>
		);
	}

	if (!session.isAuthenticated || session.user === null) {
		return null;
	}

	const user = session.user;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={(props) => (
							<SidebarMenuButton
								{...props}
								size="lg"
								className="group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent"
								data-test="sidebar-menu-button"
							>
								<AppSidebarUserInfo user={user} />
								<ChevronsUpDown className="ml-auto size-4" />
							</SidebarMenuButton>
						)}
					/>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						align="end"
						side={
							isMobile ? "bottom" : state === "collapsed" ? "left" : "bottom"
						}
					>
						<AppSidebarUserMenuContent items={navUserItems} session={session} />
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
