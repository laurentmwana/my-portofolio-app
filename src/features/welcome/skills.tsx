import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { findLatestPublishedSkillsFn } from "#/actions/skill.action";
import { ButtonLink } from "#/components/ui/button-link";
import { SkillCard } from "#/features/skill/skill-card";
import { SkillCardSkeletonList } from "#/features/skill/skill-skeleton";

export const Skills = () => {
	const { data: skills, isPending } = useQuery({
		queryKey: ["welcome_skills"],
		queryFn: async () =>
			await findLatestPublishedSkillsFn({ data: { limit: 10 } }),
	});

	return (
		<section className="space-y-5">
			<div>
				<h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-8 bg-linear-to-r from-foreground to-foreground/75 bg-clip-text text-transparent">
					Compétences
				</h3>
				<div className="flex flex-wrap gap-3 justify-start items-center">
					{isPending ? (
						<SkillCardSkeletonList count={10} />
					) : (
						skills?.map((skill) => <SkillCard key={skill.id} skill={skill} />)
					)}
				</div>
			</div>
			{skills?.length && (
				<ButtonLink href="/skills" size="sm" variant="link">
					<span>Voir plus</span>
					<ArrowRight size={16} />
				</ButtonLink>
			)}
		</section>
	);
};
