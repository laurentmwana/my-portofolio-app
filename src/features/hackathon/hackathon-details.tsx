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
		<div className="flex flex-col gap-4">
			{hackathon.image && (
				<img
					src={hackathon.image}
					alt={hackathon.title}
					className="h-40 w-full object-cover rounded-lg border border-border"
				/>
			)}

			<div className="flex items-start justify-between gap-2">
				<div className="flex flex-col">
					<h3 className="text-base font-semibold text-foreground">
						{hackathon.title}
					</h3>
					<span className="text-xs text-muted-foreground">
						{formatDateRange(hackathon.start, hackathon.end)}
						{hackathon.location && ` · ${hackathon.location}`}
					</span>
				</div>
				<div className="flex items-center gap-2 shrink-0">
					{hackathon.win && (
						<Badge variant="secondary" className="gap-1">
							<Trophy className="size-3" />
							{hackathon.win}
						</Badge>
					)}
					{!hackathon.isPublished && (
						<Badge variant="outline">Non publié</Badge>
					)}
				</div>
			</div>

			<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
				{hackathon.description}
			</p>

			{hackathon.links.length > 0 && (
				<div className="flex items-center gap-2">
					{hackathon.links.map((link) => {
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
								{link.title}
							</a>
						);
					})}
				</div>
			)}

			{hackathon.mlh && (
				<img src={hackathon.mlh} alt="MLH badge" className="h-8 w-fit" />
			)}
		</div>
	);
};
