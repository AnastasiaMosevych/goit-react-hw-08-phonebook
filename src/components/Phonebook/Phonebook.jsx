import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/Auth/selectors";
import { useState } from 'react';
import { FormStyle, Label, Input, SubmitBtn } from './Phonebook.styled';

export const PhonebookForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = ({ target }) => {
    setName(target.value);
  }
  
  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const findContact = name => {
      const toFind = name.toLowerCase();
      if (contacts.find(({ name }) => name.toLowerCase() === toFind)) {
        return true
      } else {
        return false;
      }
    };
    if (!findContact(name)) {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    } else {
      alert(`${name} is already in contacts`);
    }
  };
  return (
    <FormStyle
      onSubmit={handleSubmit}
      >
          <div>
            <Label>Name</Label>
            <Input onChange={handleNameChange}
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Label>Number</Label>
            <Input onChange={handleNumberChange}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <SubmitBtn type="submit"
            >Add contact</SubmitBtn>
          </div>
      </FormStyle>
    )
  }
