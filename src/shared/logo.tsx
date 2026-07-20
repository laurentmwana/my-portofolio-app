import type { HTMLAttributes, SVGAttributes } from "react";
import { cn } from "@/lib/utils";

type LogoIconProps = SVGAttributes<SVGElement> & {
	title?: string;
	decorative?: boolean;
};

export function LogoIcon({
	height = 40,
	title = "Logo",
	decorative = true,
	className,
	...props
}: LogoIconProps) {
	if (decorative) {
		return (
			<svg
				{...props}
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				className={cn("text-primary", className)}
			>
				<path
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M50 4 L94 42 L94 96 L6 96 L6 42 Z
					   M60 56 A10 10 0 1 0 40 56 A10 10 0 1 0 60 56
					   M42 66 L58 66 L62 96 L38 96 Z"
				/>
			</svg>
		);
	}

	return (
		<svg
			{...props}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			className={cn("text-primary", className)}
		>
			<title>{title}</title>
			<path
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M50 4 L94 42 L94 96 L6 96 L6 42 Z
				   M60 56 A10 10 0 1 0 40 56 A10 10 0 1 0 60 56
				   M42 66 L58 66 L62 96 L38 96 Z"
			/>
		</svg>
	);
}

type LogoProps = HTMLAttributes<HTMLDivElement> & {
	title?: string;
	iconSize?: number;
	textClassName?: string;
};

export function Logo({
	title = "Votre App",
	iconSize = 28,
	className,
	textClassName,
	...props
}: LogoProps) {
	return (
		<div
			className={cn("flex items-center gap-2 text-primary", className)}
			{...props}
		>
			<LogoIcon
				width={iconSize}
				height={iconSize}
				className="shrink-0"
				decorative
			/>
			<span
				className={cn(
					"font-sans text-lg font-semibold tracking-tight text-foreground",
					textClassName,
				)}
			>
				{title}
			</span>
		</div>
	);
}
