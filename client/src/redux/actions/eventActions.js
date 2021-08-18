import {
  CREATE_EVENT,
  OPEN_CREATE_EVENT_MODAL,
  CLOSE_CREATE_EVENT_MODAL,
  SET_DATE_CLICKED,
  CLEAR_DATE_CLICKED,
  // UPDATE_EVENT,
  // DELETE_EVENT
} from "../actions/types";

export const createEvent = (event) => (dispatch) => {
  dispatch({ type: CREATE_EVENT, payload: event });
};

export const openCreateEventModal = () => (dispatch) => {
  dispatch({ type: OPEN_CREATE_EVENT_MODAL, payload: true });
};

export const closeCreateEventModal = () => (dispatch) => {
  dispatch({ type: CLOSE_CREATE_EVENT_MODAL, payload: false });
  dispatch({ type: CLEAR_DATE_CLICKED, payload: null });
};
export const setDateClicked = (date) => (dispatch) => {
  dispatch({ type: SET_DATE_CLICKED, payload: date });
};
export const clearDateClicked = () => (dispatch) => {
  dispatch({ type: CLEAR_DATE_CLICKED, payload: null });
};
