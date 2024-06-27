import { frontEnd, backEnd, devTools } from "@/data/skillIcons";
import type { Skill, SkillType } from "@/util/types/skillType";

interface SkillIconsProps {
	type: SkillType;
}

const SkillIcons: React.FC<SkillIconsProps> = ({ type }) => {
	const getSkills = (type: string): Skill[] => {
		switch (type) {
			case "Front End":
				return frontEnd;
			case "Back End":
				return backEnd;
			case "Dev Tools":
				return devTools;
			default:
				return [];
		}
	};

	const skills = getSkills(type);

	return (
		<div className="flex items-center justify-center flex-col">
			<h4 className="text-2xl md:text-3xl lg:text-4xl mt-10 mb-7">{type}</h4>
			<div className="flex items-center justify-center gap-5 flex-wrap">
				{skills.map((item) => (
					<div
						key={item.id}
						className="flex flex-col items-center justify-center"
					>
						<item.icon size={50} />
						<span className="text-xl mt-4">{item.text}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillIcons;
