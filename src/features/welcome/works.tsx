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
		<section>
			<h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-8 bg-linear-to-r from-foreground to-foreground/75 bg-clip-text text-transparent">
				Expérience professionnelle
			</h3>
			<div className="flex flex-col gap-4">
				{isPending ? (
					<WorkCardSkeletonList count={4} />
				) : (
					works?.map((work) => <WorkCard key={work.id} work={work} />)
				)}
			</div>
		</section>
	);
};
