import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "services/Auth-service";
import { getProfile, setToken } from "services/Auth-service";
import { toast } from "react-toastify";

export const loginThunk = createAsyncThunk('users/login', async (body, {dispatch}) => {
    const data = await login(body)
    dispatch(getProfileThunk())
    return data
})

export const getProfileThunk = createAsyncThunk('users/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token 

    if (persistedToken === '') {
        return thunkAPI.rejectWithValue("Rejected");
    }
    setToken(persistedToken)
    try {
        return await getProfile()
    } catch (error) {
        toast.error("Error")
        return thunkAPI.rejectWithValue("It is an error")
    }
})