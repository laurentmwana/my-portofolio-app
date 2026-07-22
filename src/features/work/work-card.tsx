import type { Work } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { excerpt } from "#/lib/string";

type WorkCardProps = { work: Work };

export const WorkCard = ({ work }: WorkCardProps) => {
	return (
		<div className="flex gap-4 border border-border bg-background ring-2 ring-border/20 rounded-xl p-4">
			{work.logoUrl ? (
				<img
					src={work.logoUrl}
					alt={work.company}
					className="size-11 shrink-0 rounded-lg border border-border object-contain bg-white p-1.5"
				/>
			) : (
				<div className="size-11 shrink-0 rounded-lg border border-border bg-muted" />
			)}

			<div className="flex flex-col gap-1 min-w-0">
				<div className="flex items-center justify-between gap-2">
					<h4 className="text-sm font-semibold text-foreground truncate">
						{work.title}
					</h4>
					<span className="text-xs text-muted-foreground shrink-0">
						{formatDateRange(work.start, work.end)}
					</span>
				</div>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<span className="font-medium text-foreground">{work.company}</span>
					{work.location && <span>· {work.location}</span>}
				</div>
				{work.description && (
					<p className="text-sm text-muted-foreground mt-1">
						{excerpt(work.description, 160)}
					</p>
				)}
			</div>
		</div>
	);
};
