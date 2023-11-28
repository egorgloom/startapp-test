import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slices/apiSlice";

import { cartReducer } from './Slices/cartSlice';




export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer ,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>