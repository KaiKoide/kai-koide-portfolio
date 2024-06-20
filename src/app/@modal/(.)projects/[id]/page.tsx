import Badge from "@/components/ui/badge";
import { Modal } from "./modal";
import { projects } from "@/data/projectData";
import type { ParamProp } from "@/util/types/paramType";
import type { ProjectType } from "@/util/types/projectType";
import { FaGithub } from "react-icons/fa";
import { EmblaCarousel } from "@/components/ui/carousel";

export default function ProjectsModal({ params }: ParamProp) {
	const project = projects.find(
		(project) => project.id === Number.parseInt(params.id, 10),
	);
	console.log("modal project:", project?.id);

	return (
		<Modal>
			<div>
				<h2 className="m-auto text-center text-3xl font-extrabold mb-10">
					{project?.title}
				</h2>
				<EmblaCarousel />
				<p>{project?.overview}</p>
				<h3 className="capitalize font-bold text-2xl pt-10">tech stack</h3>
				<div className="flex flex-wrap gap-3 w-full my-5">
					{project?.tech.map((item, index) => (
						<Badge message={item} key={index} />
					))}
				</div>
				<div className="pt-5">
					<a
						href={project?.github}
						target="_blank"
						rel="noopener noreferrer"
						className="block"
					>
						<FaGithub size={30} />
					</a>
				</div>
			</div>
		</Modal>
	);
}
