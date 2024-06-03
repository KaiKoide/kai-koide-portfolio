import React from "react";
import {
	FaHtml5,
	FaCss3Alt,
	FaVuejs,
	FaReact,
	FaNodeJs,
	FaGitAlt,
} from "react-icons/fa";
import {
	SiJavascript,
	SiRedux,
	SiAstro,
	SiVite,
	SiMui,
	SiShadcnui,
	SiExpress,
	SiPrisma,
	SiHono,
	SiOracle,
	SiPostgresql,
	SiFirebase,
	SiSupabase,
	SiGithub,
	SiPostman,
	SiFigma,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

import type { Skill } from "@/util/types/skillType";

export const frontEnd: Skill[] = [
	{
		id: 1,
		icon: FaHtml5,
		text: "HTML5",
	},
	{
		id: 2,
		icon: FaCss3Alt,
		text: "CSS3",
	},
	{
		id: 3,
		icon: SiJavascript,
		text: "JavaScript ES6",
	},
	{
		id: 4,
		icon: FaVuejs,
		text: "Vue.js",
	},
	{
		id: 5,
		icon: FaReact,
		text: "React",
	},
	{
		id: 6,
		icon: SiRedux,
		text: "Redux",
	},
	{
		id: 7,
		icon: SiAstro,
		text: "Astro",
	},
	{
		id: 8,
		icon: SiVite,
		text: "Vite",
	},
	{
		id: 9,
		icon: RiTailwindCssFill,
		text: "Tailwind CSS",
	},
	{
		id: 10,
		icon: SiMui,
		text: "MUI",
	},
	{
		id: 11,
		icon: SiShadcnui,
		text: "shadcn/ui",
	},
];

export const backEnd: Skill[] = [
	{
		id: 1,
		icon: FaNodeJs,
		text: "Node.js",
	},
	{
		id: 2,
		icon: SiExpress,
		text: "Express.js",
	},
	{
		id: 4,
		icon: SiPrisma,
		text: "Prisma",
	},
	{
		id: 5,
		icon: SiHono,
		text: "Hono",
	},
	{
		id: 6,
		icon: SiOracle,
		text: "Oracle",
	},
	{
		id: 7,
		icon: SiPostgresql,
		text: "PostgreSQL",
	},
	{
		id: 8,
		icon: DiMysql,
		text: "MySQL",
	},
	{
		id: 9,
		icon: SiFirebase,
		text: "Firebase",
	},
	{
		id: 10,
		icon: SiSupabase,
		text: "Supabase",
	},
];

export const devTools: Skill[] = [
	{
		id: 1,
		icon: SiGithub,
		text: "Github",
	},
	{
		id: 2,
		icon: FaGitAlt,
		text: "Git",
	},
	{
		id: 3,
		icon: SiPostman,
		text: "Postman",
	},
	{
		id: 4,
		icon: SiFigma,
		text: "Figma",
	},
];
