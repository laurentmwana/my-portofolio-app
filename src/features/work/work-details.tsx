import { ExternalLink } from "lucide-react";
import type { Work } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { Badge } from "@/components/ui/badge";

type WorkDetailsProps = { work: Work };

export const WorkDetails = ({ work }: WorkDetailsProps) => {
	return (
		<div className="flex flex-col gap-5 p-2">
			<div className="flex items-start gap-4">
				{work.logoUrl ? (
					<img
						src={work.logoUrl}
						alt={work.company}
						className="size-14 shrink-0 rounded-xl border border-border object-contain bg-white p-2 shadow-sm"
					/>
				) : (
					<div className="size-14 shrink-0 rounded-xl border border-border bg-muted shadow-sm" />
				)}
				<div className="flex flex-col gap-0.5">
					<h3 className="text-lg font-bold text-foreground leading-tight">
						{work.title}
					</h3>
					<a
						href={work.href ?? undefined}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1 w-fit group"
					>
						{work.company}
						{work.href && <ExternalLink className="size-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
					</a>
					<span className="text-xs text-muted-foreground font-light">
						{formatDateRange(work.start, work.end)}
						{work.location && ` · ${work.location}`}
					</span>
				</div>
				{!work.isPublished && (
					<Badge variant="outline" className="ml-auto text-[10px] uppercase tracking-wider border-destructive text-destructive bg-destructive/5">
						Non publié
					</Badge>
				)}
			</div>

			{work.badges.length > 0 && (
				<div className="flex flex-wrap gap-1.5 pt-1">
					{work.badges.map((badge) => (
						<Badge key={badge} variant="secondary" className="hover:bg-secondary/80 transition-colors">
							{badge}
						</Badge>
					))}
				</div>
			)}

			<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line border-t border-border/50 pt-3 mt-1 font-light">
				{work.description}
			</p>
		</div>
	);
};
