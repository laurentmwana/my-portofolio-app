import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Pen, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { deleteSkillFn } from "#/actions/skill.action";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { ButtonLink } from "#/components/ui/button-link";
import { DeleteResourceDialog } from "#/components/ui/confirmation";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import type { Skill } from "#/generated/prisma/client";
import { ago } from "#/lib/format-date";
import { excerpt } from "#/lib/string";
import { DefaultDataEmpty } from "#/shared/data-empty";

type SkillsTableProps = {
	skills: Skill[];
};

export const SkillsTable = ({ skills }: SkillsTableProps) => {
	const navigate = useNavigate();
	const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
		null,
	);

	const deleteMutation = useMutation({
		mutationFn: async (skillId: string) => {
			return await deleteSkillFn({
				data: { id: skillId },
			});
		},
		onSuccess: async () => {
			toast.success("Votre compétence a été supprimée");
			setSelectedPropertyId(null);
			await navigate({ to: "/admin/skills" });
		},
		onError: (error) => {
			toast.error(
				error.message || "Une erreur est survenue lors de la suppression.",
			);
		},
	});

	if (!Array.isArray(skills) || skills.length === 0) {
		return (
			<DefaultDataEmpty>
				<div className="flex items-center gap-3">
					<Button variant="outline">Nouvelle Compétence</Button>
				</div>
			</DefaultDataEmpty>
		);
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead> Titre </TableHead>
					<TableHead> Type </TableHead>
					<TableHead> Statut </TableHead>
					<TableHead> Date de publication </TableHead>
					<TableHead> Actions </TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{skills.map((skill) => {
					return (
						<TableRow key={skill.id}>
							<TableCell>{excerpt(skill.name, 80)}</TableCell>
							<TableCell>{skill.iconKey}</TableCell>
							<TableCell>
								<Badge variant={skill.isPublished ? "success" : "destructive"}>
									{skill.isPublished ? "Publiée" : "Brouillon"}
								</Badge>
							</TableCell>
							<TableCell>{ago(skill.createdAt)}</TableCell>
							<TableCell>
								<div className="flex items-center gap-2">
									<ButtonLink
										variant="outline"
										size="icon-sm"
										href={`/admin/skills/${skill.id}/edit`}
									>
										<Pen size={15} />
									</ButtonLink>
									<DeleteResourceDialog
										resourceName={skill.name}
										onConfirm={() => deleteMutation.mutate(skill.id)}
										confirmationValue={skill.name}
										description="Êtes-vous sûr de vouloir supprimer cette compétence ? Cette action est irréversible."
										trigger={
											<Button
												variant="destructive"
												size="icon"
												className="h-8 w-8"
												disabled={
													deleteMutation.isPending &&
													selectedPropertyId === skill.id
												}
											>
												<Trash className="size-4" />
											</Button>
										}
									/>
								</div>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};
