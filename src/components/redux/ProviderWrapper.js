"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { AddressDialogProvider } from "@/context/AddressDialogContext";

export default function ProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <AddressDialogProvider>{children}</AddressDialogProvider>
      </PersistGate>
    </Provider>
  );
}
