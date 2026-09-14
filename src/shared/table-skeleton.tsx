import { Skeleton } from "#/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import { cn } from "#/lib/utils";

type ColumnConfig = {
	label?: string;
	width?: string;
	withAvatar?: boolean;
};

type TableSkeletonProps = {
	columns?: number;
	columnsConfig?: ColumnConfig[];
	rows?: number;
	showHeader?: boolean;
	className?: string;
};

const DEFAULT_WIDTH = "w-24";

export function TableSkeleton({
	columns = 4,
	columnsConfig,
	rows = 6,
	showHeader = true,
	className,
}: TableSkeletonProps) {
	const resolvedColumns: ColumnConfig[] =
		columnsConfig ?? Array.from({ length: columns }, () => ({}));

	return (
		<div className={cn("container-back-office", className)}>
			<Table>
				{showHeader && (
					<TableHeader>
						<TableRow>
							{resolvedColumns.map((col, i) => (
								<TableHead key={i.toString()}>
									{col.label ?? <Skeleton className="h-4 w-20" />}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
				)}
				<TableBody>
					{Array.from({ length: rows }).map((_, rowIndex) => (
						<TableRow key={rowIndex.toString()}>
							{resolvedColumns.map((col, colIndex) => (
								<TableCell key={colIndex.toString()}>
									{col.withAvatar ? (
										<div className="flex items-center gap-3">
											<Skeleton className="h-8 w-8 rounded-full" />
											<Skeleton
												className={cn("h-4", col.width ?? DEFAULT_WIDTH)}
											/>
										</div>
									) : (
										<Skeleton
											className={cn("h-4", col.width ?? DEFAULT_WIDTH)}
										/>
									)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
