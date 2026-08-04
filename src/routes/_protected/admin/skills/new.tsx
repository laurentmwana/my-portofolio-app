import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import type React from "react";
import { toast } from "sonner";
import { createSkill } from "#/actions/skill.action";
import { SkillForm } from "#/features/skill/skill-form";
import { AdminLayout } from "#/layouts/admin-layout";
import type { SkillValues } from "#/schemas/skill.schema";

export const Route = createFileRoute("/_protected/admin/skills/new")({
	component: Page,
});

function Page() {
	const naviate = useNavigate();

	const createSkillMutation = useMutation({
		mutationFn: async (values: SkillValues) => {
			return await createSkill({
				data: values,
			});
		},
		onSuccess: async () => {
			await naviate({ to: "/admin/skills" });
			toast.success("Compétence créée avec succès");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return (
		<Layout>
			<SkillForm
				error={createSkillMutation.error?.message}
				isPending={createSkillMutation.isPending}
				onSubmit={(values) => createSkillMutation.mutate(values)}
			/>
		</Layout>
	);
}

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<AdminLayout
			breadcrumbs={[
				{ href: "/admin/skills", title: "Compétences" },
				{ href: "", title: "Création" },
			]}
		>
			<div className="backoffice-container-md">
				<div className="mb-4">
					<h1 className="backoffice-title mb-2">Nouvelle compétence</h1>
					<p className="backoffice-description">
						Ajouter une nouvelle compétence
					</p>
				</div>
				<section>{children}</section>
			</div>
		</AdminLayout>
	);
}
