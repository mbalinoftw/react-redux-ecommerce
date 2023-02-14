import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  item: null
};

export const modalSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state, {payload}) => {
      state.isOpen = true;
      state.item = payload;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
