import {
  CREATE_EVENT,
  // UPDATE_EVENT,
  // DELETE_EVENT
} from "../actions/types";

export const createEvent = (event) => (dispatch) => {
  dispatch({ type: CREATE_EVENT, payload: event });
};
