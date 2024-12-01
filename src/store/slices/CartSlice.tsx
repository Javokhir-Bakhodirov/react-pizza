import { PizzaI } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state and types
export interface StateI {
    cart: PizzaI[];
}

const initialState: StateI = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: StateI, action: PayloadAction<PizzaI>) => {
            const existingIndex = state.cart.findIndex(
                pizza => pizza.id === action.payload.id
            );
            if (existingIndex === -1) {
                state.cart.push({ ...action.payload, quantity: 1 });
            } else {
                state.cart[existingIndex].quantity += 1;
            }
        },

        removeFromCart: (state: StateI, action: PayloadAction<number>) => {
            const existingIndex = state.cart.findIndex(
                pizza => pizza.id === action.payload
            );
            if (existingIndex !== -1) {
                if (state.cart[existingIndex].quantity > 1) {
                    state.cart[existingIndex].quantity -= 1;
                } else {
                    state.cart.splice(existingIndex, 1);
                }
            }
        },

        delateFromCart: (state: StateI, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(
                pizza => pizza.id !== action.payload
            );
        },

        // Clear the entire cart
        clearCart: (state: StateI) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, delateFromCart, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
