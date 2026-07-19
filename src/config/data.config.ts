import { Code, Home, Mail, User } from "lucide-react";

export const DATA = {
	navbar: [
		{
			href: "/",
			icon: Home,
			label: "Home",
		},
		{
			href: "/about",
			icon: User,
			label: "About",
		},
		{
			href: "/projects",
			icon: Code,
			label: "Projects",
		},
		{
			href: "/contact",
			icon: Mail,
			label: "Contact",
		},
	],

	contact: {
		social: {
			github: {
				url: "https://github.com/laurentmwana",
				icon: Code,
				navbar: true,
			},

			linkedin: {
				url: "https://www.linkedin.com/in/laurent-mwana-1a0b3b1a6/",
				icon: Code,
				navbar: true,
			},
		},
	},

	name: "Laurent Mwana",
	initials: "LM",
	avatarUrl: "/images/avatar.jpg",
	description:
		"I'm a passionate software developer with a love for creating innovative solutions. I specialize in web development and have experience with various technologies and frameworks. My goal is to build user-friendly applications that make a positive impact.",
};
