import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Breadcrumb = {
	label: string;
	href?: string;
};

export const Banner = ({
	title,
	description,
	breadcrumbs,
	actions,
}: {
	title: string;
	description?: string;
	breadcrumbs?: Breadcrumb[];
	actions?: ReactNode;
}) => {
	return (
		<section className="relative w-full pt-16 pb-10 md:pt-20 md:pb-10 mb-6">
			<div className="pointer-events-none absolute -top-16 right-0 size-60 bg-primary/10 blur-[90px]" />

			<div className="container relative">
				{breadcrumbs && breadcrumbs.length > 0 && (
					<nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
						{breadcrumbs.map((crumb, i) => (
							<span key={crumb.label} className="flex items-center gap-1.5">
								{i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
								{crumb.href ? (
									<Link
										to={crumb.href}
										className="transition-colors hover:text-foreground"
									>
										{crumb.label}
									</Link>
								) : (
									<span className="font-medium text-foreground">
										{crumb.label}
									</span>
								)}
							</span>
						))}
					</nav>
				)}

				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div>
						<h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
							{title}
						</h1>
						{description && (
							<p className="mt-3 max-w-xl text-muted-foreground">
								{description}
							</p>
						)}
					</div>

					{actions && (
						<div className="flex shrink-0 items-center gap-3">{actions}</div>
					)}
				</div>
			</div>
		</section>
	);
};
