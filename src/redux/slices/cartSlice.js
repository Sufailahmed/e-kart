import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload
            const existingItem = state.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.push({ ...newItem, quantity: 1 })
            }
            else {
                existingItem.quantity += 1
            }
        }, 
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer