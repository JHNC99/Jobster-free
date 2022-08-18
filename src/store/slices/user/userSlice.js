import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../../utils/axios';
import toast from 'react-hot-toast';
const initialState = {
    isLoading: false,
    user: null,
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {

        try {
            const resp = await customFetch.post('/auth/testingRegister', );
            console.log(resp);
        } catch (error) {
            toast.error(error.response.data.msg);
            console.log(error.response);
        }

    }
)
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        console.log(user)
    }

)
export const userSlice = createSlice({
    name: 'user',
    initialState,
})

export default userSlice.reducer