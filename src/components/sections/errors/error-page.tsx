import { Button } from "#/components/ui/button";
import { ButtonLink } from "#/components/ui/button-link";

type ErrorPageProps = { message: string; onReset: () => void };

export const ErrorPage = ({ message, onReset }: ErrorPageProps) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<h1 className="text-lg font-bold">une erreur s'est produite</h1>
			<p>{message}</p>
			<Button onClick={() => onReset()}>Rafraîchir</Button>
		</div>
	);
};

type NotFoundPageProps = {
	onNavigate?: () => void;
};

export const NotFoundPage = ({ onNavigate }: NotFoundPageProps) => {
	return (
		<div>
			<h1 className="text-lg font-bold">404 - Page non trouvée</h1>
			<p>La page que vous recherchez n'existe pas.</p>
			{onNavigate ? (
				<Button onClick={() => onNavigate()}>Retour à l'accueil</Button>
			) : (
				<ButtonLink href="/">Revenir à la page d'accueil</ButtonLink>
			)}
		</div>
	);
};
