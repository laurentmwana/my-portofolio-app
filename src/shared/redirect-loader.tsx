type RedirectLoaderProps = {
	label?: string;
};

export function RedirectLoader({
	label = "Redirection en cours…",
}: RedirectLoaderProps) {
	return (
		<div
			aria-live="polite"
			className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background"
		>
			<svg
				width="120"
				height="48"
				viewBox="0 0 120 48"
				role="img"
				aria-hidden="true"
				className="text-foreground"
			>
				<path
					d="M4 24 H116"
					className="stroke-muted-foreground/30"
					strokeWidth="1.5"
					strokeDasharray="1 7"
					strokeLinecap="round"
					fill="none"
				/>
				<circle r="4" fill="currentColor" className="motion-reduce:hidden">
					<animateMotion
						dur="1.4s"
						repeatCount="indefinite"
						path="M4 24 H116"
						calcMode="spline"
						keyTimes="0;1"
						keySplines="0.4 0 0.2 1"
					/>
					<animate
						attributeName="opacity"
						values="0;1;1;0"
						keyTimes="0;0.08;0.85;1"
						dur="1.4s"
						repeatCount="indefinite"
					/>
				</circle>
				<circle
					cx="60"
					cy="24"
					r="4"
					fill="currentColor"
					className="hidden motion-reduce:block"
				/>
			</svg>

			<p className="text-sm text-muted-foreground">{label}</p>
		</div>
	);
}
