import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getProfileThunk, loginThunk } from "./Thunks";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isRefreshing: false,
    isLoggedIn: false,
}

const handlePending = (state, {payload}) => {
    state.Refreshing = true
}
const handleFulfilled = (state, { payload }) => {
    state.isLoggedIn = true
    state.isRefreshing = false
    state.token = payload.token
    state.user = payload.user
}

const handleFulfilledProfile = (state, { payload }) => {
    state.isRefreshing = false
    state.isLoggedIn = true
    state.user = payload
}

const handleRejected = (state, {payload}) => {
    state.isRefreshing = false
    state.isLoggedIn = false
    state.token = ''
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logOut(state) {
            state.user = null
            state.token = ''
            state.isLoggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, handleFulfilled)
            .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
            .addMatcher(isAnyOf(loginThunk.pending, getProfileThunk.pending), handlePending)
            .addMatcher(isAnyOf(loginThunk.rejected, getProfileThunk.rejected), handleRejected)
    }
})

export const authReducer = AuthSlice.reducer;
export const { logOut } = AuthSlice.actions
