import { UseAuth } from "../../../Hooks/useAuth";
import { Navigate } from 'react-router-dom';


const HomePage = () => {
  const { isLoggedIn } = UseAuth();
  return isLoggedIn ? (
    <Navigate to="/contacts" replace />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default HomePage
