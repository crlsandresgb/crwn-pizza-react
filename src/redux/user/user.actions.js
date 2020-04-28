/**
 * import actions
 */
import UserActionTypes from "./user.types";

/**
 * user actions
 */

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
