import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null, // Default: No address
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    clearAddress: (state) => {
      state.address = null;
    },
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
