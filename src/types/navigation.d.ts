import type { LinkComponentProps } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

export type BreadcrumbItem = {
	title: string;
	href: NonNullable<LinkComponentProps["href"]>;
};

export type NavItem = {
	title: string;
	href: NonNullable<LinkComponentProps["href"]>;
	icon?: LucideIcon | null;
	isActive?: boolean;
};

export type GroupSubNavItem = {
	title: string;
	href: NonNullable<LinkComponentProps["href"]>;
	icon?: LucideIcon | null;
	isShow: boolean;
	isActive?: boolean;
};

export type GroupNavItem = {
	title: string;
	icon?: LucideIcon | null;
	isActive?: boolean;
	isShow: boolean;
	children: Array<GroupSubNavItem>;
};
