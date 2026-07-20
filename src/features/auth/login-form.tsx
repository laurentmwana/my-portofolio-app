import { useForm } from "@tanstack/react-form";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "#/components/ui/alert";
import { ButtonLink } from "#/components/ui/button-link";
import { ButtonLoader } from "#/components/ui/button-loader";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { cn } from "#/lib/utils";
import { type LoginValues, loginSchema } from "#/schemas/auth.schema";

type Props = {
	className?: string;
	onSubmit: (values: LoginValues) => void;
	isPending?: boolean;
	error?: string | null;
};

export const LoginForm: React.FC<Props> = ({
	className,
	onSubmit,
	isPending = false,
	error: externalError,
}) => {
	const [formError, setFormError] = useState<string | null>(null);

	const displayError = externalError || formError;

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: loginSchema,
		},
		onSubmit: ({ value }) => {
			setFormError(null);
			try {
				onSubmit({ email: value.email, password: value.password });
			} catch (error) {
				setFormError(
					error instanceof Error
						? error.message
						: "Une erreur est survenue. Veuillez réessayer.",
				);
			}
		},
	});

	return (
		<div className={cn("flex flex-col gap-6", className)}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					void form.handleSubmit();
				}}
				noValidate
			>
				<FieldGroup>
					<div className="flex flex-col items-center gap-2 text-center">
						<h2 className="text-semibold text-2xl">Se connecter</h2>
					</div>

					<form.Field name="email">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>Email</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										type="email"
										autoComplete="email"
										placeholder="email@exemple.com"
										aria-invalid={isInvalid}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										disabled={isPending}
									/>
									{isInvalid && (
										<FieldError errors={field.state.meta.errors.slice(0, 1)} />
									)}
								</Field>
							);
						}}
					</form.Field>

					<form.Field name="password">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<div className="flex items-center justify-between gap-2">
										<FieldLabel htmlFor={field.name}>Mot de passe</FieldLabel>
									</div>
									<Input
										id={field.name}
										name={field.name}
										type="password"
										autoComplete="current-password"
										placeholder="Mot de passe"
										aria-invalid={isInvalid}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										disabled={isPending}
									/>
									{isInvalid && (
										<FieldError errors={field.state.meta.errors.slice(0, 1)} />
									)}
								</Field>
							);
						}}
					</form.Field>

					{displayError && (
						<Alert variant="destructive">
							<AlertDescription>{displayError}</AlertDescription>
						</Alert>
					)}

					<Field>
						<form.Subscribe
							selector={(state) => [state.canSubmit, state.isSubmitting]}
						>
							{([canSubmit, isSubmitting]) => (
								<ButtonLoader
									loader={isSubmitting || isPending}
									type="submit"
									disabled={!canSubmit || isPending}
								>
									{isSubmitting || isPending ? "Connexion…" : "Connexion"}
								</ButtonLoader>
							)}
						</form.Subscribe>
					</Field>

					<FieldSeparator>Ou</FieldSeparator>

					<Field>
						<ButtonLink
							disabled={isPending}
							href="/auth/magic-login"
							variant="outline"
							type="button"
						>
							<Sparkles className="size-4" />
							Recevoir un lien de connexion
						</ButtonLink>
					</Field>
				</FieldGroup>
			</form>
		</div>
	);
};
