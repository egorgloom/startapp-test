import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from './../interfaces/interfaces';

const initialState: IProduct[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state, action: PayloadAction<IProduct>) => {
            state.push(action.payload)

        },

        removeToCart: (state, action: PayloadAction<{id: number}> ) => {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer 