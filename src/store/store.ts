import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slices/CartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
