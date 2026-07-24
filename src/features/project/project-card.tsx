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
		<div className="group flex flex-col border border-border bg-card text-card-foreground ring-2 ring-border/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 ease-out">
			{project.image && (
				<div className="h-36 w-full overflow-hidden border-b border-border">
					<img
						src={project.image}
						alt={project.title}
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>
			)}

			<div className="flex flex-col gap-2 p-4 flex-1">
				<div className="flex items-center justify-between gap-2">
					<h4 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-300">
						{project.title}
					</h4>
				</div>

				<p className="text-sm text-muted-foreground line-clamp-3">
					{excerpt(project.description, 140)}
				</p>

				{project.technologies.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mt-auto pt-2">
						{project.technologies.slice(0, 5).map((tech) => (
							<Badge key={tech} variant="outline" className="text-[10px] py-0 px-1.5 hover:bg-accent transition-colors">
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
									className="border border-border text-muted-foreground hover:border-primary hover:text-primary-foreground hover:bg-primary flex size-8 items-center justify-center rounded-md transition-all duration-200 hover:scale-105"
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
