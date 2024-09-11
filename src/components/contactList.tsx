import type { ContactType } from "@/util/types/contactType";
import { FloatingDock } from "./ui/floating-dock";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface ContactTypeProps {
	contacts: ContactType[];
}

const ContactList: React.FC<ContactTypeProps> = ({ contacts }) => {
	const links = [
		{
			title: "GitHub",
			icon: (
				<FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "https://github.com/KaiKoide",
		},

		{
			title: "linkedIn",
			icon: (
				<FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "https://www.linkedin.com/in/kai-koide-7b9006292/",
		},
		{
			title: "E-mail",
			icon: (
				<IoMdMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "mailto:k.koide.van24@gmail.com",
		},
	];
	return (
		<div className="flex gap-5">
			<div className="flex items-center justify-center h-5 w-full">
				<FloatingDock items={links} />
			</div>
		</div>
	);
};

export default ContactList;
