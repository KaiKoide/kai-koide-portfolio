import { projects } from "@/data/projectData";
import type { ParamProp } from "@/util/types/paramType";
import type { ProjectType } from "@/util/types/projectType";

type ProjectPageProps = {
	project: ProjectType | null;
};

export default function ProjectsPage({ params }: ParamProp) {
	const project = projects.find(
		(project) => project.id === Number.parseInt(params.id, 10),
	);
	console.log("project:", project);

	return <div className="card">hello</div>;
}
