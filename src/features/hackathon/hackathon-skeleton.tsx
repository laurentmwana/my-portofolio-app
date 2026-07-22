// hackathon-card-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const HackathonCardSkeleton = () => {
	return (
		<div className="flex gap-4 border border-border bg-background ring-2 ring-border/20 rounded-xl p-4">
			<Skeleton className="size-14 shrink-0 rounded-lg" />
			<div className="flex flex-col gap-2 flex-1">
				<div className="flex items-center justify-between gap-2">
					<Skeleton className="h-4 w-40 rounded" />
					<Skeleton className="h-3 w-24 rounded" />
				</div>
				<Skeleton className="h-3 w-28 rounded" />
				<Skeleton className="h-3 w-full rounded mt-1" />
				<Skeleton className="h-3 w-2/3 rounded" />
			</div>
		</div>
	);
};

type HackathonCardSkeletonListProps = { count?: number };

export const HackathonCardSkeletonList = ({
	count = 5,
}: HackathonCardSkeletonListProps) => (
	<div className="flex flex-col gap-3">
		{Array.from({ length: count }).map((_, i) => (
			<HackathonCardSkeleton key={i.toString()} />
		))}
	</div>
);
