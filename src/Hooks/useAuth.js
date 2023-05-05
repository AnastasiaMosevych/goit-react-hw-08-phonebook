import { useSelector } from 'react-redux';
import { selectToken, selectIsLoggedIn, selectIsRefreshing, selectUser } from 'redux/Auth/selectors';

export const UseAuth = () => {
  return {
    token: useSelector(selectToken),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};