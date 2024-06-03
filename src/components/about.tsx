import Image from "next/image";

import SkillIcons from "./ui/skills";
import type { SkillType } from "@/util/types/skillType";
import Logo from "../../public/images/person-circle-outline.svg";

export default function About() {
	const skillTypes: SkillType[] = ["Front End", "Back End", "Dev Tools"];

	return (
		<div className="w-4/5 flex flex-col items-center justify-center m-auto gap-y-10">
			<h2 className="text-6xl uppercase">about me</h2>
			<div className="flex">
				<div className="flex flex-col  gap-y-10">
					<p className="text-lg">
						I used to work in the tech industry in Japan for 5 years. During
						that time, I was involved in editing databases using SQL, app
						developing and operating an e-commerce site. I bacame interested in
						creating websites that users interact with through various
						experiences. I decided to purse a career as a front-end developer.
						As a result, I began studying web development Cornerstone
						International Community College of Canada.
					</p>
					<p className="text-lg">
						I enjoy learning new things, so I have been improving my skills for
						myself, as well as creating some apps. I also work on developing
						frameworks and libraries such as React and Next.js. Additionary, I
						am passionate about pursuing my goals and excel at inviting others
						and involving people around me. I am skilled at collaborating on
						ideas proposed by others, fostering teamwork and cooperation.
					</p>
				</div>
				<Image src={Logo} alt="logo image" />
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
