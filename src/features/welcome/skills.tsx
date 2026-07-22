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
		<div className="container">
			<h3 className="text-xl lg:text-2xl font-semibold mb-4">Skills</h3>
			<div className="flex flex-wrap gap-3">
				{isPending ? (
					<SkillCardSkeletonList count={10} />
				) : (
					skills?.map((skill) => <SkillCard key={skill.id} skill={skill} />)
				)}
			</div>
		</div>
	);
};
