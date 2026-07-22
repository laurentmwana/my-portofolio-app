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
		<div className="flex flex-col gap-4">
			<div className="flex items-start gap-3">
				{education.logoUrl ? (
					<img
						src={education.logoUrl}
						alt={education.school}
						className="size-12 shrink-0 rounded-lg border border-border object-contain bg-white p-1.5"
					/>
				) : (
					<div className="size-12 shrink-0 rounded-lg border border-border bg-muted" />
				)}
				<div className="flex flex-col">
					<a
						href={education.href ?? undefined}
						target="_blank"
						rel="noopener noreferrer"
						className="text-base font-semibold text-foreground hover:underline inline-flex items-center gap-1 w-fit"
					>
						{education.school}
						{education.href && <ExternalLink className="size-3" />}
					</a>
					<span className="text-sm text-muted-foreground">
						{education.degree}
					</span>
					<span className="text-xs text-muted-foreground mt-0.5">
						{formatDateRange(education.start, education.end)}
					</span>
				</div>
				{!education.isPublished && (
					<Badge variant="outline" className="ml-auto">
						Non publié
					</Badge>
				)}
			</div>

			{education.grades.length > 0 && (
				<div className="flex flex-col gap-2">
					<h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
						Sessions / mentions
					</h4>
					<div className="flex flex-col gap-1.5">
						{education.grades.map((grade) => (
							<div
								key={grade.id}
								className="flex items-start gap-2 text-sm border-l-2 border-border pl-3"
							>
								<span className="font-medium text-foreground">
									{grade.name}
								</span>
								{grade.description && (
									<span className="text-muted-foreground">
										— {grade.description}
									</span>
								)}
							</div>
						))}
					</div>
				</div>
			)}

			{education.description && (
				<p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
					{education.description}
				</p>
			)}
		</div>
	);
};
