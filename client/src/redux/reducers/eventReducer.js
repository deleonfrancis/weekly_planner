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
      title: "Meeting with Jake",
      start: "2021-08-15T12:30:00",
      end: "2021-08-15T14:30:00",
    },
    {
      id: "2",
      title: "Rehearsal",
      start: "2021-08-16T13:30:00",
      end: "2021-08-16T16:30:00",
    },
    { id: "3", title: "Clean Garage", start: "2021-08-16", end: "2021-08-16" },
    {
      id: "4",
      title: "Meeting Dave",
      start: "2021-08-17T12:30:00",
      end: "2021-08-17T14:30:00",
    },
    {
      id: "5",
      title: "Lunch with Karl",
      start: "2021-08-18T13:30:00",
      end: "2021-08-18T16:30:00",
    },
    { id: "6", title: "Computer Programming", start: "2021-08-17", end: "2021-08-17" },
    {
      id: "7",
      title: "Eat Out",
      start: "2021-08-18T13:30:00",
      end: "2021-08-18T16:30:00",
    },
    { id: "8", title: "Eat Out", start: "2021-08-17", end: "2021-08-17" },
    {
      id: "9",
      title: "This Meeting",
      start: "2021-08-18T12:30:00",
      end: "2021-08-18T14:30:00",
    },
    {
      id: "10",
      title: "Eat Out",
      start: "2021-08-19T13:30:00",
      end: "2021-08-19T16:30:00",
    },
    { id: "11", title: "Eat Out", start: "2021-08-20", end: "2021-08-20" },
    { id: "12", title: "Eat Out", start: "2021-08-21", end: "2021-08-21" },
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
