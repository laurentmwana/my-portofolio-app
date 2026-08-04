import { FolderCode } from "lucide-react";
import type { ReactElement } from "react";
import { ButtonLink } from "#/components/ui/button-link";
import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";

type Props = {
	title?: string;
	description?: string;
	children?: ReactElement;
};

export function DefaultDataEmpty({ title, description, children }: Props) {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderCode className="size-10" />
				</EmptyMedia>
				<EmptyTitle>{title || "Aucune données"}</EmptyTitle>
				<EmptyDescription>
					{description || "Aucune données disponibles"}
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>{children}</EmptyContent>
		</Empty>
	);
}
