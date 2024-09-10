import type { ContactType } from "@/util/types/contactType";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const contactsData: ContactType[] = [
	{
		id: 1,
		name: "GitHub",
		icon: FaGithub,
		href: "https://github.com/KaiKoide",
	},
	{
		id: 2,
		name: "linkedIn",
		icon: FaLinkedin,
		href: "https://www.linkedin.com/in/kai-koide-7b9006292/",
	},
	{
		id: 3,
		name: "E-mail",
		icon: IoMdMail,
		href: "mailto:kkai.chien0813@gmail.com",
	},
];
