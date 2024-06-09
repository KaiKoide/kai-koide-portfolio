import { MovingBorderButton } from "./moving-border";

interface ButtonProp {
	message: string;
}

export default function Button({ message }: ButtonProp) {
	return (
		<MovingBorderButton
			type="button"
			className="btn border-none bg-amber-400 hover:bg-amber-300 hover:text-white z-40 tracking-wider"
		>
			{message}
		</MovingBorderButton>
	);
}
