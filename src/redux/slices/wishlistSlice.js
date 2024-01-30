import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        //functions or actions place here
        addToWishlist:(state,action)=>{
            const newItem = action.payload
            const existingItem = state.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.push({ ...newItem, quantity: 1 })
            }
            else {
                existingItem.quantity +=1
            }
           
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        }
    }
})
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer