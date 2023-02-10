import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIsVisible : false
}
const cartUISlice = createSlice({
    name: "cartUI",
    initialState,
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export const cartUIActions = cartUISlice.actions;
export default cartUISlice