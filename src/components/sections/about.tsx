import Image from "next/image";

import SkillIcons from "../ui/skills";
import type { SkillType } from "@/util/types/skillType";
import Profile from "../../../public/images/person-circle-outline.svg";
import EffectedText from "../effectText";
import { aboutData } from "@/data/aboutData";

export default function About() {
	const skillTypes: SkillType[] = ["Front End", "Back End", "Dev Tools"];

	return (
		<div
			id="about"
			className="w-4/5 flex flex-col items-center justify-center m-auto mt-10 lg:mt-20 gap-y-10"
		>
			<h2 className="text-6xl uppercase">about me</h2>
			<div className="flex">
				<div className="flex flex-col gap-y-10">
					<EffectedText words={aboutData.description1} />
					<EffectedText words={aboutData.description2} />
				</div>
				<Image src={Profile} alt="profile image" width={300} height={300} />
			</div>

			<h3 className="uppercase text-5xl">skills</h3>
			<div className="flex flex-col gap-y-10">
				{skillTypes.map((type) => (
					<SkillIcons key={type} type={type} />
				))}
			</div>
		</div>
	);
}
