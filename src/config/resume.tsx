import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "#/components/icons";

export const DATA = {
	name: "Laurent Mwana",
	initials: "LM",
	url: null,
	location: "RDC, Kinshasa",
	locationLink:
		"https://www.google.com/maps/place/kinshasa/@-4.325,15.322,12z/data=!3m1!4b1!4m6!3m5!1s0x1a6a2e7f8c9d8f7f:0x1a6a2e7f8c9d8f7f!8m2!3d-4.325!4d15.322!16zL20vMDJwZ3A?entry=ttu",
	description:
		"Je suis ingénieur logiciel et entrepreneur, passionné par la création de produits innovants. J'ai de l'expérience en développement full-stack, en cloud computing et en gestion de produits. Je me concentre actuellement sur la création et le développement de mes propres entreprises SaaS.",
	summary:
		"Je suis ingénieur logiciel et entrepreneur, passionné par la création de produits innovants. J'ai de l'expérience en développement full-stack, en cloud computing et en gestion de produits. Je me concentre actuellement sur la création et le développement de mes propres entreprises SaaS.",
	avatarUrl: "/images/2.png",

	navbar: [
		{ href: "/", icon: HomeIcon, label: "Accueil" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "hello@example.com",
		tel: "+123456789",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/laurentmwana",
				icon: Icons.github,
				navbar: true,
			},

			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/laurentmwana",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/Labeya_",
				icon: Icons.x,

				navbar: true,
			},
			Youtube: {
				name: "Youtube",
				url: "https://dub.sh/dillion-youtube",
				icon: Icons.youtube,
				navbar: true,
			},
			email: {
				name: "Envoyer un e-mail",
				url: "#",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "Atomic Finance",
			href: "https://atomic.finance",
			badges: [],
			location: "À distance",
			title: "Ingénieur Protocole Bitcoin",
			logoUrl: "/atomic.png",
			start: "Mai 2021",
			end: "Oct 2022",
			description:
				"Implémentation des spécifications du protocole discret log contract (DLC) de Bitcoin sous forme de SDK TypeScript open source. Dockerisation de tous les microservices et configuration d'un cluster Kubernetes de production. Conception d'un data lake avec AWS S3 et Athena pour le backtesting historique de stratégies de trading de Bitcoin. Création d'une application mobile en React Native et TypeScript.",
		},
		{
			company: "Shopify",
			badges: [],
			href: "https://shopify.com",
			location: "À distance",
			title: "Ingénieur Logiciel",
			logoUrl: "/shopify.svg",
			start: "Janvier 2021",
			end: "Avril 2021",
			description:
				"Implémentation d'un contrôleur Kubernetes personnalisé en Go pour automatiser le déploiement de ressources personnalisées MySQL et ProxySQL afin de permettre à plus de 2000 développeurs internes de déployer instantanément leurs bases de données applicatives en production. Écriture de plusieurs scripts en Go pour automatiser les basculements (failover) de bases de données MySQL tout en maintenant les topologies de réplication maître-esclave et en gardant les nœuds Zookeeper cohérents.",
		},
		{
			company: "Nvidia",
			href: "https://nvidia.com/",
			badges: [],
			location: "Santa Clara, CA",
			title: "Ingénieur Logiciel",
			logoUrl: "/nvidia.png",
			start: "Janvier 2020",
			end: "Avril 2020",
			description:
				"Conception et développement de l'intégralité du MVP du tableau de bord interne d'administration et de tests A/B de GeForce Now Cloud Gaming en utilisant React, Redux, TypeScript et Python.",
		},
		{
			company: "Splunk",
			href: "https://splunk.com",
			badges: [],
			location: "San Jose, CA",
			title: "Ingénieur Logiciel",
			logoUrl: "/splunk.svg",
			start: "Janvier 2019",
			end: "Avril 2019",
			description:
				"Co-développement en Swift d'un prototype d'application iOS avec un autre stagiaire pour le nouveau produit d'orchestration de sécurité Splunk Phantom (présenté publiquement et lancé lors de la conférence annuelle .conf à Las Vegas). Implémentation d'un service en temps réel pour l'application iOS en Django (Python) et C++ ; sérialisation des données avec protobufs transmises via gRPC, entraînant une hausse d'environ 500 % du débit de données.",
		},
		{
			company: "Lime",
			href: "https://li.me/",
			badges: [],
			location: "San Francisco, CA",
			title: "Ingénieur Logiciel",
			logoUrl: "/lime.svg",
			start: "Janvier 2018",
			end: "Avril 2018",
			description:
				"Proposition et implémentation d'une API Ruby interne pour l'envoi et la réception de commandes aux trottinettes via les réseaux LTE. Développement d'un système de mise à jour entièrement automatisé du firmware pour gérer les mises à jour asynchrones de plus de 100 000 trottinettes dans le monde, et fournir des rapports de progression en temps réel avec React, Ruby on Rails, PostgreSQL et AWS EC2, économisant ainsi des centaines d'heures de développement.",
		},
		{
			company: "Mitre Media",
			href: "https://mitremedia.com/",
			badges: [],
			location: "Toronto, ON",
			title: "Ingénieur Logiciel",
			logoUrl: "/mitremedia.png",
			start: "Mai 2017",
			end: "Août 2017",
			description:
				"Conception et implémentation d'un système robuste de chiffrement des mots de passe et de stockage des cookies de navigation sous Ruby on Rails. Utilisation de l'API Yahoo Finance pour développer le filtre d'actions (equity screener) de dividend.com.",
		},
	],
	education: [
		{
			school: "Buildspace",
			href: "https://buildspace.so",
			degree: "s3, s4, sf1, s5",
			logoUrl: "/buildspace.jpg",
			start: "2023",
			end: "2024",
		},
		{
			school: "Université de Waterloo",
			href: "https://uwaterloo.ca",
			degree: "Licence en Informatique (BCS)",
			logoUrl: "/waterloo.png",
			start: "2016",
			end: "2021",
		},
		{
			school: "Université Wilfrid Laurier",
			href: "https://wlu.ca",
			degree: "Licence en Administration des Affaires (BBA)",
			logoUrl: "/laurier.png",
			start: "2016",
			end: "2021",
		},
		{
			school: "Baccalauréat International",
			href: "https://ibo.org",
			degree: "Diplôme du Baccalauréat International",
			logoUrl: "/ib.png",
			start: "2012",
			end: "2016",
		},
	],
	projects: [
		{
			title: "Chat Collect",
			href: "https://chatcollect.com",
			dates: "Janv 2024 - Fév 2024",
			active: true,
			description:
				"Avec la sortie de l'[OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), j'ai décidé de créer un SaaS permettant aux utilisateurs de collecter les adresses e-mail de leurs utilisateurs de GPT. C'est un excellent moyen de se constituer une audience et de monétiser l'utilisation de l'API GPT.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://chatcollect.com",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
		},
		{
			title: "Magic UI",
			href: "https://magicui.design",
			dates: "Juin 2023 - Présent",
			active: true,
			description:
				"Conception, développement et vente de composants d'interface animés pour les développeurs.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://magicui.design",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/magicuidesign/magicui",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "https://cdn.magicui.design/bento-grid.mp4",
		},
		{
			title: "llm.report",
			href: "https://llm.report",
			dates: "Avril 2023 - Septembre 2023",
			active: true,
			description:
				"Développement d'une plateforme open source de journalisation et d'analyse pour OpenAI : enregistrez vos requêtes d'API ChatGPT, analysez les coûts et améliorez vos prompts.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://llm.report",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/dillionverma/llm.report",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "https://cdn.llm.report/openai-demo.mp4",
		},
		{
			title: "Automatic Chat",
			href: "https://automatic.chat",
			dates: "Avril 2023 - Mars 2024",
			active: true,
			description:
				"Développement d'un chatbot de support client basé sur l'IA qui répond automatiquement aux tickets de support en utilisant les derniers modèles GPT.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://automatic.chat",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
		},
	],
	hackathons: [
		{
			title: "Hack Western 5",
			dates: "23 - 25 Novembre 2018",
			location: "London, Ontario",
			description:
				"Développement d'une application mobile diffusant des histoires du soir pour enfants grâce à la réalité augmentée.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [],
		},
		{
			title: "Hack The North",
			dates: "14 - 16 Septembre 2018",
			location: "Waterloo, Ontario",
			description:
				"Développement d'une application mobile qui diffuse en temps réel les événements du campus universitaire à tous les étudiants.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [],
		},
		{
			title: "FirstNet Public Safety Hackathon",
			dates: "23 - 24 Mars 2018",
			location: "San Francisco, Californie",
			description:
				"Développement d'une application mobile transmettant les données médicales d'une victime depuis l'ambulance aux médecins de l'hôpital.",
			icon: "public",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
			links: [],
		},
		{
			title: "DeveloperWeek Hackathon",
			dates: "3 - 4 Février 2018",
			location: "San Francisco, Californie",
			description:
				"Développement d'une application web agrégeant les données des réseaux sociaux sur les cryptomonnaies pour prédire les prix futurs.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
			links: [
				{
					title: "Github",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/cryptotrends/cryptotrends",
				},
			],
		},
		{
			title: "HackDavis",
			dates: "20 - 21 Janvier 2018",
			location: "Davis, Californie",
			description:
				"Développement d'une application mobile attribuant un quota quotidien d'émissions de carbone aux utilisateurs afin de favoriser un environnement durable.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
			win: "Best Data Hack",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/my6footprint",
				},
				{
					title: "ML",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/my6footprint-machine-learning",
				},
				{
					title: "iOS",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/CarbonWallet",
				},
				{
					title: "Server",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/wallet6-server",
				},
			],
		},
		{
			title: "ETH Waterloo",
			dates: "13 - 15 Octobre 2017",
			location: "Waterloo, Ontario",
			description:
				"Développement d'une application blockchain permettant aux médecins et pharmaciens d'effectuer des transactions sécurisées et d'éviter les surdosages chez les patients.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
			links: [
				{
					title: "Organization",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ethdocnet",
				},
			],
		},
		{
			title: "Hack The North",
			dates: "15 - 17 Septembre 2017",
			location: "Waterloo, Ontario",
			description:
				"Développement d'une application de réalité virtuelle permettant aux utilisateurs de s'observer à la troisième personne.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Streamer Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/justinmichaud/htn2017",
				},
				{
					title: "Client Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/RTSPClient",
				},
			],
		},
		{
			title: "Hack The 6ix",
			dates: "26 - 27 Août 2017",
			location: "Toronto, Ontario",
			description:
				"Développement d'une plateforme ouverte permettant aux personnes expédiant des colis vers un même endroit de regrouper leurs frais d'envoi.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ShareShip/ShareShip",
				},
				{
					title: "Site",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://share-ship.herokuapp.com/",
				},
			],
		},
		{
			title: "Stupid Hack Toronto",
			dates: "23 Juillet 2017",
			location: "Toronto, Ontario",
			description:
				"Développement d'une extension Chrome qui enregistre les profils Facebook visités et envoie immédiatement un SMS à votre petite amie si vous visitez la page d'une autre fille.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/nsagirlfriend/nsagirlfriend",
				},
			],
		},
		{
			title: "Global AI Hackathon - Toronto",
			dates: "23 - 25 Juin 2017",
			location: "Toronto, Ontario",
			description:
				"Développement d'une bibliothèque Python intégrable à n'importe quel jeu Python, ajustant la difficulté en fonction des émotions du joueur en temps réel. Utilise OpenCV et une webcam pour la reconnaissance faciale, ainsi qu'un modèle d'apprentissage automatique personnalisé entraîné sur un jeu de données d'émotions de Kaggle via TensorFlow et Keras. Ce projet a remporté le 1er prix au Global AI Hackathon de Toronto et a été présenté chez NextAI Canada.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
			win: "1st Place Winner",
			links: [
				{
					title: "Article",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/TinySamosas/",
				},
			],
		},
		{
			title: "McGill AI for Social Innovation Hackathon",
			dates: "17 - 18 Juin 2017",
			location: "Montréal, Québec",
			description:
				"Développement d'un analyseur de micro-expressions faciales en temps réel basé sur l'IA.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
			links: [],
		},
		{
			title: "Open Source Circular Economy Days Hackathon",
			dates: "10 Juin 2017",
			location: "Toronto, Ontario",
			description:
				"Développement d'une interface d'administration personnalisée pour la start-up de valorisation des déchets alimentaires Genecis afin de gérer leurs données et fournir des analyses.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
			win: "1st Place Winner",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/genecis",
				},
			],
		},
		{
			title: "Make School's Student App Competition 2017",
			dates: "19 - 21 Mai 2017",
			location: "International",
			description:
				"Amélioration de PocketDoc et soumission à un concours en ligne.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
			win: "Top 10 Finalist | Honourable Mention",
			links: [
				{
					title: "Medium Article",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
				},
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/pocketdoc-react-native",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/pocketdoc-react-native",
				},
			],
		},
		{
			title: "HackMining",
			dates: "12 - 14 Mai 2017",
			location: "Toronto, Ontario",
			description:
				"Développement d'un réseau de neurones pour optimiser un processus d'exploitation minière.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
			links: [],
		},
		{
			title: "Waterloo Equithon",
			dates: "5 - 7 Mai 2017",
			location: "Waterloo, Ontario",
			description:
				"Développement de Pocketdoc, une application où l'on prend en photo une plaie physique pour obtenir des solutions ou traitements courants aux blessures ou maladies.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/pocketdoc-react-native",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/pocketdoc-react-native",
				},
			],
		},
		{
			title: "SpaceApps Waterloo",
			dates: "28 - 30 Avril 2017",
			location: "Waterloo, Ontario",
			description:
				"Développement d'Earthwatch, une application web permettant aux passagers d'un avion de visualiser virtuellement les points d'intérêt du monde situé sous leurs pieds. Remerciements particuliers à CesiumJS pour les modèles ouverts de globe terrestre et d'avion.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/earthwatch",
				},
			],
		},
		{
			title: "MHacks 9",
			dates: "24 - 26 Mars 2017",
			location: "Ann Arbor, Michigan",
			description:
				"Développement de Super Graphic Air Traffic, un site web en VR destiné à faire découvrir l'univers du contrôle aérien. Ce projet a été développé entièrement avec THREE.js et un serveur dorsal Node.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/threejs-planes",
				},
			],
		},
		{
			title: "StartHacks I",
			dates: "4 - 5 Mars 2017",
			location: "Waterloo, Ontario",
			description:
				"Développé lors du StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
			win: "1st Place Winner",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source (Mobile)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/mattBlackDesign/recipic-ionic",
				},
				{
					title: "Source (Server)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/mattBlackDesign/recipic-rails",
				},
			],
		},
		{
			title: "QHacks II",
			dates: "3 - 5 Février 2017",
			location: "Kingston, Ontario",
			description:
				"Développement d'un jeu mobile permettant une chasse à l'homme à l'échelle de la ville avec des salons de joueurs aléatoires.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source (Mobile)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/human-huntr-react-native",
				},
				{
					title: "Source (API)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/mattBlackDesign/human-huntr-rails",
				},
			],
		},
		{
			title: "Terrible Hacks V",
			dates: "26 Novembre 2016",
			location: "Waterloo, Ontario",
			description:
				"Développement d'une simulation de Windows 11 avec des notifications et fonctionnalités amusantes.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
				},
			],
		},
		{
			title: "Portal Hackathon",
			dates: "29 Octobre 2016",
			location: "Kingston, Ontario",
			description:
				"Développement d'un widget interne pour téléverser des devoirs en utilisant l'application portail de l'Université de Waterloo.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/UWPortalSDK/crowmark",
				},
			],
		},
	],
} as const;
