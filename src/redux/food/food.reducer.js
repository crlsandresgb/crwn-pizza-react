/**
 * import data
 */

import MENU_DATA from "./food.data";

/**
 * init data
 */

const INITIAL_STATE = {
  collections: MENU_DATA,
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default foodReducer;
