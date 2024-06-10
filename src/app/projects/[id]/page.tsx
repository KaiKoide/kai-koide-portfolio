export default function ProjectsPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return <div className="card">{id}</div>;
}
