import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import type React from "react";
import { toast } from "sonner";
import { findSkill, updateSkill } from "#/actions/skill.action";
import { SkillForm } from "#/features/skill/skill-form";
import { AdminLayout } from "#/layouts/admin-layout";
import type { SkillValues } from "#/schemas/skill.schema";
import { ServerError } from "#/shared/errors";
import { TableSkeleton } from "#/shared/table-skeleton";

export const Route = createFileRoute("/_protected/admin/skills/$id/edit")({
	component: Page,
	pendingComponent: () => {
		return (
			<Layout>
				<TableSkeleton columns={4} showHeader={true} />
			</Layout>
		);
	},
	loader: async ({ params }) => {
		return await findSkill({
			data: {
				id: params.id,
			},
		});
	},
});

function Page() {
	const skill = Route.useLoaderData();
	const naviate = useNavigate();

	const updateSkillMutation = useMutation({
		mutationFn: async (values: SkillValues) => {
			return await updateSkill({
				data: { formData: values, id: skill.id },
			});
		},
		onSuccess: async () => {
			await naviate({ to: "/admin/skills" });
			toast.success("Compétence modifiée avec succès");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	if (!skill) {
		return (
			<Layout>
				<ServerError
					title="Compétence introuvable"
					message="Aucune compétence trouvée pour l'identifiant fourni"
				/>
			</Layout>
		);
	}

	return (
		<Layout>
			<SkillForm
				error={updateSkillMutation.error?.message}
				isPending={updateSkillMutation.isPending}
				skill={skill}
				onSubmit={(values) => updateSkillMutation.mutate(values)}
			/>
		</Layout>
	);
}

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<AdminLayout
			breadcrumbs={[
				{ href: "/admin/skills", title: "Compétences" },
				{ href: "", title: "Editer" },
			]}
		>
			<div className="backoffice-container-md">
				<div className="mb-4">
					<h1 className="backoffice-title mb-2">Modifier la compétence</h1>
					<p className="backoffice-description">
						Mettre à jour les informations de la compétence
					</p>
				</div>
				<section>{children}</section>
			</div>
		</AdminLayout>
	);
}
