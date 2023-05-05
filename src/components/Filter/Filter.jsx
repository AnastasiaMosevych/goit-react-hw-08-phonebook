import { Input, Label } from "components/Phonebook/Phonebook.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFilter } from "redux/PhonebookSlice";
import { getFilter } from "redux/Auth/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const handleChange = ({ target }) => {
        dispatch(setFilter(target.value));
    }
    return <>
        <Label>Find contacts by name</Label>
        <Input onChange={handleChange} type="search"
            name="filter" value={filter}
        ></Input>
    </>
}
