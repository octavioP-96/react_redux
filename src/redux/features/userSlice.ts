import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    nombre: string;
    correo: string;
    autorizado:boolean;
}

const estadoInicial: UserState = {
    nombre:"",
    correo:"",
    autorizado:false
}

const userSlice = createSlice({
    name: "usuario",
    initialState: estadoInicial,
    reducers: {
        setUsuario: (state, action: PayloadAction<UserState>) => {
            state.nombre = action.payload.nombre;
            state.correo = action.payload.correo;
            state.autorizado = true;
        },
        logout: (state) => { 
            state.nombre = "";
            state.autorizado = false;
         }
    }
})

export const {setUsuario, logout} = userSlice.actions;
export default userSlice.reducer