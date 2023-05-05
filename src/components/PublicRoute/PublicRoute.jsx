import { UseAuth } from "Hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const { isLoggedIn } = UseAuth();
    const {state} = useLocation();
    return !isLoggedIn ? children : <Navigate to={state ? state : "/"}/>
}

export default PublicRoute
