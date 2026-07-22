import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Navbar } from "#/components/sections/navbar/default";
import { HeroHeader } from "#/features/welcome/hero-header";
import { LogoIcon } from "#/shared/logo";

export const Route = createFileRoute("/_portofolio")({
	component: Layout,
});

function Layout() {
	return (
		<div className="relative flex flex-col min-h-dvh space-y-10">
			<Navbar />
			<HeroHeader />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

const Footer = () => {
	return (
		<footer>
			<div className="flex items-stretch">
				{/* Bordure latérale gauche (motif) */}
				<div
					aria-hidden="true"
					className="border-border shrink-0 self-stretch border-r w-4 sm:w-5 lg:w-6"
					style={{
						backgroundImage:
							"repeating-linear-gradient(315deg, color-mix(in srgb, var(--border) 56%, transparent) 0, color-mix(in srgb, var(--border) 56%, transparent) 1px, transparent 0, transparent 50%)",
						backgroundSize: "10px 10px",
					}}
				/>

				<div className="flex min-w-0 flex-1 flex-col">
					{/* Ligne décorative supérieure (motif) */}
					<div
						aria-hidden="true"
						className="border-border border-b h-4 sm:h-5 lg:h-6"
						style={{
							backgroundImage:
								"repeating-linear-gradient(315deg, color-mix(in srgb, var(--border) 56%, transparent) 0, color-mix(in srgb, var(--border) 56%, transparent) 1px, transparent 0, transparent 50%)",
							backgroundSize: "10px 10px",
						}}
					/>

					<div className="container">
						<div className="pt-10 sm:pt-14 md:pt-16">
							<div className="flex flex-col gap-5">
								<div className="flex items-center gap-3">
									<LogoIcon
										width="32"
										height="32"
										className="size-7 shrink-0 sm:size-8"
									/>
									<h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
										Labeya
									</h3>
								</div>
								<p className="text-muted-foreground max-w-xl text-base leading-relaxed">
									Développeur full-stack passionné par la conception de produits
									numériques modernes, performants et bien pensés.
								</p>
								<div className="mt-2 flex items-center gap-2">
									{/* Réseaux sociaux — remplace href par tes propres liens */}
									<SocialLink
										href="https://www.youtube.com/@TON_CHAINE"
										label="YouTube"
									>
										<YouTubeIcon />
									</SocialLink>
									<SocialLink
										href="https://x.com/TON_COMPTE"
										label="X (Twitter)"
									>
										<TwitterIcon />
									</SocialLink>
									<SocialLink
										href="https://www.linkedin.com/in/TON_PROFIL/"
										label="LinkedIn"
									>
										<LinkedInIcon />
									</SocialLink>
									<SocialLink
										href="https://www.instagram.com/TON_COMPTE"
										label="Instagram"
									>
										<InstagramIcon />
									</SocialLink>
								</div>
							</div>

							{/* Copyright */}
							<div className="border-border mt-10 border-t pt-5 sm:mt-12 sm:pt-6">
								<p className="text-muted-foreground text-center font-mono text-[11px] tracking-[0.18em] uppercase sm:text-xs">
									© Copyright Labeya {new Date().getFullYear()}
								</p>
							</div>
						</div>

						{/* Grand texte décoratif en arrière-plan */}
						<div
							aria-hidden="true"
							className="text-primary/35 pointer-events-none relative mt-6 w-full overflow-hidden select-none sm:mt-8 mb-4"
							style={{ containerType: "inline-size" }}
						>
							<div
								className="block text-center leading-[0.82] font-black tracking-tight whitespace-nowrap uppercase"
								style={{
									fontSize: "clamp(48px, 17cqi, 220px)",
									letterSpacing: "-0.04em",
									marginBottom: "-0.12em",
									maskImage:
										"linear-gradient(black 25%, transparent 100%), radial-gradient(1.5px, black 100%, transparent 100%)",
									maskSize: "100% 100%, 6px 6px",
									maskComposite: "intersect",
								}}
							>
								Labeya
							</div>
						</div>
					</div>

					{/* Ligne décorative inférieure (motif) */}
					<div
						aria-hidden="true"
						className="border-border border-t h-4 sm:h-5 lg:h-6"
						style={{
							backgroundImage:
								"repeating-linear-gradient(315deg, color-mix(in srgb, var(--border) 56%, transparent) 0, color-mix(in srgb, var(--border) 56%, transparent) 1px, transparent 0, transparent 50%)",
							backgroundSize: "10px 10px",
						}}
					/>
				</div>

				{/* Bordure latérale droite (motif) */}
				<div
					aria-hidden="true"
					className="border-border shrink-0 self-stretch border-l w-4 sm:w-5 lg:w-6"
					style={{
						backgroundImage:
							"repeating-linear-gradient(315deg, color-mix(in srgb, var(--border) 56%, transparent) 0, color-mix(in srgb, var(--border) 56%, transparent) 1px, transparent 0, transparent 50%)",
						backgroundSize: "10px 10px",
					}}
				/>
			</div>
		</footer>
	);
};

const SocialLink = ({
	href,
	label,
	children,
}: {
	href: string;
	label: string;
	children: React.ReactNode;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={label}
		className="border text-muted-foreground hover:border-primary hover:text-foreground flex size-9 items-center justify-center rounded-md transition-colors"
	>
		{children}
	</a>
);

const YouTubeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-youtube size-4"
		aria-hidden="true"
	>
		<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
		<path d="m10 15 5-3-5-3z" />
	</svg>
);

const TwitterIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-twitter size-4"
		aria-hidden="true"
	>
		<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
	</svg>
);

const LinkedInIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-linkedin size-4"
		aria-hidden="true"
	>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect width="4" height="12" x="2" y="9" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const InstagramIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-instagram size-4"
		aria-hidden="true"
	>
		<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
	</svg>
);
