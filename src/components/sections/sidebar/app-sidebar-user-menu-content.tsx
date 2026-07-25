import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { useMobileNavigation } from "#/hooks/use-mobile-navigation";
import type { SessionContextValue } from "#/hooks/use-session";
import type { NavItem } from "#/types";
import {
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { AppSidebarUserInfo } from "./app-sidebar-user-info";

type Props = {
	items: NavItem[];
	session: SessionContextValue;
};

export function AppSidebarUserMenuContent({ items, session }: Props) {
	const cleanup = useMobileNavigation();
	const navigate = useNavigate();

	if (session.user === null) {
		return null;
	}

	const user = session.user;

	const handleLogout = async () => {
		cleanup();
		session.logout();
		await navigate({ to: "/" });
	};

	return (
		<>
			<DropdownMenuGroup>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<AppSidebarUserInfo user={user} showEmail={true} />
					</div>
				</DropdownMenuLabel>
			</DropdownMenuGroup>

			<DropdownMenuSeparator />

			<DropdownMenuGroup>
				{items.map((item) => (
					<DropdownMenuItem
						key={item.href}
						render={(props) => (
							<Link
								className="block w-full cursor-pointer"
								to={item.href}
								onClick={cleanup}
								activeProps={{
									className: "bg-accent text-accent-foreground",
								}}
								inactiveProps={{
									className: "hover:bg-accent hover:text-accent-foreground",
								}}
								{...props}
							>
								{item.icon && <item.icon className="mr-2 h-4 w-4" />}
								{item.title}
							</Link>
						)}
					/>
				))}
			</DropdownMenuGroup>

			<DropdownMenuSeparator />

			<DropdownMenuGroup>
				<DropdownMenuItem onClick={handleLogout}>
					<LogOut className="mr-2 h-4 w-4" />
					Se déconnecter
				</DropdownMenuItem>
			</DropdownMenuGroup>
		</>
	);
}
