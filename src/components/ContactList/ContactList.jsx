import { Container, ContactsList } from "./ContactList.styled";
import { getFilteredContacts } from "redux/Auth/selectors";
import { useSelector } from "react-redux";
import ContactListItem from "./ListItem";

const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);
    return (
        contacts.length !== 0 &&
        (
        <Container>
            <ContactsList>
                {contacts.map((contact => (
                   <ContactListItem key={ contact.id } contact={contact} />
                )))}
            </ContactsList>
        </Container>))
}

export default ContactList;
