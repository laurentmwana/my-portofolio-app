import type { Skill } from "#/generated/prisma/client";
import { excerpt } from "#/lib/string";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getSkillIcon } from ".";

type SkillCardProps = { skill: Skill };

export const SkillCard = ({ skill }: SkillCardProps) => {
	const SkillIcon = getSkillIcon(skill.iconKey);

	return (
		<HoverCard>
			<HoverCardTrigger
				delay={150}
				closeDelay={100}
				render={
					<div className="cursor-pointer border hover:border-primary/50 bg-card text-card-foreground border-border ring-2 ring-border/5 rounded-xl h-9 w-fit px-4 flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-sm">
						{skill.iconKey && (
							<SkillIcon className="size-4 rounded overflow-hidden object-contain transition-transform duration-200 group-hover:scale-110" />
						)}
						<span className="text-foreground text-sm font-medium">
							{excerpt(skill.name, 40)}
						</span>
					</div>
				}
			/>
			<HoverCardContent className="flex w-72 flex-col gap-1.5 p-4 rounded-xl border border-border bg-popover text-popover-foreground shadow-lg animate-in fade-in-50 zoom-in-95 duration-200">
				<div className="flex items-center gap-2 pb-2 border-b border-border/50">
					{skill.iconKey && (
						<SkillIcon className="size-5 rounded overflow-hidden object-contain" />
					)}
					<span className="text-sm font-semibold text-foreground">
						{excerpt(skill.name, 100)}
					</span>
				</div>
				<p className="text-xs text-muted-foreground leading-relaxed mt-1">{skill.description}</p>
			</HoverCardContent>
		</HoverCard>
	);
};
