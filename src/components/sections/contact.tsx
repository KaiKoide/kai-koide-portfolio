import ContactList from "../contactList";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Contact() {
	const words = [
		{
			text: "If",
		},
		{
			text: "you're",
		},
		{
			text: "interested",
		},
		{
			text: "in",
		},
		{
			text: "or",
		},
		{
			text: "you",
		},
		{
			text: "have",
		},
		{
			text: "any",
		},
		{
			text: "questions,",
		},
		{
			text: "get in touch with me!",
			className: "text-indigo-400 dark:text-indigo-400",
		},
	];

	return (
		<div
			id="contact"
			className="w-4/5 m-auto mt-20 lg:mt-40 flex flex-col justify-center items-center gap-16"
		>
			<h2 className="uppercase text-4xl md:text-5xl lg:text-6xl">contact me</h2>
			<ContactList />
			<TypewriterEffectSmooth
				words={words}
				className="hidden lg:flex lg:space-x-1 lg:my-6"
			/>
		</div>
	);
}
