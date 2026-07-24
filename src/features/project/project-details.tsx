// project-details.tsx
import { ExternalLink, Github, Globe } from "lucide-react";
import type { Project, ProjectLink } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { Badge } from "@/components/ui/badge";

type ProjectDetailsProps = {
	project: Project & { links: ProjectLink[] };
};

const linkIcon = (icon: string | null) => {
	if (icon === "github") return Github;
	if (icon === "globe") return Globe;
	return ExternalLink;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
	return (
		<div className="flex flex-col gap-5 p-2">
			{project.image && (
				<div className="h-52 w-full overflow-hidden rounded-xl border border-border shadow-sm">
					<img
						src={project.image}
						alt={project.title}
						className="h-full w-full object-cover transition-transform duration-500 hover:scale-102"
					/>
				</div>
			)}

			<div className="flex flex-col gap-1 pb-3 border-b border-border/50">
				<h3 className="text-lg font-bold text-foreground">
					{project.title}
				</h3>
				<span className="text-xs text-muted-foreground font-light">
					{formatDateRange(project.start, project.end)}
				</span>
			</div>

			{project.technologies.length > 0 && (
				<div className="flex flex-wrap gap-1.5 pt-1">
					{project.technologies.map((tech) => (
						<Badge key={tech} variant="outline" className="text-xs hover:bg-accent transition-colors">
							{tech}
						</Badge>
					))}
				</div>
			)}

			<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-light">
				{project.description}
			</p>

			{project.links.length > 0 && (
				<div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
					{project.links.map((link) => {
						const Icon = linkIcon(link.icon);
						return (
							<a
								key={link.id}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="border border-border text-muted-foreground hover:border-primary hover:text-primary-foreground hover:bg-primary flex items-center gap-1.5 rounded-lg px-3 h-9 text-xs transition-all duration-200 hover:-translate-y-0.5"
							>
								<Icon className="size-3.5" />
								<span className="capitalize">{link.type}</span>
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
};
