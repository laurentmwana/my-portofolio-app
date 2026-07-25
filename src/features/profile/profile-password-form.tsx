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
		<div
			className={cn(
				"w-full border border-border/60 bg-card text-card-foreground rounded-2xl shadow-lg p-6 sm:p-8 ring-2 ring-border/5 transition-all duration-300 hover:shadow-xl",
				className,
			)}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					void form.handleSubmit();
				}}
				noValidate
			>
				<FieldGroup className="gap-6">
					<div className="flex flex-col gap-1 pb-4 border-b border-border/50">
						<h2 className="text-xl font-bold text-foreground">Mot de passe</h2>
						<p className="text-xs text-muted-foreground font-light">
							Modifiez votre mot de passe pour sécuriser votre compte
						</p>
					</div>

					<form.Field name="currentPassword">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel
										htmlFor={field.name}
										className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
									>
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
										className="h-10 transition-all border-border/60 focus-visible:ring-primary/30"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors.slice(0, 1)}
											className="text-xs mt-1"
										/>
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
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel
										htmlFor={field.name}
										className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
									>
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
										className="h-10 transition-all border-border/60 focus-visible:ring-primary/30"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors.slice(0, 1)}
											className="text-xs mt-1"
										/>
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
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel
										htmlFor={field.name}
										className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
									>
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
										className="h-10 transition-all border-border/60 focus-visible:ring-primary/30"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors.slice(0, 1)}
											className="text-xs mt-1"
										/>
									)}
								</Field>
							);
						}}
					</form.Field>

					{displayError && (
						<Alert
							variant="destructive"
							className="py-2.5 rounded-lg text-xs bg-destructive/5 border-destructive"
						>
							<AlertDescription>{displayError}</AlertDescription>
						</Alert>
					)}

					<Field className="pt-2">
						<form.Subscribe
							selector={(state) => [state.canSubmit, state.isSubmitting]}
						>
							{([canSubmit, isSubmitting]) => (
								<div>
									<ButtonLoader
										loader={isSubmitting || isPending}
										type="submit"
										disabled={!canSubmit || isPending}
										className="h-10 font-medium tracking-wide shadow-sm hover:shadow transition-all px-6 cursor-pointer"
									>
										{isSubmitting || isPending
											? "Mise à jour en cours…"
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
