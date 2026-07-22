import { useQuery } from "@tanstack/react-query";
import { findLatestPublishedWorksFn } from "#/actions/work.action";
import { WorkCard } from "#/features/work/work-card";
import { WorkCardSkeletonList } from "../work/work-skeleton";

export const Works = () => {
	const { data: works, isPending } = useQuery({
		queryKey: ["welcome_works"],
		queryFn: async () =>
			await findLatestPublishedWorksFn({ data: { limit: 10 } }),
	});

	return (
		<div className="container">
			<h3 className="text-xl lg:text-2xl font-semibold mb-4">Expérience</h3>
			<div className="flex flex-col gap-3">
				{isPending ? (
					<WorkCardSkeletonList count={4} />
				) : (
					works?.map((work) => <WorkCard key={work.id} work={work} />)
				)}
			</div>
		</div>
	);
};
