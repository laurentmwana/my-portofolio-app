import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Alert, AlertDescription } from "#/components/ui/alert";
import { ButtonLoader } from "#/components/ui/button-loader";
import { Checkbox } from "#/components/ui/checkbox";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { FieldSelect } from "#/components/ui/field-select";
import { Input } from "#/components/ui/input";
import { Switch } from "#/components/ui/switch";
import { getAllSkillIcons } from "#/constants/skill";
import type { Skill } from "#/generated/prisma/client";
import { cn } from "#/lib/utils";
import { type SkillValues, skillSchema } from "#/schemas/skill.schema";

type Props = {
	className?: string;
	onSubmit: (values: SkillValues) => void;
	isPending?: boolean;
	error?: string | null;
	skill?: Skill;
};

export const SkillForm: React.FC<Props> = ({
	className,
	onSubmit,
	isPending = false,
	error: externalError,
	skill,
}) => {
	const [formError, setFormError] = useState<string | null>(null);

	const displayError = externalError || formError;

	const skillIcons = getAllSkillIcons();

	const form = useForm({
		defaultValues: {
			name: skill?.name ?? "",
			description: skill?.description ?? "",
			iconKey: skill?.iconKey ?? "",
			isPublished: skill?.isPublished ?? false,
		},
		validators: {
			onSubmit: skillSchema,
		},
		onSubmit: ({ value }) => {
			setFormError(null);
			try {
				onSubmit({
					name: value.name,
					description: value.description,
					iconKey: value.iconKey || "",
					isPublished: value.isPublished,
				});
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
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					void form.handleSubmit();
				}}
				noValidate
			>
				<FieldGroup className="gap-6">
					{/* Champ Name */}
					<form.Field name="name">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel htmlFor={field.name}>Nom</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										type="text"
										placeholder="Nom de la compétence"
										aria-invalid={isInvalid}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										disabled={isPending}
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

					{/* Champ Description */}
					<form.Field name="description">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel htmlFor={field.name}>Description</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										type="text"
										placeholder="Description de la compétence"
										aria-invalid={isInvalid}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										disabled={isPending}
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

					{/* Champ IconKey */}
					<form.Field name="iconKey">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field data-invalid={isInvalid} className="gap-1.5">
									<FieldLabel htmlFor={field.name}>
										Clé d'icône (optionnel)
									</FieldLabel>
									<FieldSelect
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onValueChange={field.handleChange}
										disabled={isPending}
										isLoading={false}
										options={skillIcons.map((s) => {
											const Icon = s.icon;
											return {
												key: s.name,
												label: (
													<div className="flex items-center justify-center">
														<Icon className="size-6" />
														<span className="ml-2">{s.name}</span>
													</div>
												),
											};
										})}
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

					<form.Field name="isPublished">
						{(field) => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid;
							return (
								<Field>
									<div className="flex items-center gap-3">
										<Switch
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											checked={field.state.value}
											onCheckedChange={field.handleChange}
											disabled={isPending}
											aria-invalid={isInvalid}
										/>
										<FieldLabel htmlFor={field.name}>
											Publier la compétence
										</FieldLabel>
									</div>
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
									>
										{isSubmitting || isPending
											? skill
												? "Modification en cours..."
												: "Enregistrement..."
											: skill
												? "Modifier la compétence"
												: "Enregistrer"}
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
