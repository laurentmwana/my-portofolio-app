import { useTheme } from "#/components/themes/theme-provider";
import { FlickeringGrid } from "#/components/ui/flickering-grid";

export const HeroHeader = () => {
	const { theme } = useTheme();

	const color = theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";

	return (
		<div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
			<FlickeringGrid
				className="h-full w-full"
				squareSize={3}
				gridGap={3}
				color={color}
				style={{
					maskImage: "linear-gradient(to bottom, black, transparent)",
					WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
				}}
			/>
		</div>
	);
};
