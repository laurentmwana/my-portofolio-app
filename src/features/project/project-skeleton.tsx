// project-card-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => {
	return (
		<div className="flex flex-col border border-border bg-background ring-2 ring-border/20 rounded-xl overflow-hidden">
			<Skeleton className="h-36 w-full rounded-none" />
			<div className="flex flex-col gap-2 p-4">
				<Skeleton className="h-4 w-32 rounded" />
				<Skeleton className="h-3 w-full rounded" />
				<Skeleton className="h-3 w-2/3 rounded" />
				<div className="flex gap-1.5 mt-1">
					<Skeleton className="h-5 w-14 rounded-full" />
					<Skeleton className="h-5 w-14 rounded-full" />
					<Skeleton className="h-5 w-10 rounded-full" />
				</div>
			</div>
		</div>
	);
};

type ProjectCardSkeletonListProps = { count?: number };

export const ProjectCardSkeletonList = ({
	count = 4,
}: ProjectCardSkeletonListProps) => (
	<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
		{Array.from({ length: count }).map((_, i) => (
			<ProjectCardSkeleton key={i.toString()} />
		))}
	</div>
);
