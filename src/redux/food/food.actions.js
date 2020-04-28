/**
 * import action
 */

import FoodActionTypes from "./food.types";

export const updateCollections = (collectionsMap) => ({
  type: FoodActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
