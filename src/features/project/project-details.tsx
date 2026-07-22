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
		<div className="flex flex-col gap-4">
			{project.image && (
				<img
					src={project.image}
					alt={project.title}
					className="h-48 w-full object-cover rounded-lg border border-border"
				/>
			)}

			<div className="flex items-start justify-between gap-2">
				<div className="flex flex-col">
					<h3 className="text-base font-semibold text-foreground">
						{project.title}
					</h3>
					<span className="text-xs text-muted-foreground">
						{formatDateRange(project.start, project.end)}
					</span>
				</div>
			</div>

			{project.technologies.length > 0 && (
				<div className="flex flex-wrap gap-1.5">
					{project.technologies.map((tech) => (
						<Badge key={tech} variant="outline">
							{tech}
						</Badge>
					))}
				</div>
			)}

			<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
				{project.description}
			</p>

			{project.links.length > 0 && (
				<div className="flex items-center gap-2">
					{project.links.map((link) => {
						const Icon = linkIcon(link.icon);
						return (
							<a
								key={link.id}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="border border-border text-muted-foreground hover:border-primary hover:text-foreground flex items-center gap-1.5 rounded-md px-3 h-8 text-xs transition-colors"
							>
								<Icon className="size-3.5" />
								{link.type}
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
};
