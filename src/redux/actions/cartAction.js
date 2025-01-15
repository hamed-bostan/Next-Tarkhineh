import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./cartActionTypes";

const addItem = (product) => ({
  type: ADD_ITEM,
  payload: product,
});

const increase = (id) => ({
  type: INCREASE,
  payload: { id },
});

const decrease = (id) => ({
  type: DECREASE,
  payload: { id },
});

const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

const checkout = () => ({
  type: CHECKOUT,
});

const clear = () => ({
  type: CLEAR,
});

export { addItem, removeItem, increase, decrease, checkout, clear };
