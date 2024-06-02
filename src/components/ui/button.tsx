interface ButtonProp {
	message: string;
}
export default function Button({ message }: ButtonProp) {
	return (
		<button type="button" className="btn bg-amber-300 hover:bg-amber-400">
			{message}
		</button>
	);
}
