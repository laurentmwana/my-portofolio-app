// hackathon-details.tsx
import { ExternalLink, Github, Globe, Trophy } from "lucide-react";
import type { Hackathon, HackathonLink } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { Badge } from "@/components/ui/badge";

type HackathonDetailsProps = {
	hackathon: Hackathon & { links: HackathonLink[] };
};

const linkIcon = (icon: string | null) => {
	if (icon === "github") return Github;
	if (icon === "globe") return Globe;
	return ExternalLink;
};

export const HackathonDetails = ({ hackathon }: HackathonDetailsProps) => {
	return (
		<div className="flex flex-col gap-5 p-2">
			{hackathon.image && (
				<div className="h-44 w-full overflow-hidden rounded-xl border border-border shadow-sm">
					<img
						src={hackathon.image}
						alt={hackathon.title}
						className="h-full w-full object-cover transition-transform duration-500 hover:scale-102"
					/>
				</div>
			)}

			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
				<div className="flex flex-col gap-0.5">
					<h3 className="text-lg font-bold text-foreground">
						{hackathon.title}
					</h3>
					<span className="text-xs text-muted-foreground font-light">
						{formatDateRange(hackathon.start, hackathon.end)}
						{hackathon.location && ` · ${hackathon.location}`}
					</span>
				</div>
				<div className="flex items-center gap-2 shrink-0">
					{hackathon.win && (
						<Badge variant="secondary" className="gap-1.5 py-1 hover:bg-secondary/80 transition-colors">
							<Trophy className="size-3.5 text-yellow-500" />
							<span className="font-semibold">{hackathon.win}</span>
						</Badge>
					)}
					{!hackathon.isPublished && (
						<Badge variant="outline" className="text-[10px] uppercase tracking-wider border-destructive text-destructive bg-destructive/5">Non publié</Badge>
					)}
				</div>
			</div>

			<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-light">
				{hackathon.description}
			</p>

			{hackathon.links.length > 0 && (
				<div className="flex flex-wrap items-center gap-2 pt-2">
					{hackathon.links.map((link) => {
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
								{link.title}
							</a>
						);
					})}
				</div>
			)}

			{hackathon.mlh && (
				<div className="pt-2">
					<img src={hackathon.mlh} alt="MLH badge" className="h-9 w-fit transition-transform duration-300 hover:scale-105" />
				</div>
			)}
		</div>
	);
};
