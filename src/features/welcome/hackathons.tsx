// #/features/welcome/hackathons.tsx
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
		<div className="container">
			<h3 className="text-xl lg:text-2xl font-semibold mb-4">Hackathons</h3>
			<div className="flex flex-col gap-3">
				{isPending ? (
					<HackathonCardSkeletonList count={5} />
				) : (
					hackathons?.map((hackathon) => (
						<HackathonCard key={hackathon.id} hackathon={hackathon} />
					))
				)}
			</div>
		</div>
	);
};
