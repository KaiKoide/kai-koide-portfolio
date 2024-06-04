import type React from "react";
import Card from "./ui/card";
import type { ProjectType } from "@/util/types/projectType";

interface ProjectListProps {
	projects: ProjectType[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{projects.map((project) => (
				<Card
					key={project.id}
					title={project.title}
					overview={project.overview}
					images={project.images}
					tech={project.tech}
					github={project.github}
				/>
			))}
		</div>
	);
};

export default ProjectList;
