import { Badge } from "#/components/ui/badge";
import type { Skill } from "#/generated/prisma/client";
import { excerpt } from "#/lib/string";
import { getSkillIcon } from ".";

type SkillDetailsProps = { skill: Skill };

export const SkillDetails = ({ skill }: SkillDetailsProps) => {
	const SkillIcon = getSkillIcon(skill.iconKey);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<div className="flex size-11 items-center justify-center rounded-lg border border-border bg-background ring-2 ring-border/20">
					{skill.iconKey && (
						<SkillIcon className="size-6 rounded overflow-hidden object-contain" />
					)}
				</div>
				<div className="flex flex-col">
					<h3 className="text-base font-semibold text-foreground">
						{excerpt(skill.name, 100)}
					</h3>
					<span className="text-xs text-muted-foreground">{skill.slug}</span>
				</div>
				{!skill.isPublished && (
					<Badge variant="outline" className="ml-auto">
						Non publié
					</Badge>
				)}
			</div>

			{skill.description && (
				<p className="text-sm text-muted-foreground leading-relaxed">
					{skill.description}
				</p>
			)}
		</div>
	);
};
