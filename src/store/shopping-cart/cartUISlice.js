import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartVisible : false
}
const cartUISlice = createSlice({
    name: "cartUI",
    initialState,
    reducers:{
        toggle(state){
            state.isCartVisible = !state.isCartVisible
        }
    }
});

export const cartUIActions = cartUISlice.actions;
export default cartUISlice