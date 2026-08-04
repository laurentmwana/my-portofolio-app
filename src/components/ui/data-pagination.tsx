import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "#/components/ui/pagination";
import { cn } from "#/lib/utils";

interface DataPaginationProps {
	href?: string;
	page: number;
	itemsPerPage: number;
	totalItems: number;
	onPageChange: (page: number) => void;
	className?: string;
}

export function DataPagination({
	href = "#",
	page,
	itemsPerPage,
	totalItems,
	onPageChange,
	className,
}: DataPaginationProps) {
	const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

	if (totalPages <= 1) return null;

	const pages = getPageRange(page, totalPages);

	return (
		<div className={cn("my-5", className)}>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href={href}
							text="Précédent"
							onClick={(e) => {
								e.preventDefault();
								if (page > 1) onPageChange(page - 1);
							}}
							className={
								page <= 1 ? "pointer-events-none opacity-50" : undefined
							}
						/>
					</PaginationItem>

					{pages.map((p, i) =>
						p === "ellipsis" ? (
							<PaginationItem key={`ellipsis-${i.toString()}`}>
								<PaginationEllipsis />
							</PaginationItem>
						) : (
							<PaginationItem key={p}>
								<PaginationLink
									isActive={p === page}
									onClick={(e) => {
										e.preventDefault();
										onPageChange(p);
									}}
								>
									{p}
								</PaginationLink>
							</PaginationItem>
						),
					)}

					<PaginationItem>
						<PaginationNext
							text="Suivant"
							onClick={(e) => {
								e.preventDefault();
								if (page < totalPages) onPageChange(page + 1);
							}}
							className={
								page >= totalPages
									? "pointer-events-none opacity-50"
									: undefined
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}

function getPageRange(current: number, total: number): (number | "ellipsis")[] {
	const delta = 1;
	const range: (number | "ellipsis")[] = [];
	const left = Math.max(2, current - delta);
	const right = Math.min(total - 1, current + delta);

	range.push(1);
	if (left > 2) range.push("ellipsis");
	for (let i = left; i <= right; i++) range.push(i);
	if (right < total - 1) range.push("ellipsis");
	if (total > 1) range.push(total);

	return range;
}
