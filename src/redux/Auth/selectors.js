export const selectToken = state => {
  return state.auth.token;
};

export const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};

export const selectIsRefreshing = state => {
  return state.auth.isRefreshing;
};

export const selectUser = state => {
  return state.auth.user;
};

export const getContacts = state => state.phonebook.contacts.items;
export const getFilteredContacts = state => {
    const filter = state.phonebook.filter.toLowerCase();
    return state.phonebook.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
}
export const getIsLoading = state => state.phonebook.contacts.isLoading;
export const getError = state => state.phonebook.contacts.error;
export const getFilter = state => state.phonebook.filter;