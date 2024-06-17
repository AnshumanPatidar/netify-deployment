
import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
  name : "WishList",
  initialState : [],
  reducers : {
    addToWishList : (state , action ) => {
       state.push(action.payload)
       
       
    },
    removeFromWishList : (state , action ) => {
      return state.filter((itemID) => itemID != action.payload)
    }

  }
});




export const wishListAction = wishListSlice.actions;
export default wishListSlice;