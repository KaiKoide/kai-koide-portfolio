import type { ContactType } from "@/util/types/contactType";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const contactsData: ContactType[] = [
	{
		id: 1,
		icon: FaGithub,
		href: "https://github.com/KaiKoide",
	},
	{
		id: 2,
		icon: FaLinkedin,
		href: "https://www.linkedin.com/in/kai-koide-7b9006292/",
	},
	{
		id: 3,
		icon: IoMdMail,
		href: "mailto:kkai.chien0813@gmail.com",
	},
];
