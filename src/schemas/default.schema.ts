import z from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const normalizePhoneNumber = (value: string): string | null => {
	let cleanedPhone = value.replace(/[\s-]/g, "");

	if (cleanedPhone.startsWith("0")) {
		cleanedPhone = cleanedPhone.substring(1);
	}

	if (cleanedPhone.startsWith("243")) {
		return `+${cleanedPhone}`;
	}

	if (cleanedPhone.startsWith("+243")) {
		return cleanedPhone;
	}

	if (/^\d{8,9}$/.test(cleanedPhone)) {
		return `+243${cleanedPhone}`;
	}

	if (/^\+\d{8,15}$/.test(cleanedPhone)) {
		return cleanedPhone;
	}

	return null;
};

export const isValidEmail = (value: string): boolean => {
	return emailRegex.test(value);
};

export const isValidPhone = (value: string): boolean => {
	const normalized = normalizePhoneNumber(value);
	return normalized !== null;
};

export const isValidIdentifier = (value: string): boolean => {
	const email = isValidEmail(value);
	if (email) {
		return true;
	}
	return isValidPhone(value);
};

export const queriesSchema = z.object({
	redirect: z.string().optional(),
});

export const idSchema = z.object({
	redirect: z.string(),
});
