import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage
import cartReducer from "./reducers/cartReducer";

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore serializable checks for redux-persist
    }),
});

// Configure persistor
export const persistor = persistStore(store);
