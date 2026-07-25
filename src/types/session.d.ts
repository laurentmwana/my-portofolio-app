import type { authClient } from "#/lib/auth-client";

export type SessionData = ReturnType<typeof authClient.useSession>["data"];

export type SessionDataUser = NonNullable<SessionData>["user"];
