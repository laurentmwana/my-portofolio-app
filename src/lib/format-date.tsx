export function formatRelativeDate(dateString: string) {
	const date = new Date(dateString);
	const diffSeconds = Math.round((date.getTime() - Date.now()) / 1000);

	const divisions: [Intl.RelativeTimeFormatUnit, number][] = [
		["year", 60 * 60 * 24 * 365],
		["month", 60 * 60 * 24 * 30],
		["week", 60 * 60 * 24 * 7],
		["day", 60 * 60 * 24],
		["hour", 60 * 60],
		["minute", 60],
		["second", 1],
	];

	const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });

	for (const [unit, secondsInUnit] of divisions) {
		if (Math.abs(diffSeconds) >= secondsInUnit || unit === "second") {
			return rtf.format(Math.round(diffSeconds / secondsInUnit), unit);
		}
	}

	return "";
}
