import { Modal } from "./modal";
import { projects } from "@/data/projectData";
import type { ParamProp } from "@/util/types/paramType";
import type { ProjectType } from "@/util/types/projectType";

export default function ProjectsModal({ params }: ParamProp) {
	const project = projects.find(
		(project) => project.id === Number.parseInt(params.id, 10),
	);
	console.log("modal project:", project?.id);

	return (
		<Modal>
			<div>
				<h1>{project?.title}</h1>
			</div>
		</Modal>
	);
}
