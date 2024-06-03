interface BadgeProp {
	message: string;
}
export default function Badge({ message }: BadgeProp) {
	return (
		<span className="badge bg-blue-100 border-blue-100 rounded-lg">
			{message}
		</span>
	);
}
