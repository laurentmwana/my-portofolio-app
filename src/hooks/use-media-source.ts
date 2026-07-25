import { useTheme } from "#/components/themes/theme-provider";

export const useMediaSource = (
	baseUrl: string,
	preffix: string,
	extension: string,
) => {
	const { theme } = useTheme();

	return theme === "light"
		? `${baseUrl}/${preffix}-light.${extension}`
		: `${baseUrl}/${preffix}-dark.${extension}`;
};
