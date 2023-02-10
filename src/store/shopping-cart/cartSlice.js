import { createSlice } from "@reduxjs/toolkit";
import { CART_ITEMS, TOTAL_AMOUNT, TOTAL_QUANTITY } from "../../assets/constants";

const cartItems =
  localStorage.getItem(CART_ITEMS) !== null
    ? JSON.parse(localStorage.getItem(CART_ITEMS))
    : [];

const totalAmount =
  localStorage.getItem(TOTAL_AMOUNT) !== null
    ? JSON.parse(localStorage.getItem(TOTAL_AMOUNT))
    : 0;

const totalQuantity =
  localStorage.getItem(TOTAL_QUANTITY) !== null
    ? JSON.parse(localStorage.getItem(TOTAL_QUANTITY))
    : 0;

const saveStateInLocalStorage = (state) => {
  localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
  localStorage.setItem(TOTAL_QUANTITY, JSON.stringify(state.totalQuantity));
  localStorage.setItem(TOTAL_AMOUNT, JSON.stringify(state.totalAmount));
};

const calculateTotalAmount = (state) => {
    state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
}
const initialState = {
    cartItems: cartItems,
    totalQuantity : totalQuantity,
    totalAmount : totalAmount
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers :{
        // Add New Item
        addItem(state,action){
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }
            else {
                // Add New Item in the cart
                // Cart Item Model 
                // id, title, image, price, quantity, totalPrice
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            }
            calculateTotalAmount(state)
            saveStateInLocalStorage(state)
        },
        // Decrease item count 
        decreaseItem(state, action){
            const id = action.payload
            const existingItem = state.cartItems.find((item) => item.id === id);
            state.totalQuantity--;
            existingItem.quantity--;
            // If only one quantity present then remove it from carts item 
            if(existingItem.quantity <= 0){
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            }
            else {
                existingItem.totalPrice = Number(existingItem.quantity) * Number(existingItem.price) 
            }
            calculateTotalAmount(state)
            saveStateInLocalStorage(state)
        },
        // Delete Item 
        deleteItem(state, action){
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id);

            if(existingItem){
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            calculateTotalAmount(state)
            saveStateInLocalStorage(state)
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;