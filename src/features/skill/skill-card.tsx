import { Link } from "@tanstack/react-router";
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
				delay={10}
				closeDelay={100}
				render={
					<div className="cursor-pointer border hover:border-primary bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
						{skill.iconKey && (
							<SkillIcon className="size-4 rounded overflow-hidden object-contain" />
						)}
						<span className="text-foreground text-sm font-medium">
							{skill.name}
						</span>
					</div>
				}
			/>
			<HoverCardContent className="flex w-64 flex-col gap-0.5">
				<div className="flex gap-2 mb-4">
					{skill.iconKey && (
						<SkillIcon className="size-4 rounded overflow-hidden object-contain" />
					)}
					{excerpt(skill.name, 100)}
				</div>
				<p className="text-sm text-muted-foreground">{skill.description}</p>
			</HoverCardContent>
		</HoverCard>
	);
};
