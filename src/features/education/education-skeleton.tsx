// education-card-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const EducationCardSkeleton = () => {
	return (
		<div className="flex gap-4 border border-border bg-background ring-2 ring-border/20 rounded-xl p-4">
			<Skeleton className="size-11 shrink-0 rounded-lg" />
			<div className="flex flex-col gap-2 flex-1">
				<div className="flex items-center justify-between gap-2">
					<Skeleton className="h-4 w-48 rounded" />
					<Skeleton className="h-3 w-24 rounded" />
				</div>
				<Skeleton className="h-3 w-56 rounded" />
				<div className="flex gap-1.5 mt-1">
					<Skeleton className="h-5 w-12 rounded-full" />
					<Skeleton className="h-5 w-12 rounded-full" />
					<Skeleton className="h-5 w-14 rounded-full" />
				</div>
			</div>
		</div>
	);
};

type EducationCardSkeletonListProps = { count?: number };

export const EducationCardSkeletonList = ({
	count = 3,
}: EducationCardSkeletonListProps) => (
	<div className="flex flex-col gap-3">
		{Array.from({ length: count }).map((_, i) => (
			<EducationCardSkeleton key={i.toString()} />
		))}
	</div>
);
