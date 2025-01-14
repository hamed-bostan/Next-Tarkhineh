const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

// Helper function to calculate itemsCounter and totalPrice
const sumItems = (items) =>
  items.reduce(
    (totals, item) => {
      totals.itemsCounter += item.quantity;
      totals.totalPrice += item.quantity * item.finalPrice;
      return totals;
    },
    { itemsCounter: 0, totalPrice: 0 }
  );

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Check if item exists and increase quantity if so
      const existingItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      const updatedItems = existingItem
        ? state.selectedItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.selectedItems, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        selectedItems: updatedItems,
        ...sumItems(updatedItems),
      };

    case "REMOVE_ITEM":
      const remainingItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: remainingItems,
        ...sumItems(remainingItems),
      };

    case "INCREASE":
      const increasedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        selectedItems: increasedItems,
        ...sumItems(increasedItems),
      };

    case "DECREASE":
      const decreasedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        selectedItems: decreasedItems,
        ...sumItems(decreasedItems),
      };

    case "CHECKOUT":
      return { ...initialState, checkout: true };

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
