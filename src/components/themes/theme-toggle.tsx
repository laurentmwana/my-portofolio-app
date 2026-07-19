import { Moon, Sun } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

type ModeToggleProps = { className?: string };

export function ModeToggle({ className }: ModeToggleProps) {
	const { setTheme, theme } = useTheme();

	return (
		<AnimatedThemeToggler
			className={className}
			theme={theme === "dark" ? "dark" : "light"}
			onThemeChange={(t) => setTheme(t === "dark" ? "light" : "dark")}
			size="sm"
		/>
	);
}

export function ThemeToggle({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	const isDark = theme === "dark";

	return (
		<button
			type="button"
			role="switch"
			aria-checked={isDark}
			aria-label="Toggle dark mode"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={cn(
				"relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted p-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
				className,
			)}
		>
			{/* Sliding knob */}
			<span
				className={cn(
					"pointer-events-none flex h-6 w-6 items-center justify-center rounded-full  text-foreground shadow-md  transition-transform duration-300 bg-background",
					isDark ? "translate-x-6" : "translate-x-0",
				)}
			>
				{isDark ? (
					<Moon className="h-4 w-4" aria-hidden="true" />
				) : (
					<Sun className="h-4 w-4" aria-hidden="true" />
				)}
			</span>

			{/* Static background icons */}
			<Sun
				className={cn(
					"absolute left-2 h-4 w-4 text-muted-foreground transition-opacity duration-300",
					isDark ? "opacity-100" : "opacity-0",
				)}
				aria-hidden="true"
			/>
			<Moon
				className={cn(
					"absolute right-2 h-4 w-4 text-muted-foreground transition-opacity duration-300",
					isDark ? "opacity-0" : "opacity-100",
				)}
				aria-hidden="true"
			/>
		</button>
	);
}
