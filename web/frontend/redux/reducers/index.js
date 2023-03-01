import { combineReducers } from "redux";
import emptyStateReducer from "./emptyState";
import upsellReducer from "./upsell";
export const rootReducer = combineReducers({
  emptyStateReducer,
  upsellReducer,
});
