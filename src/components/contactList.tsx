import type { ContactType } from "@/util/types/contactType";

interface ContactTypeProps {
	contacts: ContactType[];
}

const ContactList: React.FC<ContactTypeProps> = ({ contacts }) => {
	return (
		<div className="flex gap-10">
			{contacts.map((contact) => (
				<div key={contact.id}>
					<a href={contact.href} target="_blank" rel="noopener noreferrer">
						<contact.icon size={50} />
					</a>
				</div>
			))}
		</div>
	);
};

export default ContactList;
