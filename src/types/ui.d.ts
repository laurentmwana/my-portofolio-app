import type { ReactNode } from "react";
import type { BreadcrumbItem, NavItem } from "@/types/navigation";

export type AppLayoutProps = {
	children: ReactNode;
	breadcrumbs?: BreadcrumbItem[];
	mainItems?: GroupNavItem[];
	navUserItems?: NavItem[];
};

export type AppVariant = "header" | "sidebar";

export type AuthLayoutProps = {
	children?: ReactNode;
	name?: string;
	title?: string;
	description?: string;
};
