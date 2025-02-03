import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null, // Default: No address
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    storeAddress: (state, action) => {
      state.address = action.payload;
    },
    clearAddress: (state) => {
      state.address = null;
    },
  },
});

export const { storeAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
