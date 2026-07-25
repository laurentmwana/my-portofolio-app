// session.tsx
import { useLocation, useNavigate } from "@tanstack/react-router";
import React from "react";
import { toast } from "sonner";
import { authClient } from "#/lib/auth-client";
import type { SessionDataUser } from "#/types/session";

const HEARTBEAT_INTERVAL_MS = 60 * 1000;

export interface SessionContextValue {
	isPending: boolean;
	isAuthenticated: boolean;
	user: SessionDataUser | null;
	refresh: () => Promise<void>;
	logout: () => void;
	isLoggingOut: boolean;
}

export const useSession = (): SessionContextValue => {
	const { data, isPending, refetch } = authClient.useSession();
	const [isLoggingOut, setIsLoggingOut] = React.useState(false);

	const user = data?.user ?? null;

	const refresh = React.useCallback(async () => {
		await refetch();
	}, [refetch]);

	const logout = React.useCallback(() => {
		setIsLoggingOut(true);
		authClient.signOut().finally(() => setIsLoggingOut(false));
	}, []);

	return React.useMemo(
		() => ({
			isPending,
			isAuthenticated: !!user,
			user,
			refresh,
			logout,
			isLoggingOut,
		}),
		[isPending, user, refresh, logout, isLoggingOut],
	);
};

function useAuthHeartbeat(isAuthenticated: boolean, onExpired: () => void) {
	React.useEffect(() => {
		if (!isAuthenticated) return;

		let isMounted = true;

		const check = async () => {
			const { data } = await authClient.getSession();
			if (isMounted && !data) onExpired();
		};

		const interval = setInterval(check, HEARTBEAT_INTERVAL_MS);

		const handleVisibility = () => {
			if (document.visibilityState === "visible") check();
		};
		document.addEventListener("visibilitychange", handleVisibility);

		const handleOnline = () => check();
		window.addEventListener("online", handleOnline);

		return () => {
			isMounted = false;
			clearInterval(interval);
			document.removeEventListener("visibilitychange", handleVisibility);
			window.removeEventListener("online", handleOnline);
		};
	}, [isAuthenticated, onExpired]);
}

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const location = useLocation();
	const navigate = useNavigate();

	const session = useSession();

	const handleExpired = React.useCallback(async () => {
		if (location.pathname === "/auth/login") return;

		toast.dismiss();
		toast.warning("Session expirée", {
			description: "Veuillez vous reconnecter pour continuer",
			duration: 5000,
		});

		await navigate({
			to: "/auth/login",
			search: { redirect: location.pathname },
		});
	}, [location.pathname, navigate]);

	useAuthHeartbeat(session.isAuthenticated, handleExpired);

	return <>{children}</>;
};
