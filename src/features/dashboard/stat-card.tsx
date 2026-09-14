import { Link } from "@tanstack/react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";

export function StatsCard({
	title,
	value,
	description,
	to,
}: {
	title: string;
	value: number;
	description: string;
	to?: string;
}) {
	return (
		<Link to={to} className="block w-full">
			<Card className="w-full hover:border-primary  transition-all duration-200 cursor-pointer group/card">
				<CardHeader>
					<CardTitle className="group-hover/card:text-primary transition-all duration-200">
						{title}
					</CardTitle>
					<CardDescription className="group-hover/card:text-primary/80 transition-all duration-200">
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-2xl font-bold text-foreground group-hover/card:text-primary transition-all duration-200">
						{value}
					</p>
				</CardContent>
			</Card>
		</Link>
	);
}
