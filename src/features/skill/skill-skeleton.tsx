import { Skeleton } from "@/components/ui/skeleton";

type SkillCardSkeletonProps = { width?: number };

export const SkillCardSkeleton = ({ width = 96 }: SkillCardSkeletonProps) => {
	return (
		<div
			className="border border-border bg-background ring-2 ring-border/20 rounded-xl h-8 px-4 flex items-center gap-2"
			style={{ width }}
		>
			<Skeleton className="size-4 rounded shrink-0" />
			<Skeleton className="h-3.5 w-full rounded" />
		</div>
	);
};

type SkillCardSkeletonListProps = { count?: number };

export const SkillCardSkeletonList = ({
	count = 6,
}: SkillCardSkeletonListProps) => {
	const widths = [88, 112, 76, 104, 92, 120];

	return (
		<div className="flex flex-wrap gap-2">
			{Array.from({ length: count }).map((_, i) => (
				<SkillCardSkeleton
					key={i.toString()}
					width={widths[i % widths.length]}
				/>
			))}
		</div>
	);
};
