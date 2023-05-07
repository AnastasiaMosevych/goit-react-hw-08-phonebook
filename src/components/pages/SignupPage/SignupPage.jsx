import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FormStyle, Label, Input, SubmitBtn } from '../../Phonebook/Phonebook.styled';
import { Title } from "components/Common/Title";
import { signUp } from 'services/Auth-service';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/Auth/Thunks';

export const SignupPage = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        signUp(newUser)
            .then(() => {
                toast.success('Profile created successfully')
                dispatch(loginThunk({
                    email: e.target.elements.email.value,
                    password: e.target.elements.password.value,
                }))
            })
            .catch(() => toast.error('Invalid Email or Password'))
    }
    return (
        <div>
            <Title title='Sign Up'></Title>
            <FormStyle
                onSubmit={handleSubmit}>
                <div>
                    <Label>Name</Label>
                        <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    <Label>Email address</Label>
                        <Input
                        type="email"
                        name="email"
                        pattern="^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                        title="Please provide only valid email. For example example@email.org"
                        required
                        />
                    <Label>Password</Label>
                        <Input
                        type="password"
                        name="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        required
                    /> 
                    <SubmitBtn type="submit">Sign Up</SubmitBtn>
                </div>
            </FormStyle>
            <ToastContainer/>
        </div>
    )
}

export default SignupPage
