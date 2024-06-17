import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone : false,  // false : "pending " , true : "done"
    fetchingCurrently : false
  },
  reducers: {
      markFetchingDone : (state ) => {
         state.fetchDone = true;
         
      } ,
      markFetchingStarted : (state  ) => {
         state.fetchingCurrently = true;
         
      }   ,
      markFetchingFinished : (state  ) => {
         state.fetchingCurrently = false;
         
      }

    },
  },
);

export const fetchStatusAction = fetchStatusSlice.actions;

export default fetchStatusSlice;