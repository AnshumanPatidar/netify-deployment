import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatus";
import bagSlice from "./bag";
import bagSummarySlice from "./bagSummary";
import wishListSlice from "./WishList";
import  HoverActionSlice from "./HoverAction";






const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus : fetchStatusSlice.reducer,
    bag : bagSlice.reducer,
    BagSummary : bagSummarySlice.reducer,
    wishList : wishListSlice.reducer,
    HoverAction : HoverActionSlice.reducer
  },
});

export default myntraStore;
