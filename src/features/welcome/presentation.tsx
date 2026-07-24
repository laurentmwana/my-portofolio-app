import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { BlurFade } from "#/components/ui/blur-fade";
import { BlurFadeText } from "#/components/ui/blur-fade-text";
import { DATA } from "#/config/resume";

const BLUR_FADE_DELAY = 0.5;

export const Presentation = () => {
	return (
		<section className="pt-16">
			<div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
				<div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left flex-1 min-w-0">
					<BlurFadeText
						delay={BLUR_FADE_DELAY}
						className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-linear-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent"
						yOffset={8}
						text={`Bonjour, je suis ${DATA.name.split(" ")[0]}`}
					/>
					<BlurFadeText
						className="text-muted-foreground text-base sm:text-lg lg:text-xl font-light leading-relaxed"
						delay={BLUR_FADE_DELAY}
						text={DATA.summary}
					/>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY} className="shrink-0">
					<Avatar className="size-28 rounded-full border border-border/50 shadow-xl ring-4 ring-primary/10 hover:ring-primary/25 hover:scale-105 transition-all duration-500 cursor-pointer md:size-36 bg-background">
						<AvatarImage
							alt={DATA.name}
							src={DATA.avatarUrl}
							className="object-cover"
						/>
						<AvatarFallback className="font-bold text-lg">
							{DATA.initials}
						</AvatarFallback>
					</Avatar>
				</BlurFade>
			</div>
		</section>
	);
};
