import type { Education, Grade } from "#/generated/prisma/client";
import { formatDateRange } from "#/lib/format-date";
import { Badge } from "@/components/ui/badge";

type EducationCardProps = {
	education: Education & { grades: Grade[] };
};

export const EducationCard = ({ education }: EducationCardProps) => {
	return (
		<div className="flex gap-4 border border-border bg-background ring-2 ring-border/20 rounded-xl p-4">
			{education.logoUrl ? (
				<img
					src={education.logoUrl}
					alt={education.school}
					className="size-11 shrink-0 rounded-lg border border-border object-contain bg-white p-1.5"
				/>
			) : (
				<div className="size-11 shrink-0 rounded-lg border border-border bg-muted" />
			)}

			<div className="flex flex-col gap-1 min-w-0">
				<div className="flex items-center justify-between gap-2">
					<h4 className="text-sm font-semibold text-foreground truncate">
						{education.school}
					</h4>
					<span className="text-xs text-muted-foreground shrink-0">
						{formatDateRange(education.start, education.end)}
					</span>
				</div>
				<span className="text-xs text-muted-foreground">
					{education.degree}
				</span>

				{education.grades.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mt-1">
						{education.grades.map((grade) => (
							<Badge key={grade.id} variant="secondary">
								{grade.name}
							</Badge>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
