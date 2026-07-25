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
import { type ProfileValues, profileSchema } from "#/schemas/profile.schema";

type Props = {
	className?: string;
	defaultValues: ProfileValues;
	onSubmit: (values: ProfileValues) => void;
	isPending?: boolean;
	error?: string | null;
};

export const ProfileEditForm: React.FC<Props> = ({
	className,
	defaultValues,
	onSubmit,
	isPending = false,
	error: externalError,
}) => {
	const [formError, setFormError] = useState<string | null>(null);

	const displayError = externalError || formError;

	const form = useForm({
		defaultValues,
		validators: {
			onSubmit: profileSchema,
		},
		onSubmit: ({ value }) => {
			setFormError(null);
			try {
				onSubmit(value);
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
						<h2 className="text-xl font-bold text-foreground">
							Informations du profil
						</h2>
						<p className="text-xs text-muted-foreground font-light">
							Mettez à jour vos informations personnelles publiques
						</p>
					</div>

					<form.Field name="name">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel
										htmlFor={field.name}
										className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
									>
										Nom
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										type="text"
										autoComplete="name"
										placeholder="Votre nom"
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

					<form.Field name="email">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel
										htmlFor={field.name}
										className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
									>
										Email
									</FieldLabel>
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
											? "Enregistrement en cours…"
											: "Enregistrer les modifications"}
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
