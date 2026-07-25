export interface JwtTokenResponder {
	access_token: string;
	refresh_token: string;
}

export type ApiPlatformError = {
	type?: string;
	title?: string;
	detail?: string;
	status?: number;
	"hydra:description"?: string;
	violations?: { propertyPath: string; message: string }[];
};

export type OneTimePasswordResponder = {
	message: string;
	expires_minutes: number;
	attempts: number;
};

export type MessageResponder = {
	message: string;
};
