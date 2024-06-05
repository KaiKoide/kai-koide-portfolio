import ContactList from "../contactList";
import { contactsData } from "@/data/contactData";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Contact() {
	const words = [
		{
			text: "If",
		},
		{
			text: "You're",
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
			className: "text-blue-500 dark:text-blue-500",
		},
	];

	return (
		<div
			id="contact"
			className="w-4/5 m-auto mt-10 lg:mt-20 flex flex-col justify-center items-center gap-16"
		>
			<h2 className="uppercase text-5xl">contact me</h2>
			<TypewriterEffectSmooth words={words} />
			<ContactList contacts={contactsData} />
		</div>
	);
}
