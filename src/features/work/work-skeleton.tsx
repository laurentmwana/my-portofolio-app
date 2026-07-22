import { Skeleton } from "@/components/ui/skeleton";

export const WorkCardSkeleton = () => {
	return (
		<div className="flex gap-4 border border-border bg-background ring-2 ring-border/20 rounded-xl p-4">
			<Skeleton className="size-11 shrink-0 rounded-lg" />
			<div className="flex flex-col gap-2 flex-1">
				<div className="flex items-center justify-between gap-2">
					<Skeleton className="h-4 w-40 rounded" />
					<Skeleton className="h-3 w-24 rounded" />
				</div>
				<Skeleton className="h-3 w-32 rounded" />
				<Skeleton className="h-3 w-full rounded mt-1" />
				<Skeleton className="h-3 w-2/3 rounded" />
			</div>
		</div>
	);
};

type WorkCardSkeletonListProps = { count?: number };

export const WorkCardSkeletonList = ({
	count = 4,
}: WorkCardSkeletonListProps) => (
	<div className="flex flex-col gap-3">
		{Array.from({ length: count }).map((_, i) => (
			<WorkCardSkeleton key={i.toString()} />
		))}
	</div>
);
