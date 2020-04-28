/**
 * libraries
 */
import { createSelector } from "reselect";

const selectFood = (state) => state.food;

export const selectFoodItems = createSelector(
  [selectFood],
  (food) => food.collections
);
