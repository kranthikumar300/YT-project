import {createSlice} from "@reduxjs/toolkit";

const SlideSlice = createSlice({
    name : "HomeSlide",
    initialState : {
        isMenuOpen : true,
    },
    reducers : {
      toggleMenu : (state) => {
       state.isMenuOpen = !state.isMenuOpen;
      },
      closeMenu : (state) => {
        state.isMenuOpen = false;
      }
    },
});

export const {toggleMenu,closeMenu} = SlideSlice.actions;
export default SlideSlice.reducer;