import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'

const store = configureStore({
    reducer: {
        usuario: userReducer
    }
})

//type
export type RootState = ReturnType<typeof store.getState>;

//dispatcher
export type AppDispatch = typeof store.dispatch;

export default store;