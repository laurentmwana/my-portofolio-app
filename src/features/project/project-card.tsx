// project-card.tsx
import { ExternalLink, Github, Globe } from "lucide-react";
import type { Project, ProjectLink } from "#/generated/prisma/client";
import { excerpt } from "#/lib/string";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
	project: Project & { links: ProjectLink[] };
};

const linkIcon = (icon: string | null) => {
	if (icon === "github") return Github;
	if (icon === "globe") return Globe;
	return ExternalLink;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<div className="flex flex-col border border-border bg-background ring-2 ring-border/20 rounded-xl overflow-hidden">
			{project.image && (
				<img
					src={project.image}
					alt={project.title}
					className="h-36 w-full object-cover border-b border-border"
				/>
			)}

			<div className="flex flex-col gap-2 p-4">
				<div className="flex items-center justify-between gap-2">
					<h4 className="text-sm font-semibold text-foreground truncate">
						{project.title}
					</h4>
				</div>

				<p className="text-sm text-muted-foreground">
					{excerpt(project.description, 140)}
				</p>

				{project.technologies.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mt-1">
						{project.technologies.slice(0, 5).map((tech) => (
							<Badge key={tech} variant="outline">
								{tech}
							</Badge>
						))}
					</div>
				)}

				{project.links.length > 0 && (
					<div className="flex items-center gap-2 mt-2">
						{project.links.map((link) => {
							const Icon = linkIcon(link.icon);
							return (
								<a
									key={link.id}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.type}
									className="border border-border text-muted-foreground hover:border-primary hover:text-foreground flex size-8 items-center justify-center rounded-md transition-colors"
								>
									<Icon className="size-3.5" />
								</a>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};
