// #/features/welcome/educations.tsx
import { useQuery } from "@tanstack/react-query";
import { findLatestPublishedEducationsFn } from "#/actions/education.action";
import { EducationCard } from "#/features/education/education-card";
import { EducationCardSkeletonList } from "../education/education-skeleton";

export const Educations = () => {
	const { data: educations, isPending } = useQuery({
		queryKey: ["welcome_educations"],
		queryFn: async () =>
			await findLatestPublishedEducationsFn({ data: { limit: 10 } }),
	});

	return (
		<div className="container">
			<h3 className="text-xl lg:text-2xl font-semibold mb-4">Formation</h3>
			<div className="flex flex-col gap-3">
				{isPending ? (
					<EducationCardSkeletonList count={3} />
				) : (
					educations?.map((education) => (
						<EducationCard key={education.id} education={education} />
					))
				)}
			</div>
		</div>
	);
};
