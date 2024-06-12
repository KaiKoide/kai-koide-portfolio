import { projects } from "@/data/projectData";
import { contactsData } from "@/data/contactData";
import type { ParamProp } from "@/util/types/paramType";
import type { ProjectType } from "@/util/types/projectType";

type ProjectPageProps = {
	project: ProjectType | null;
};

export default function ProjectsPage({ params }: ParamProp) {
	const project = projects.find(
		(project) => project.id === Number.parseInt(params.id, 10),
	);

	return (
		<div className="h-screen flex flex-col items-center">
			<h1>{project?.title}</h1>
			<div>carousel</div>
			<h2>description</h2>
			<p>{project?.overview}</p>
			<h2>tech stack</h2>
			<div>badges</div>
			<div>icons</div>
		</div>
	);
}
