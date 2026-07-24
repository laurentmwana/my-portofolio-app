// hackathon-card.tsx
import { ExternalLink, Github, Globe, Trophy } from "lucide-react";
import type { Hackathon, HackathonLink } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { excerpt } from "#/lib/string";
import { Badge } from "@/components/ui/badge";

type HackathonCardProps = {
	hackathon: Hackathon & { links: HackathonLink[] };
};

const linkIcon = (icon: string | null) => {
	if (icon === "github") return Github;
	if (icon === "globe") return Globe;
	return ExternalLink;
};

export const HackathonCard = ({ hackathon }: HackathonCardProps) => {
	return (
		<div className="group flex gap-4 border border-border bg-card text-card-foreground ring-2 ring-border/10 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 ease-out">
			{hackathon.image ? (
				<img
					src={hackathon.image}
					alt={hackathon.title}
					className="size-14 shrink-0 rounded-lg border border-border object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			) : (
				<div className="size-14 shrink-0 rounded-lg border border-border bg-muted transition-colors duration-300 group-hover:bg-muted/80" />
			)}

			<div className="flex flex-col gap-1 min-w-0 flex-1">
				<div className="flex items-center justify-between gap-2">
					<h4 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-300">
						{hackathon.title}
					</h4>
					<span className="text-xs text-muted-foreground shrink-0">
						{formatDateRange(hackathon.start, hackathon.end)}
					</span>
				</div>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					{hackathon.location && <span>{hackathon.location}</span>}
					{hackathon.win && (
						<Badge variant="secondary" className="gap-1 hover:bg-secondary/80 transition-colors">
							<Trophy className="size-3 text-yellow-500" />
							{hackathon.win}
						</Badge>
					)}
				</div>
				<p className="text-sm text-muted-foreground mt-1">
					{excerpt(hackathon.description, 140)}
				</p>

				{hackathon.links.length > 0 && (
					<div className="flex items-center gap-2 mt-2">
						{hackathon.links.map((link) => {
							const Icon = linkIcon(link.icon);
							return (
								<a
									key={link.id}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.title}
									className="border border-border text-muted-foreground hover:border-primary hover:text-primary-foreground hover:bg-primary flex size-7 items-center justify-center rounded-md transition-all duration-200 hover:scale-105"
								>
									<Icon className="size-3" />
								</a>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};
