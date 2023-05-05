import { FormStyle, Label, Input, SubmitBtn } from '../../Phonebook/Phonebook.styled';
import { Title } from "components/Common/Title";
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { loginThunk } from 'redux/Auth/Thunks';


const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(loginThunk({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    }))
      .unwrap()
      .catch(() => toast.error("You are not signed up. Please sign up."))
    }
    return (
      <div>
        <Title title="Log In"></Title>
          <FormStyle
            onSubmit={handleSubmit}>
            <div>
              <Label>Email</Label>
                <Input
                  // onChange={handleNumberChange}
                  type="email"
            //   value={email}
                  name="email"
                  pattern="^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                  title="Please provide only valid email. For example example@email.org"
                  required
                    />
              <Label>Password</Label>
                <Input
                        // onChange={handleNumberChange}
                  type="password"
            //   value={password}
                  name="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                    />        
              <SubmitBtn type="submit">
                Log In
              </SubmitBtn>
            </div>
        </FormStyle>
        <ToastContainer/>
      </div>   
    )   
}

export default LoginPage
