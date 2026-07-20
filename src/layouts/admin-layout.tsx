import {
	Briefcase,
	Code2,
	FolderKanban,
	GraduationCap,
	Home,
	LayoutDashboard,
	Mail,
	User,
} from "lucide-react";
import type { PropsWithChildren } from "react";
import { AppSidebarTemplate } from "#/components/sections/sidebar/app-sidebar-template";
import type { BreadcrumbItem, GroupNavItem, NavItem } from "#/types";

type Props = PropsWithChildren<{
	breadcrumbs?: BreadcrumbItem[];
}>;

const mainItems: GroupNavItem[] = [
	{
		title: "Aperçu",
		icon: LayoutDashboard,
		isShow: true,
		children: [
			{
				href: "/dashboard",
				title: "Tableau de bord",
				isShow: true,
				icon: Home,
			},
			{
				href: "/about",
				title: "À propos",
				isShow: true,
				icon: User,
			},
		],
	},
	{
		title: "Parcours",
		icon: Briefcase,
		isShow: true,
		children: [
			{
				href: "/work-experience",
				title: "Work Experience",
				isShow: true,
				icon: Briefcase,
			},
			{
				href: "/education",
				title: "Education",
				isShow: true,
				icon: GraduationCap,
			},
		],
	},
	{
		title: "Réalisations",
		icon: FolderKanban,
		isShow: true,
		children: [
			{
				href: "/projects",
				title: "Project",
				isShow: true,
				icon: FolderKanban,
			},
			{
				href: "/skills",
				title: "Compétences",
				isShow: true,
				icon: Code2,
			},
		],
	},
	{
		title: "Contact",
		icon: Mail,
		isShow: true,
		children: [
			{
				href: "/contact",
				title: "Me contacter",
				isShow: true,
				icon: Mail,
			},
		],
	},
];

const navUserItems: NavItem[] = [
	{
		title: "Tableau de bord",
		icon: LayoutDashboard,
		href: "/dashboard",
	},
	{
		title: "Work Experience",
		icon: Briefcase,
		href: "/work-experience",
	},
	{
		title: "Education",
		icon: GraduationCap,
		href: "/education",
	},
	{
		title: "Project",
		icon: FolderKanban,
		href: "/projects",
	},
	{
		title: "Profil",
		icon: User,
		href: "/profile",
	},
];

export const AdminLayout: React.FC<Props> = ({
	children,
	breadcrumbs = [],
}) => {
	return (
		<AppSidebarTemplate
			navUserItems={navUserItems}
			mainItems={mainItems}
			breadcrumbs={breadcrumbs}
		>
			<div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
				{children}
			</div>
		</AppSidebarTemplate>
	);
};
