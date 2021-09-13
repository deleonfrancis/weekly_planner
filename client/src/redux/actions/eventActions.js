import {
  CREATE_EVENT,
  OPEN_CREATE_EVENT_MODAL,
  CLOSE_CREATE_EVENT_MODAL,
  SET_DATE_CLICKED,
  CLEAR_DATE_CLICKED,
  OPEN_UPDATE_DELETE_EVENT_MODAL,
  CLOSE_UPDATE_DELETE_EVENT_MODAL,
  SET_SELECTED_EVENT,
  CLEAR_SELECTED_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  SET_EVENT_BACKGROUND_COLOR,
  CLEAR_EVENT_BACKGROUND_COLOR
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

export const updateEvent = (event) => (dispatch) => {
  // console.log("updated event fired")
  // console.log(event)
  dispatch({ type: UPDATE_EVENT, payload: event });
};

export const openUpdateOrDeleteEventModal = (event) => (dispatch) => {
  dispatch({ type: OPEN_UPDATE_DELETE_EVENT_MODAL, payload: true });
  dispatch({ type: SET_SELECTED_EVENT, payload: event });
  
};
export const closeUpdateOrDeleteEventModal = () => (dispatch) => {
  dispatch({ type: CLOSE_UPDATE_DELETE_EVENT_MODAL, payload: false });
  dispatch({ type: CLEAR_SELECTED_EVENT, payload: null });
};
export const deleteEvent = (id) => (dispatch) => {
  dispatch({ type: DELETE_EVENT, payload: id });
  dispatch({ type: CLOSE_UPDATE_DELETE_EVENT_MODAL, payload: false });
  dispatch({ type: CLEAR_SELECTED_EVENT, payload: null });
};

export const setDateClicked = (date) => (dispatch) => {
  dispatch({ type: SET_DATE_CLICKED, payload: date });
};
export const clearDateClicked = () => (dispatch) => {
  dispatch({ type: CLEAR_DATE_CLICKED, payload: null });
};
export const setEventBackgroundColor = (color) => (dispatch) => {
  dispatch({ type: SET_EVENT_BACKGROUND_COLOR, payload: color });
};
export const clearEventBackgroundColor = () => (dispatch) => {
  dispatch({ type: CLEAR_EVENT_BACKGROUND_COLOR });
};


