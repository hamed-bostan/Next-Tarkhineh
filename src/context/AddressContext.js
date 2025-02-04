import { createContext, useState } from "react";

export const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [editingAddress, setEditingAddress] = useState(null);

  const [selectedAddress, setSelectedAddress] = useState(
    editingAddress?.address || ""
  );

  return (
    <AddressContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        editingAddress,
        setEditingAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
