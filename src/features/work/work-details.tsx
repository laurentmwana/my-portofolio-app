import { ExternalLink } from "lucide-react";
import type { Work } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { Badge } from "@/components/ui/badge";

type WorkDetailsProps = { work: Work };

export const WorkDetails = ({ work }: WorkDetailsProps) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-start gap-3">
				{work.logoUrl ? (
					<img
						src={work.logoUrl}
						alt={work.company}
						className="size-12 shrink-0 rounded-lg border border-border object-contain bg-white p-1.5"
					/>
				) : (
					<div className="size-12 shrink-0 rounded-lg border border-border bg-muted" />
				)}
				<div className="flex flex-col">
					<h3 className="text-base font-semibold text-foreground">
						{work.title}
					</h3>
					<a
						href={work.href ?? undefined}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 w-fit"
					>
						{work.company}
						{work.href && <ExternalLink className="size-3" />}
					</a>
					<span className="text-xs text-muted-foreground mt-0.5">
						{formatDateRange(work.start, work.end)}
						{work.location && ` · ${work.location}`}
					</span>
				</div>
				{!work.isPublished && (
					<Badge variant="outline" className="ml-auto">
						Non publié
					</Badge>
				)}
			</div>

			{work.badges.length > 0 && (
				<div className="flex flex-wrap gap-1.5">
					{work.badges.map((badge) => (
						<Badge key={badge} variant="secondary">
							{badge}
						</Badge>
					))}
				</div>
			)}

			<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
				{work.description}
			</p>
		</div>
	);
};
