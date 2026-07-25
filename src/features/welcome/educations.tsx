import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { findLatestPublishedEducationsFn } from "#/actions/education.action";
import { ButtonLink } from "#/components/ui/button-link";
import { EducationCard } from "#/features/education/education-card";
import { EducationCardSkeletonList } from "../education/education-skeleton";

export const Educations = () => {
	const { data: educations, isPending } = useQuery({
		queryKey: ["welcome_educations"],
		queryFn: async () =>
			await findLatestPublishedEducationsFn({ data: { limit: 10 } }),
	});

	return (
		<section className="space-y-5">
			<div>
				<h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-8 bg-linear-to-r from-foreground to-foreground/75 bg-clip-text text-transparent">
					Formation & Études
				</h3>
				<div className="flex flex-col gap-4">
					{isPending ? (
						<EducationCardSkeletonList count={3} />
					) : (
						educations?.map((education) => (
							<EducationCard key={education.id} education={education} />
						))
					)}
				</div>
			</div>
			<div>
				{educations?.length && (
					<ButtonLink href="/educations" size="sm" variant="link">
						<span>Voir plus</span>
						<ArrowRight size={16} />
					</ButtonLink>
				)}
			</div>
		</section>
	);
};
