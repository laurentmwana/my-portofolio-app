import type { ReactNode } from "react";
import type { AppVariant } from "#/types/ui";
import { SidebarProvider } from "@/components/ui/sidebar";

type Props = {
	children: ReactNode;
	variant?: AppVariant;
};

export function AppSidebarShell({ children, variant = "sidebar" }: Props) {
	if (variant === "header") {
		return <div className="flex min-h-screen w-full flex-col">{children}</div>;
	}

	return <SidebarProvider defaultOpen={true}>{children}</SidebarProvider>;
}
