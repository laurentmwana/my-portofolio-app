import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "#/components/ui/dialog";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "#/components/ui/hover-card";
import { getSkillIcon } from "#/constants/skill";
import type { Skill } from "#/generated/prisma/client";
import { ago } from "#/lib/format-date";
import { excerpt } from "#/lib/string";

type SkillCardProps = { skill: Skill };

export const SkillCard = ({ skill }: SkillCardProps) => {
	const SkillIcon = getSkillIcon(skill.iconKey);

	return (
		<HoverCard>
			<HoverCardTrigger
				delay={150}
				closeDelay={100}
				render={
					<div className="group cursor-pointer border hover:border-primary/50 bg-card text-card-foreground border-border ring-2 ring-border/5 rounded-xl h-9 w-fit px-4 flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-sm">
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
				{skill.description && (
					<p className="text-xs text-muted-foreground leading-relaxed mt-1">
						{skill.description}
					</p>
				)}
			</HoverCardContent>
		</HoverCard>
	);
};

type SkillCollectionCardProps = { skill: Skill };

export const SkillCollectionCard = ({ skill }: SkillCollectionCardProps) => {
	const SkillIcon = getSkillIcon(skill.iconKey);

	return (
		<div className="group bg-card p-4 rounded-md border border-transparent transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-sm">
			<div className="flex items-center gap-4">
				{skill.iconKey && (
					<SkillIcon className="size-6 shrink-0 rounded overflow-hidden object-contain transition-transform duration-200 group-hover:scale-110" />
				)}
				<span className="text-foreground text-xl font-medium">
					{excerpt(skill.name, 40)}
				</span>
			</div>
			<div className="mt-2 space-y-1">
				<p className="text-sm text-muted-foreground">{ago(skill.createdAt)}</p>
				{skill.description && (
					<p className="text-sm text-foreground/90 leading-relaxed">
						{skill.description}
					</p>
				)}
			</div>
		</div>
	);
};

type SkillGridCardProps = { skill: Skill };

export const SkillGridCard = ({ skill }: SkillGridCardProps) => {
	const SkillIcon = getSkillIcon(skill.iconKey);

	return (
		<Dialog>
			<DialogTrigger
				nativeButton={false}
				render={
					<div className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
						<div
							aria-hidden
							className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10"
						/>

						<div className="relative flex items-start justify-between gap-3">
							<div className="flex items-center gap-3">
								{skill.iconKey && (
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
										<SkillIcon className="size-5 rounded overflow-hidden object-contain" />
									</div>
								)}
								<span className="text-foreground text-base font-semibold leading-tight">
									{excerpt(skill.name, 40)}
								</span>
							</div>

							<span className="shrink-0 rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground">
								{ago(skill.createdAt)}
							</span>
						</div>

						{skill.description && (
							<p className="relative mt-3 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
								{skill.description}
							</p>
						)}
					</div>
				}
			/>

			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<div className="flex items-center gap-3">
						{skill.iconKey && (
							<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
								<SkillIcon className="size-6 rounded overflow-hidden object-contain" />
							</div>
						)}
						<div className="flex flex-col gap-0.5">
							<DialogTitle className="text-lg">{skill.name}</DialogTitle>
							<span className="text-xs text-muted-foreground">
								Ajoutée {ago(skill.createdAt)}
							</span>
						</div>
					</div>
				</DialogHeader>

				<div className="mt-2 space-y-3">
					{skill.description ? (
						<p className="text-sm text-foreground/90 leading-relaxed">
							{skill.description}
						</p>
					) : (
						<p className="text-sm text-muted-foreground italic">
							Aucune description pour cette compétence.
						</p>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};
