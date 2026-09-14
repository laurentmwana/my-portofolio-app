import type { ReactNode } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { Skeleton } from "./skeleton";

export type SelectOption = {
	key: string;
	label: string | ReactNode;
};

type FieldSelectProps<T extends SelectOption = SelectOption> = {
	id?: string;
	name?: string;
	value: string;
	onValueChange: (value: string) => void;
	onBlur?: () => void;
	options?: T[];
	isLoading?: boolean;
	disabled?: boolean;
	ariaInvalid?: boolean;
	placeholder?: string;
	loadingPlaceholder?: string;
};

export const FieldSelect = <T extends SelectOption = SelectOption>({
	id,
	name,
	value,
	onValueChange,
	onBlur,
	options,
	isLoading = true,
	disabled = false,
	ariaInvalid,
	placeholder = "Sélectionne une option",
	loadingPlaceholder = "Chargement…",
}: FieldSelectProps<T>) => {
	if (isLoading) {
		return (
			<Skeleton className="flex h-10 w-full items-center justify-center">
				<p className="text-xs text-center text-muted-foreground">
					{loadingPlaceholder}
				</p>
			</Skeleton>
		);
	}

	return (
		<Select
			name={name}
			value={value}
			onValueChange={(val) => onValueChange(val ?? "")}
			disabled={disabled || isLoading}
		>
			<SelectTrigger id={id} aria-invalid={ariaInvalid} onBlur={onBlur}>
				<SelectValue
					placeholder={isLoading ? loadingPlaceholder : placeholder}
				/>
			</SelectTrigger>
			<SelectContent>
				{options?.map((option) => (
					<SelectItem key={option.key} value={option.key}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
