import { useQuery } from "@tanstack/react-query";
import { findLatestPublishedSkillsFn } from "#/actions/skill.action";
import { SkillCard } from "#/features/skill/skill-card";
import { SkillCardSkeletonList } from "#/features/skill/skill-skeleton";

export const Skills = () => {
	const { data: skills, isPending } = useQuery({
		queryKey: ["welcome_skills"],
		queryFn: async () =>
			await findLatestPublishedSkillsFn({ data: { limit: 10 } }),
	});

	return (
		<section>
			<h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-foreground to-foreground/75 bg-clip-text text-transparent">
				Compétences
			</h3>
			<div className="flex flex-wrap gap-3 justify-start items-center">
				{isPending ? (
					<SkillCardSkeletonList count={10} />
				) : (
					skills?.map((skill) => <SkillCard key={skill.id} skill={skill} />)
				)}
			</div>
		</section>
	);
};
