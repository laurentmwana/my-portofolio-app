export const numberToFixed = (
	n: number | string,
	precision: number = 2,
): string => {
	try {
		const parseValue = typeof n === "string" ? parseFloat(n) : n;

		const fixed = parseValue.toFixed(precision);

		return fixed.replace(/\.?0+$/, "");
	} catch (error) {
		return "0";
	}
};

export function formatLargeNumber(value: number): string {
	if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + "B";
	if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + "M";
	if (value >= 1_000) return (value / 1_000).toFixed(1) + "K";
	return value.toString();
}

export const formatNumber = (value: number): string => {
	if (value === 0) return "0";

	const abs = Math.abs(value);

	if (abs >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + "B";
	if (abs >= 1_000_000) return (value / 1_000_000).toFixed(1) + "M";
	if (abs >= 1_000) return (value / 1_000).toFixed(1) + "k";

	return value.toString();
};

export const formatCurrency = (
	amount: number,
	locale: string = "en-US",
	currency: string = "USD",
) => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency,
	}).format(amount);
};

export const formatNumberLimit = (
	count: number,
	max: number = 99,
	preffix: string = "+",
) => (count <= max ? count : `${count}${preffix}`);

export const formatPhone = (phone: string) =>
	phone.replace(/(\d{2})(?=\d)/g, "$1 ");
