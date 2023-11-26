import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Api/apiSlice";



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>