import { SubmitBtn } from "components/Phonebook/Phonebook.styled";
import { logOut } from "redux/Auth/AuthSlice";
import { UseAuth } from "Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, user } = UseAuth();
    const handleOnClick = () => {
        dispatch(logOut());
        navigate('/login');
    };
    
    return (
        { isLoggedIn } && (
            <div>
                <p>Welcome, {user.name}!</p>
                <SubmitBtn type="submit" onClick={handleOnClick}>Log out</SubmitBtn>
            </div>)
    )
}

export default UserMenu;