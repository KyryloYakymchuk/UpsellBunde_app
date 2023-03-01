import { SET_EDIT_ID } from "../constants/upsell";

const initialState = {
  editId: "",
};

const upsellReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_ID:
      return {
        ...state,
        editId: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default upsellReducer;
