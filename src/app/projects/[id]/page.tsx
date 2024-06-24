import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgBrowser } from "react-icons/cg";
import { PiArrowFatLeftFill } from "react-icons/pi";

import { projects } from "@/data/projectData";
import type { ParamProp } from "@/util/types/paramType";
import { EmblaCarousel } from "@/components/ui/carousel";
import Badge from "@/components/ui/badge";

export default function ProjectsPage({ params }: ParamProp) {
	const project = projects.find(
		(project) => project.id === Number.parseInt(params.id, 10),
	);

	if (!project) {
		return (
			<div className="h-screen flex flex-col justify-center items-center">
				<p className="text-xl">Project not found</p>
				<Link href={"/"}>
					<div className="flex items-center gap-2 py-5">
						<PiArrowFatLeftFill />
						<h4 className="capitalize font-bold">go back</h4>
					</div>
				</Link>
			</div>
		);
	}

	return (
		<div className="w-3/4 m-auto">
			<Link href={"/"}>
				<div className="flex items-center gap-2 py-5">
					<PiArrowFatLeftFill />
					<h4 className="capitalize font-bold">go back</h4>
				</div>
			</Link>
			<h2 className="m-auto text-center text-4xl font-extrabold py-10">
				{project?.title}
			</h2>
			<EmblaCarousel project={project} />
			<p>{project?.overview}</p>
			<h3 className="capitalize font-bold text-2xl pt-10">tech stack</h3>
			<div className="flex flex-wrap gap-3 w-full my-5">
				{project?.tech.map((item, index) => (
					<Badge message={item} key={index} />
				))}
			</div>
			<div className="pt-5 pb-10 flex gap-4 justify-center">
				<a
					href={project?.github}
					target="_blank"
					rel="noopener noreferrer"
					className="block"
				>
					<FaGithub size={50} />
				</a>
				{project.website && (
					<a
						href={project?.website}
						target="_blank"
						rel="noopener noreferrer"
						className="block"
					>
						<CgBrowser size={50} />
					</a>
				)}
			</div>
		</div>
	);
}
