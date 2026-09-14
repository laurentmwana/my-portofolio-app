"use client";

import { Search, X } from "lucide-react";
import {
	forwardRef,
	type InputHTMLAttributes,
	type ReactNode,
	useId,
	useImperativeHandle,
	useRef,
} from "react";
import { cn } from "#/lib/utils";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
	containerClassName?: string;
	icon?: ReactNode;
	clearable?: boolean;
	onClear?: () => void;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	(
		{
			className,
			containerClassName,
			type = "search",
			icon,
			clearable = true,
			onClear,
			value,
			defaultValue,
			disabled,
			...props
		},
		ref,
	) => {
		const innerRef = useRef<HTMLInputElement>(null);
		useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

		const id = useId();
		const hasValue = value != null ? String(value).length > 0 : undefined; // contrôlé
		const showClear = clearable && !disabled;

		const handleClear = () => {
			const el = innerRef.current;
			if (el) {
				// Déclenche un vrai event input/change pour React
				const setter = Object.getOwnPropertyDescriptor(
					window.HTMLInputElement.prototype,
					"value",
				)?.set;
				setter?.call(el, "");
				el.dispatchEvent(new Event("input", { bubbles: true }));
				el.focus();
			}
			onClear?.();
		};

		return (
			<div
				className={cn(
					"group relative flex items-center w-full",
					containerClassName,
				)}
			>
				<span className="pointer-events-none absolute left-3 flex items-center text-muted-foreground transition-colors group-focus-within:text-foreground">
					{icon ?? <Search className="size-4 sm:size-5" aria-hidden="true" />}
				</span>

				<input
					id={id}
					type={type}
					ref={innerRef}
					value={value}
					defaultValue={defaultValue}
					disabled={disabled}
					className={cn(
						"flex h-9 w-full rounded-md border border-input bg-background",
						"pl-9 sm:pl-11 pr-9 py-2",
						"text-sm sm:text-base ring-offset-background",
						"placeholder:text-muted-foreground",
						"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
						"disabled:cursor-not-allowed disabled:opacity-50",
						// masque la croix native de <input type=search>
						"[&::-webkit-search-cancel-button]:appearance-none",
						className,
					)}
					{...props}
				/>

				{showClear && (hasValue ?? true) && (
					<button
						type="button"
						onClick={handleClear}
						aria-label="Effacer la recherche"
						tabIndex={-1}
						className={cn(
							"absolute right-2 flex size-6 items-center justify-center rounded-sm",
							"text-muted-foreground hover:text-foreground",
							"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
							// caché tant que le champ est vide (mode non-contrôlé)
							"opacity-0 transition-opacity",
							"peer-focus:opacity-100 group-focus-within:opacity-100",
						)}
					>
						<X className="size-4" aria-hidden="true" />
					</button>
				)}
			</div>
		);
	},
);
