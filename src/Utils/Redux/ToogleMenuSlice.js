import { createSlice } from "@reduxjs/toolkit";

const ToggleMenuSlice = createSlice({
    name: 'MenuToogler',
    initialState: {
        isMenuOpen: true,
    },
    reducers:{
      toogleMenu : (state)=>{
        state.isMenuOpen = !state.isMenuOpen;
      },
      closeMenu : (state)=>{
        state.isMenuOpen = false;
      }
    }
    
});

export const {toogleMenu,closeMenu} = ToggleMenuSlice.actions;
export default ToggleMenuSlice.reducer;
