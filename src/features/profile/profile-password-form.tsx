import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Alert, AlertDescription } from "#/components/ui/alert";
import { ButtonLoader } from "#/components/ui/button-loader";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { cn } from "#/lib/utils";
import {
	type ChangePasswordValues,
	changePasswordSchema,
} from "#/schemas/profile.schema";

type Props = {
	className?: string;
	onSubmit: (values: ChangePasswordValues) => void;
	isPending?: boolean;
	error?: string | null;
};

export const ProfilePasswordForm: React.FC<Props> = ({
	className,
	onSubmit,
	isPending = false,
	error: externalError,
}) => {
	const [formError, setFormError] = useState<string | null>(null);

	const displayError = externalError || formError;

	const form = useForm({
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
		validators: {
			onSubmit: changePasswordSchema,
		},
		onSubmit: ({ value }) => {
			setFormError(null);
			try {
				onSubmit(value);
				form.reset();
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
					<div className="flex flex-col gap-2">
						<h2 className="text-semibold text-2xl">Changer le mot de passe</h2>
					</div>

					<form.Field name="currentPassword">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>
										Mot de passe actuel
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										type="password"
										autoComplete="current-password"
										placeholder="Mot de passe actuel"
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

					<form.Field name="newPassword">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>
										Nouveau mot de passe
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										type="password"
										autoComplete="new-password"
										placeholder="Nouveau mot de passe"
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

					<form.Field name="confirmPassword">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid}>
									<FieldLabel htmlFor={field.name}>
										Confirmer le mot de passe
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										type="password"
										autoComplete="new-password"
										placeholder="Confirmer le mot de passe"
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
								<div>
									<ButtonLoader
										loader={isSubmitting || isPending}
										type="submit"
										disabled={!canSubmit || isPending}
									>
										{isSubmitting || isPending
											? "Mise à jour…"
											: "Mettre à jour le mot de passe"}
									</ButtonLoader>
								</div>
							)}
						</form.Subscribe>
					</Field>
				</FieldGroup>
			</form>
		</div>
	);
};
