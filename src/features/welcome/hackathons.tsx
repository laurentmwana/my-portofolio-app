import { useQuery } from "@tanstack/react-query";
import { findLatestPublishedHackathonsFn } from "#/actions/hackthon.action";
import { HackathonCard } from "#/features/hackathon/hackathon-card";
import { HackathonCardSkeletonList } from "../hackathon/hackathon-skeleton";

export const Hackathons = () => {
	const { data: hackathons, isPending } = useQuery({
		queryKey: ["welcome_hackathons"],
		queryFn: async () =>
			await findLatestPublishedHackathonsFn({ data: { limit: 10 } }),
	});

	return (
		<section>
			<h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-8 bg-linear-to-r from-foreground to-foreground/75 bg-clip-text text-transparent">
				Hackathons
			</h3>
			<div className="flex flex-col gap-4">
				{isPending ? (
					<HackathonCardSkeletonList count={5} />
				) : (
					hackathons?.map((hackathon) => (
						<HackathonCard key={hackathon.id} hackathon={hackathon} />
					))
				)}
			</div>
		</section>
	);
};
