// components/not-found.tsx
import { Link } from "@tanstack/react-router";

export function NotFoundComponent() {
	return (
		<div>
			<p>Page introuvable</p>
			<Link to="/">Retour à l'accueil</Link>
		</div>
	);
}
