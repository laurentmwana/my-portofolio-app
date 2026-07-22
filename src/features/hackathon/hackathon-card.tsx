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
		<div className="flex gap-4 border border-border bg-background ring-2 ring-border/20 rounded-xl p-4">
			{hackathon.image ? (
				<img
					src={hackathon.image}
					alt={hackathon.title}
					className="size-14 shrink-0 rounded-lg border border-border object-cover"
				/>
			) : (
				<div className="size-14 shrink-0 rounded-lg border border-border bg-muted" />
			)}

			<div className="flex flex-col gap-1 min-w-0 flex-1">
				<div className="flex items-center justify-between gap-2">
					<h4 className="text-sm font-semibold text-foreground truncate">
						{hackathon.title}
					</h4>
					<span className="text-xs text-muted-foreground shrink-0">
						{formatDateRange(hackathon.start, hackathon.end)}
					</span>
				</div>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					{hackathon.location && <span>{hackathon.location}</span>}
					{hackathon.win && (
						<Badge variant="secondary" className="gap-1">
							<Trophy className="size-3" />
							{hackathon.win}
						</Badge>
					)}
				</div>
				<p className="text-sm text-muted-foreground mt-1">
					{excerpt(hackathon.description, 140)}
				</p>

				{hackathon.links.length > 0 && (
					<div className="flex items-center gap-2 mt-1">
						{hackathon.links.map((link) => {
							const Icon = linkIcon(link.icon);
							return (
								<a
									key={link.id}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.title}
									className="border border-border text-muted-foreground hover:border-primary hover:text-foreground flex size-7 items-center justify-center rounded-md transition-colors"
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
