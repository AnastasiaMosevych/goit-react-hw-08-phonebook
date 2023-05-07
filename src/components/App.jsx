import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./ContactList/ContactList.styled";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Hearts } from "react-loader-spinner";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import { useDispatch } from "react-redux";
import { getProfileThunk } from "redux/Auth/Thunks";
import { UseAuth } from "Hooks/useAuth";
import { fetchContacts } from "redux/operations";
import NotFound from "./NotFound/NotFound";


const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = UseAuth();
  useEffect(() => {
    dispatch(getProfileThunk())
    isLoggedIn && (dispatch(fetchContacts()))
  }, [dispatch, isLoggedIn])

  return (
    <Container>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route
            index element={
                <HomePage />
            }>
          </Route>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Hearts 
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />}>
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              </Suspense>}
          ></Route>
          <Route path="/register"
            element={
              <Suspense fallback={<Hearts 
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />}>
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
              </Suspense>}
          >
          </Route>
          <Route path="/contacts"
            element={
              <Suspense fallback={<Hearts 
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />}>
                <PrivateRoute>
                <Contacts />
              </PrivateRoute>
              </Suspense>
              }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App
