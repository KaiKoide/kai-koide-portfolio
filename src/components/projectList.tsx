import type React from "react";
import Link from "next/link";

import Card from "./ui/card";
import type { ProjectType } from "@/util/types/projectType";

interface ProjectListProps {
	projects: ProjectType[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{projects.map((project) => (
				<Link key={project.id} href={`/projects/${project.id}`} scroll={false}>
					<Card
						title={project.title}
						overview={project.overview}
						description={project.description}
						images={project.images}
						tech={project.tech}
						github={project.github}
					/>
				</Link>
			))}
		</div>
	);
};

export default ProjectList;
