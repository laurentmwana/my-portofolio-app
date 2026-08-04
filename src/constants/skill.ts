import { Csharp } from "@/components/ui/svgs/csharp";
import { DefaultIcon } from "@/components/ui/svgs/default";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { Java } from "@/components/ui/svgs/java";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";

const SKILL_ICONS = {
	react: ReactLight,
	"next.js": NextjsIconDark,
	typescript: Typescript,
	"node.js": Nodejs,
	python: Python,
	go: Golang,
	postgres: Postgresql,
	docker: Docker,
	kubernetes: Kubernetes,
	java: Java,
	"c++": Csharp,
} as const;

type SkillName = keyof typeof SKILL_ICONS;

export const getSkillIcon = (name: string | null) => {
	if (!name) {
		return DefaultIcon;
	}

	const normalizedName = name.toLowerCase() as SkillName;
	return SKILL_ICONS[normalizedName] || DefaultIcon;
};

export const getAllSkillIcons = () => {
	return [
		{ name: "default", icon: DefaultIcon },
		...Object.entries(SKILL_ICONS).map(([key, value]) => {
			return { name: key, icon: value };
		}),
	];
};

export const getAllSkillNames = () => {
	return ["default", ...Object.keys(SKILL_ICONS)];
};
