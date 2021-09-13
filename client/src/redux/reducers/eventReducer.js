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
  CLEAR_EVENT_BACKGROUND_COLOR,
} from "../actions/types";

const initialState = {
  events: [
    {
      id: "1",
      title: "Meeting with Jake",
      start: "2021-09-15T12:30:00",
      end: "2021-09-15T14:30:00",
      allDay: false,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "2",
      title: "Rehearsal",
      start: "2021-09-16T13:30:00",
      end: "2021-09-16T16:30:00",
      allDay: false,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "3",
      title: "Clean Garage",
      start: "2021-09-16",
      end: "2021-09-16",
      allDay: true,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "4",
      title: "Meeting Dave",
      start: "2021-09-17T12:30:00",
      end: "2021-09-17T14:30:00",
      allDay: false,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "5",
      title: "Lunch with Karl",
      start: "2021-09-18T13:30:00",
      end: "2021-09-18T16:30:00",
      allDay: false,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "6",
      title: "Computer Programming",
      start: "2021-09-17",
      end: "2021-09-17",
      allDay: true,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "7",
      title: "Eat Out",
      start: "2021-09-18T13:30:00",
      end: "2021-09-18T16:30:00",
      allDay: false,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "8",
      title: "Eat Out",
      start: "2021-09-17",
      end: "2021-09-17",
      allDay: true,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "9",
      title: "This Meeting",
      start: "2021-09-18T12:30:00",
      end: "2021-09-18T14:30:00",
      allDay: false,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "10",
      title: "Eat Out",
      start: "2021-09-19T13:30:00",
      end: "2021-09-19T16:30:00",
      allDay: false,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "11",
      title: "Eat Out",
      start: "2021-09-20",
      end: "2021-09-20T23:59:59",
      allDay: true,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
    {
      id: "12",
      title: "Eat Out",
      start: "2021-09-21",
      end: "2021-09-21",
      allDay: true,
      backgroundColor: "rgba(74, 114, 226, 100)",
    },
  ],
  showCreateEventModal: false,
  showUpdateOrDeleteEventModal: false,
  dateClicked: null,
  selectedEvent: null,
  eventBackgroundColor: "rgba(74, 114, 226, 100)",
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
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === payload.id ? payload : event
        ),
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== payload),
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
    case OPEN_UPDATE_DELETE_EVENT_MODAL:
      return {
        ...state,
        showUpdateOrDeleteEventModal: payload,
      };
    case CLOSE_UPDATE_DELETE_EVENT_MODAL:
      return {
        ...state,
        showUpdateOrDeleteEventModal: payload,
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
    case SET_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: payload,
      };
    case CLEAR_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: payload,
      };
    case SET_EVENT_BACKGROUND_COLOR:
      return {
        ...state,
        eventBackgroundColor: payload,
      };
    case CLEAR_EVENT_BACKGROUND_COLOR:
      return {
        ...state,
        eventBackgroundColor: null,
      };
    default:
      return state;
  }
}
