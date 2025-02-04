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
      state.addresses.push({ id: Date.now(), ...action.payload }); // Assign unique id
    },
    clearAddresses: (state) => {
      state.addresses = []; // Clear all addresses
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (address) => address.id !== action.payload
      ); // Remove address by id
    },
    updateAddress: (state, action) => {
      const index = state.addresses.findIndex(
        (address) => address.id === action.payload.id
      );
      if (index !== -1) {
        state.addresses[index] = action.payload; // Update the address object
      }
    },
  },
});

export const { storeAddress, clearAddresses, deleteAddress, updateAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
