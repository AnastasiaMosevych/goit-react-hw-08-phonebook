import { ListItem } from "./ContactList.styled"
import { DeleteButton } from "./DeleteButton";
import PropTypes from 'prop-types';

const ContactListItem = ({ contact }) => {
    const { name, number, id } = contact;
    
    return <ListItem>{name}: {number}
        <DeleteButton contactId={id}></DeleteButton>
            </ListItem>

}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
}

export default ContactListItem;