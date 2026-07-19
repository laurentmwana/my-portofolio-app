import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { BlurFade } from "#/components/ui/blur-fade";
import { BlurFadeText } from "#/components/ui/blur-fade-text";
import { DATA } from "#/config/resume";

const BLUR_FADE_DELAY = 0.5;

export const Presentation = () => {
	return (
		<section className="container">
			<div className="flex flex-col-reverse items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
				<div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
					<BlurFadeText
						delay={BLUR_FADE_DELAY}
						className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
						yOffset={8}
						text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
					/>
					<BlurFadeText
						className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
						delay={BLUR_FADE_DELAY}
						text={DATA.summary}
					/>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY} className="shrink-0">
					<Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
						<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
						<AvatarFallback>{DATA.initials}</AvatarFallback>
					</Avatar>
				</BlurFade>
			</div>
		</section>
	);
};
