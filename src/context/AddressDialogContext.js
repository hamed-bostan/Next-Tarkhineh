import { createContext, useState, useContext } from "react";

const AddressDialogContext = createContext();

export const AddressDialogProvider = ({ children }) => {
  const [isGeolocationDialogOpen, setIsGeolocationDialogOpen] = useState(false);
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);

  const openGeolocationDialog = () => setIsGeolocationDialogOpen(true);
  const closeGeolocationDialog = () => setIsGeolocationDialogOpen(false);

  const openAddressDialog = () => setIsAddressDialogOpen(true);
  const closeAddressDialog = () => setIsAddressDialogOpen(false);

  return (
    <AddressDialogContext.Provider
      value={{
        isGeolocationDialogOpen,
        openGeolocationDialog,
        closeGeolocationDialog,
        isAddressDialogOpen,
        openAddressDialog,
        closeAddressDialog,
      }}
    >
      {children}
    </AddressDialogContext.Provider>
  );
};

export const useAddressDialog = () => useContext(AddressDialogContext);
