import { createSlice } from "@reduxjs/toolkit";



const HoverActionSlice = createSlice({
  name: "HoverAction",
  initialState: {
    women : false,
    men : false,
    kids : false,
    home : false,
    beauty : false,
    studio : false,
    nav : false
  },
  reducers: {
    showGrayScreen : (state ) => {
      state.nav = true;
    },
    hideGrayScreen : (state) => {
      state.nav = false;
    },
    openTheWomenSection: (state) => {
       state.women = true;
      
    },
    closeTheWomenSection : (state) => {
        state.women = false;
    },
    openMenSection : (state ) => {
      
      state.men = true;
    },
    closeMenSection : (state) => {
      state.men = false;
  },
    openKidsSection : (state ) => {
      
      state.kids = true;
    },
    closeKidsSection : (state) => {
      state.kids = false;
  },
  },
});

export const HoverActionAction = HoverActionSlice.actions;

export default HoverActionSlice;