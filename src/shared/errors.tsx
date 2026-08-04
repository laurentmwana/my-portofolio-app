import { FolderCode } from "lucide-react";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";

export function ServerError({
	title,
	message,
}: {
	message?: string | null;
	title: string;
}) {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderCode className="size-10" />
				</EmptyMedia>
				<EmptyTitle>{title}</EmptyTitle>
				<EmptyDescription>
					{message ?? "Une erreur est survenue, merci de réessayer plus tard."}
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	);
}
