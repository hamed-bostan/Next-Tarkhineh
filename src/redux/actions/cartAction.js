import { ADD_ITEM, REMOVE_ITEM, INCREASE, DECREASE, CHECKOUT, CLEAR } from "./cartActionTypes";

const addItem = (product) => ({
  type: ADD_ITEM,
  payload: product,
});

const removeItem = (product) => ({
  type: REMOVE_ITEM,
  payload: product,
});

const increase = (product) => ({
  type: INCREASE,
  payload: product,
});

const decrease = (product) => ({
  type: DECREASE,
  payload: product,
});

const checkout = () => ({
  type: CHECKOUT,
});

const clear = () => ({
  type: CLEAR,
});

export { addItem, removeItem, increase, decrease, checkout, clear };
