import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    nombre: string;
    autorizado:boolean;
}

const estadoInicial: UserState = {
    nombre:"",
    autorizado:false
}

const userSlice = createSlice({
    name: "usuario",
    initialState: estadoInicial,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.nombre = action.payload;
            state.autorizado = true;
        },
        logout: (state) => { 
            state.nombre = "";
            state.autorizado = false;
         }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer