import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { BlurFade } from "#/components/ui/blur-fade";
import { BlurFadeText } from "#/components/ui/blur-fade-text";
import { DATA } from "#/config/resume";

const BLUR_FADE_DELAY = 0.5;

export const Presentation = () => {
	return (
		<div className="container">
			<div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
				<div className="gap-2 flex flex-col order-2 md:order-1">
					<BlurFadeText
						delay={BLUR_FADE_DELAY}
						className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
						yOffset={8}
						text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
					/>
					<BlurFadeText
						className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
						delay={BLUR_FADE_DELAY}
						text={DATA.description}
					/>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
					<Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
						<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
						<AvatarFallback>{DATA.initials}</AvatarFallback>
					</Avatar>
				</BlurFade>
			</div>
		</div>
	);
};
