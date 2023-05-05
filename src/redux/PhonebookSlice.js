import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const PhonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        filter: ''
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        }
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = [...state.contacts.items, action.payload];
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            const index = state.contacts.items.findIndex(
                item => item.id === action.payload.id
            );
            state.contacts.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,  
    }
})

export const { setFilter } = PhonebookSlice.actions;
export const PhonebookReducer = PhonebookSlice.reducer;
