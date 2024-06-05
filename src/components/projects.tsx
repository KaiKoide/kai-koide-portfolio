import Card from "./ui/card";
import ProjectList from "./projectList";
import { projects } from "@/data/projectData";

export default function Projects() {
	return (
		<div className="w-4/5 m-auto mt-10 lg:mt-20 text-center">
			<h2 className="uppercase text-5xl mb-10">Projects</h2>
			<ProjectList projects={projects} />
		</div>
	);
}
