/**
 * import data
 */

import FoodActionTypes from "./food.types";
/**
 * init data
 */

const INITIAL_STATE = {
  collections: null,
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FoodActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
