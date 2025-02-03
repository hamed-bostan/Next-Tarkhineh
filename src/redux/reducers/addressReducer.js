import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [], // Store multiple addresses
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    storeAddress: (state, action) => {
      state.addresses.push(action.payload); // Append a new address
    },
    clearAddresses: (state) => {
      state.addresses = []; // Clear all addresses
    },
  },
});

export const { storeAddress, clearAddresses } = addressSlice.actions;
export default addressSlice.reducer;
