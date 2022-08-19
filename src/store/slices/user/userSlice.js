import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../../utils/axios';
import { addUserToLocalStorage, getUserFromLocalStorage } from "../../../utils/localStorage"
import toast from 'react-hot-toast';
const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {

        try {
            const resp = await customFetch.post('/auth/register', user);
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }

    }
)
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', user);
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWhitValue(error.response.data.msg);
        }
    }

)
export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Hello There ${user.name}`);
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },

        /* Login  toast */
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user)
            toast.success(`Welcome back: ${user.name}`);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        }
    }

})

export default userSlice.reducer