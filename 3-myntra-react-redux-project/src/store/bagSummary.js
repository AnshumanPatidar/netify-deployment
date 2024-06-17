import { createSlice } from "@reduxjs/toolkit";

const bagSummarySlice = createSlice({
  name : "bagSummary",
  initialState : {
    totalMRP : 0 ,
    total_discount : 0 ,
    totalAmount : 0,
  },
  reducers : {
    giveTotalAmount : (state) => {
      state.totalAmount =  state.totalMRP - state.total_discount;
      
    },
    giveTotalDiscount : (state , action ) => {
      let discount = 0 ;
      action.payload.forEach(element => {
        discount +=    element.original_price  - element.current_price 
      })
       state.total_discount = discount;
    },
    giveTotalMRP : (state , action) => {
      let og_price = 0 ;
      action.payload.forEach(element => {
        og_price += element.original_price;
      });
      
      state.totalMRP = og_price;
    }
    
  }
})


export const bagSummarySliceAction = bagSummarySlice.actions;

export default bagSummarySlice;