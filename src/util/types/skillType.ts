import type { IconType } from "react-icons";

export interface Skill {
	id: number;
	icon: IconType;
	text: string;
}

export type SkillType = "Front End" | "Back End" | "Dev Tools";
