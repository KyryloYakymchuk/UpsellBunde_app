import { SELECT_ESSENCE, SELECT_ITEMS } from "../constants/emptyState";

const initialState = {
  editedEssenceBulk: "Product",
  editedItemsBulk: [],
};

const emptyStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ESSENCE:
      return {
        ...state,
        editedEssenceBulk: action.payload,
      };
    case SELECT_ITEMS:
      return {
        ...state,
        editedItemsBulk: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default emptyStateReducer;
