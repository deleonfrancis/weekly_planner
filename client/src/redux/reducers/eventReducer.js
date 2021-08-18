import {
  CREATE_EVENT,
  OPEN_CREATE_EVENT_MODAL,
  CLOSE_CREATE_EVENT_MODAL,
  SET_DATE_CLICKED,
  CLEAR_DATE_CLICKED,
  // UPDATE_EVENT,
  // DELETE_EVENT
} from "../actions/types";

const initialState = {
  events: [
    {
      id: "1",
      title: "This Meeting",
      start: "2021-08-16T12:30:00",
      end: "2021-08-16T14:30:00",
    },
    {
      id: "2",
      title: "Eat Out",
      start: "2021-08-16T13:30:00",
      end: "2021-08-16T16:30:00",
    },
    { id: "3", title: "Eat Out", start: "2021-08-17", end: "2021-08-17" },
  ],
  showCreateEventModal: false,
  dateClicked: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [payload, ...state.events],
      };
    case OPEN_CREATE_EVENT_MODAL:
      return {
        ...state,
        showCreateEventModal: payload,
      };
    case CLOSE_CREATE_EVENT_MODAL:
      return {
        ...state,
        showCreateEventModal: payload,
      };
    case SET_DATE_CLICKED:
      return {
        ...state,
        dateClicked: payload,
      };
    case CLEAR_DATE_CLICKED:
      return {
        ...state,
        dateClicked: payload,
      };
    default:
      return state;
  }
}
