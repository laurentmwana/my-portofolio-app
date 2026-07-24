// education-details.tsx
import { ExternalLink } from "lucide-react";
import type { Education, Grade } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { Badge } from "@/components/ui/badge";

type EducationDetailsProps = {
	education: Education & { grades: Grade[] };
};

export const EducationDetails = ({ education }: EducationDetailsProps) => {
	return (
		<div className="flex flex-col gap-5 p-2">
			<div className="flex items-start gap-4">
				{education.logoUrl ? (
					<img
						src={education.logoUrl}
						alt={education.school}
						className="size-14 shrink-0 rounded-xl border border-border object-contain bg-white p-2 shadow-sm"
					/>
				) : (
					<div className="size-14 shrink-0 rounded-xl border border-border bg-muted shadow-sm" />
				)}
				<div className="flex flex-col gap-0.5">
					<a
						href={education.href ?? undefined}
						target="_blank"
						rel="noopener noreferrer"
						className="text-lg font-bold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 w-fit group"
					>
						{education.school}
						{education.href && <ExternalLink className="size-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
					</a>
					<span className="text-sm font-medium text-foreground/80">
						{education.degree}
					</span>
					<span className="text-xs text-muted-foreground font-light">
						{formatDateRange(education.start, education.end)}
					</span>
				</div>
				{!education.isPublished && (
					<Badge variant="outline" className="ml-auto text-[10px] uppercase tracking-wider border-destructive text-destructive bg-destructive/5">
						Non publié
					</Badge>
				)}
			</div>

			{education.grades.length > 0 && (
				<div className="flex flex-col gap-2.5 mt-2 bg-muted/40 p-3 rounded-lg border border-border/50">
					<h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
						Sessions / Mentions
					</h4>
					<div className="flex flex-col gap-2">
						{education.grades.map((grade) => (
							<div
								key={grade.id}
								className="flex flex-col sm:flex-row sm:items-baseline gap-1 text-sm border-l-2 border-primary/50 pl-3 py-0.5"
							>
								<span className="font-semibold text-foreground">
									{grade.name}
								</span>
								{grade.description && (
									<span className="text-muted-foreground text-xs sm:text-sm">
										{grade.description}
									</span>
								)}
							</div>
						))}
					</div>
				</div>
			)}

			{education.description && (
				<div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line border-t border-border/50 pt-3 mt-1 font-light">
					{education.description}
				</div>
			)}
		</div>
	);
};
