import type { ProjectType } from "@/util/types/projectType";

export const projects: ProjectType[] = [
	{
		id: 1,
		title: "Medamayakey",
		images: ["/images/project1-1.webp", "/images/project1-2.webp"],
		overview:
			"testLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet arcu purus, et vestibulum tellus consectetur fermentum. Donec semper fringilla odio nec dapibus. Aliquam sit amet felis dolor.",
		tech: [
			"Next.js",
			"TypeScript",
			"firestore",
			"clerk",
			"shadcn/ui",
			"Tailwind CSS",
		],
		// website: "",
		github: "https://github.com/medamayakey/medamayakey",
	},
	{
		id: 2,
		title: "Finding Free Meal in Vancouver",
		images: ["/images/project2-1.webp", "/images/project2-2.webp"],
		overview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet arcu purus, et vestibulum tellus consectetur fermentum. Donec semper fringilla odio nec dapibus. Aliquam sit amet felis dolor.",
		tech: ["Next.js", "TypeScript", "MapBox", "Tailwind CSS"],
		// website: "",
		github: "https://github.com/KaiKoide/finding-free-meal-in-vancouver",
	},
	{
		id: 3,
		title: "Portfolio site",
		images: ["/images/project3-1.webp", "/images/project3-2.webp"],
		overview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet arcu purus, et vestibulum tellus consectetur fermentum. Donec semper fringilla odio nec dapibus. Aliquam sit amet felis dolor.",
		tech: ["Next.js", "TailwindCSS", "TypeScript"],
		// website: "",
		github: "https://github.com/KaiKoide/kai-koide-portfolio",
	},
];
