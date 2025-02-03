import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [], // Store multiple addresses
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    storeAddress: (state, action) => {
      if (!state.addresses) {
        state.addresses = []; // Ensure it's an array
      }
      state.addresses.push(action.payload);
    },
    clearAddresses: (state) => {
      state.addresses = []; // Clear all addresses
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (address) => address.id !== action.payload
      ); // Remove address by id
    },
  },
});

export const { storeAddress, clearAddresses, deleteAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
