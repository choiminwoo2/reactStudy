import { configureStore } from "@reduxjs/toolkit";
import UiSlice from './ui-slice'
import CartSlice from "./cart-slice";

const store = configureStore({
    reducer : {ui:UiSlice.reducer, cart: CartSlice.reducer }
});

export default store;