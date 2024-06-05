import { MovingBorderButton } from "./moving-border";

interface ButtonProp {
	message: string;
}

export default function Button({ message }: ButtonProp) {
	return (
		<MovingBorderButton
			type="button"
			className="btn border-none bg-amber-300 hover:bg-amber-400 hover:text-white z-50"
		>
			{message}
		</MovingBorderButton>
	);
}
