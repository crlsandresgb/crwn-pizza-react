/**
 * libraries
 */
import { createSelector } from "reselect";

const selectFood = (state) => state.food;

export const selectFoodItems = createSelector(
  [selectFood],
  (food) => food.collections
);

export const selectFoodForPreview = createSelector(
  [selectFoodItems],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCategory = (categoryUrlParam) =>
  createSelector(
    [selectFoodItems],
    (collections) => collections[categoryUrlParam]
  );
