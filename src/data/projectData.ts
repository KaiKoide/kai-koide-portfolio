import type { ProjectType } from "@/util/types/projectType";

export const projects: ProjectType[] = [
	{
		id: 1,
		title: "Medamayakey",
		images: [
			"/images/project1-1.webp",
			"/images/project1-2.webp",
			"/images/project1-3.webp",
			"/images/project1-4.webp",
		],
		overview:
			"This web application allows users to search for and save recipes, with filtering options for country, allergies, and diet. It uses a combination of routes to manage modals and page transitions effectively.",
		description:
			"This is a recipe search web application. Recipes are displayed randomly using an API. By combining ParallelRoutes and InterceptingRoutes, a modal is displayed when a card is clicked, and if the page is reloaded with the modal open, it transitions to the recipe details page. When the Save button is clicked, the recipe can be viewed on the My Recipe page, where the necessary ingredients for each recipe are also displayed. A filtering function is implemented, allowing recipes to be narrowed down by country, allergies, and diet.",
		tech: [
			"Next.js",
			"TypeScript",
			"firestore",
			"clerk",
			"shadcn/ui",
			"Tailwind CSS",
		],
		website: "https://medamayakey.vercel.app/",
		github: "https://github.com/KaiKoide/medamayakey",
	},
	{
		id: 2,
		title: "Finding Free Meal in Vancouver",
		images: [
			"/images/project2-1.webp",
			"/images/project2-2.webp",
			"/images/project2-3.webp",
			"/images/project2-4.webp",
		],
		overview:
			"This web app helps users find and navigate to locations in Vancouver offering free or low-cost meals, with map integration and login via GitHub or Google accounts.",
		description:
			"This is a web application that displays routes to places in Vancouver where meals are provided for free or at low cost. Locations are displayed on a Mapbox map, and routes from the current location to the specified destination are shown, allowing users to navigate to these places. By clicking on a location, users can view detailed information about it. There is a favorite feature that allows users to save and view their favorite locations in a list. Users can log in with either a GitHub or Google account via Auth.js.",
		tech: [
			"Next.js",
			"TypeScript",
			"MapBox",
			"Tailwind CSS",
			"shadcn/ui",
			"prisma",
			"Neon",
			"Auth.js",
		],
		website: "https://finding-free-meal-in-vancouver.vercel.app/",
		github: "https://github.com/KaiKoide/finding-free-meal-in-vancouver",
	},
	{
		id: 3,
		title: "Tascurator",
		images: [
			"/images/project3-1.webp",
			"/images/project3-2.webp",
			"/images/project3-3.webp",
			"/images/project3-4.webp",
			"/images/project3-5.webp",
		],
		overview:
			"This app helps landlords manage cleaning tasks in shared houses by automatically assigning tasks to tenants. Tenants receive task notifications via email and report back on completion, enabling landlords to monitor task progress easily.",
		description:
			"This is a cleaning task management app for shared houses. The app is designed with two types of users in mind: landlords and tenants, with the landlord being the primary user. The landlord sets tasks, assigns members, and determines the rotation period for the shared house, and the app automatically allocates tasks to the tenants. Tenants can check the tasks assigned to them via a link sent in an email from the landlord. When tenants complete and report a task, the landlord can track the progress of the shared house's tasks.",
		tech: [
			"Next.js",
			"Tailwind CSS",
			"TypeScript",
			"Auth.js",
			"shadcn/ui",
			"React Hook Form",
			"Tiptap",
			"Hono",
			"Zod",
			"Prisma",
			"Vercel Postgress",
			"Docker",
		],
		website: "https://tascurator.com",
		github: "https://github.com/Tascurator/tascurator-frontend",
	},
];
