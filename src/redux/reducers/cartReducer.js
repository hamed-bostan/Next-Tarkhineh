const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce((total, { quantity }) => total + quantity, 0);
  const totalPrice = items
    .reduce((total, { quantity, finalPrice }) => total + quantity * finalPrice, 0)
    .toFixed(2);
  return { itemsCounter, totalPrice };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.selectedItems.find((item) => item.id === action.payload.id);
      const updatedItems = exists
        ? state.selectedItems
        : [...state.selectedItems, { ...action.payload, quantity: 1 }];
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumItems(updatedItems),
        checkout: false,
      };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
      return { ...state, selectedItems: updatedItems, ...sumItems(updatedItems) };
    }

    case "INCREASE": {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, selectedItems: updatedItems, ...sumItems(updatedItems) };
    }

    case "DECREASE": {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, selectedItems: updatedItems, ...sumItems(updatedItems) };
    }

    case "CHECKOUT":
      return { ...initialState, checkout: true };

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
