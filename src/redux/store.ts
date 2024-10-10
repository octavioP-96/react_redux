import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'
import authReducer from './features/authSlice'

const store = configureStore({
    reducer: {
        usuario: userReducer,
        autenticacion: authReducer
    }
})

//type
export type RootState = ReturnType<typeof store.getState>;

//dispatcher
export type AppDispatch = typeof store.dispatch;

export default store;