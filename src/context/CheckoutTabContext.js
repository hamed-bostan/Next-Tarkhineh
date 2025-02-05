"use client";
import { createContext, useState, useContext } from "react";

// Create Context
const CheckoutTabContext = createContext();

// Provider Component
export function CheckoutTabProvider({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <CheckoutTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </CheckoutTabContext.Provider>
  );
}

// Custom Hook for consuming context
export function useCheckoutTab() {
  return useContext(CheckoutTabContext);
}
