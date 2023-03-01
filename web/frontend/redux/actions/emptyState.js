import { SELECT_ESSENCE, SELECT_ITEMS } from "../constants/emptyState";

export const selectEssennce = (payload) => ({
  type: SELECT_ESSENCE,
  payload,
});

export const selectItems = (payload) => ({
  type: SELECT_ITEMS,
  payload,
});
