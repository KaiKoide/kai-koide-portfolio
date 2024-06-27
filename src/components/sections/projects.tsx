import Card from "../ui/card";
import ProjectList from "../projectList";
import { projects } from "@/data/projectData";

export default function Projects() {
	return (
		<div id="projects" className="w-4/5 m-auto mt-20 lg:mt-40 text-center">
			<h2 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-10">
				Projects
			</h2>
			<ProjectList projects={projects} />
		</div>
	);
}
