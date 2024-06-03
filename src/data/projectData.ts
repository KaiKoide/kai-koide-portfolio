import type { ProjectType } from "@/util/types/projectType";

export const projects: ProjectType[] = [
	{
		id: 1,
		title: "Medamayakey",
		images: ["/images/project1-1.png", "/images/project1-2.png"],
		overview:
			"testLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet arcu purus, et vestibulum tellus consectetur fermentum. Donec semper fringilla odio nec dapibus. Aliquam sit amet felis dolor. Quisque pellentesque magna sed erat porttitor, vel consequat purus interdum. Fusce et ligula sed dolor hendrerit auctor at id urna. Ut a neque vitae elit convallis tristique sed eget erat. Phasellus aliquam suscipit leo, a pharetra dolor porttitor at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec malesuada sapien quis eros dignissim scelerisque. Nunc sit amet libero ante.",
		tech: [
			"Next.js",
			"TypeScript",
			"firestore",
			"clerk",
			"shadcn/ui",
			"REST API",
			"Tailwind CSS",
		],
		// website: "",
		github: "https://github.com/medamayakey/medamayakey",
	},
	{
		id: 2,
		title: "Finding Free Meal in Vancouver",
		images: ["/images/project2-1.png", "/images/project2-2.png"],
		overview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet arcu purus, et vestibulum tellus consectetur fermentum. Donec semper fringilla odio nec dapibus. Aliquam sit amet felis dolor. Quisque pellentesque magna sed erat porttitor, vel consequat purus interdum. Fusce et ligula sed dolor hendrerit auctor at id urna. Ut a neque vitae elit convallis tristique sed eget erat. Phasellus aliquam suscipit leo, a pharetra dolor porttitor at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec malesuada sapien quis eros dignissim scelerisque. Nunc sit amet libero ante.",
		tech: ["Next.js", "TypeScript", "MapBox", "Tailwind CSS"],
		// website: "",
		github: "https://github.com/KaiKoide/finding-free-meal-in-vancouver",
	},
	{
		id: 3,
		title: "Portfolio site",
		images: ["/images/project3-1.png", "/images/project3-2.png"],
		overview:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet arcu purus, et vestibulum tellus consectetur fermentum. Donec semper fringilla odio nec dapibus. Aliquam sit amet felis dolor. Quisque pellentesque magna sed erat porttitor, vel consequat purus interdum. Fusce et ligula sed dolor hendrerit auctor at id urna. Ut a neque vitae elit convallis tristique sed eget erat. Phasellus aliquam suscipit leo, a pharetra dolor porttitor at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec malesuada sapien quis eros dignissim scelerisque. Nunc sit amet libero ante.",
		tech: ["Next.js", "TailwindCSS", "TypeScript"],
		// website: "",
		github: "https://github.com/KaiKoide/kai-koide-portfolio",
	},
];
