import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authReqModel } from "../../models/authReqModel";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials:authReqModel, thunkAPI) =>{
        try{
            const response = await axios.post(
                'https://dummyjson.com/auth/login', 
                // credentials,
                {
                    username: 'emilys',
                    password: 'emilyspass',
                    expiresInMins: 30, // optional, defaults to 60
                  });
            return response.data;
        }catch(error: any){
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)

interface AuthState {
    user: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        logout: (state) => { state.user = null }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => { 
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.username;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;