import ContactList from "./contactList";
import { contactsData } from "@/data/contactData";

export default function Contact() {
	return (
		<div className="w-4/5 m-auto mt-20 flex flex-col justify-center items-center gap-16">
			<h2 className="uppercase text-5xl">contact me</h2>
			<p className="text-xl">
				If you&#39;re interested in or you have any question, get in touch with
				me!
			</p>
			<ContactList contacts={contactsData} />
		</div>
	);
}
