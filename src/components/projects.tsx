import Card from "./ui/card";
import ProjectList from "./projectList";
import { projects } from "@/data/projectData";

export default function Projects() {
	return (
		<div className="w-4/5 m-auto mt-20">
			<h2 className="uppercase text-5xl">Projects</h2>
			<ProjectList projects={projects} />
		</div>
	);
}
