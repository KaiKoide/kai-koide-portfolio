import { Modal } from "./modal";

export default function ProjectsModal({
	params: { id: projectsId },
}: {
	params: { id: string };
}) {
	return <Modal>{projectsId}</Modal>;
}
