import { Title } from "components/Common/Title";
import ContactList from "components/ContactList/ContactList";
import { PhonebookForm } from "../../Phonebook/Phonebook";
import { Filter } from "../../Filter/Filter";
import { Container } from "../../ContactList/ContactList.styled";

const Contacts = () => {
    
    return (
        <Container>
            <Title title="Phonebook" />
            <PhonebookForm />
            <Title title="Contacts" />
            <Filter />
            <ContactList/>
        </Container>
    )
}

export default Contacts