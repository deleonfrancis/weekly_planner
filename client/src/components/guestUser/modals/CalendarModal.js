import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {
  openCreateEventModal,
  openUpdateOrDeleteEventModal,
  setDateClicked,
} from "../../../redux/actions/eventActions";
import UpdateOrDeleteEvent from "../eventsFolder/UpdateOrDeleteEvent";

function CalendarModal() {
  const { events } = useSelector((state) => state.eventReducer);
  const dispatch = useDispatch();
  // console.log(events);
  useEffect(() => {
    // console.log(events);
  }, [events]);

  const handleOpenDateClickedModal = (date) => {
    dispatch(setDateClicked(date));
    dispatch(openCreateEventModal());
  };
  const handleEventClicked = (event) => {
    console.log("event Clicked", event)
    const eventObject = {
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.allDay,
      backgroundColor: event.backgroundColor,
    };
    // console.log("event: ", event)
    // console.log("eventObject: ", eventObject)
    dispatch(openUpdateOrDeleteEventModal(eventObject));
  };
  const calendarClasses = {
    // cursor: "pointer",
    width: "900px",
    // height: "800px",
  };
  return (
    <div style={calendarClasses}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today prevYear,nextYear",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        events={events}
        dateClick={(date) => handleOpenDateClickedModal(date)}
        eventClick={(info) => handleEventClicked(info.event)}
        editable={true}
      />
      <UpdateOrDeleteEvent />
    </div>
  );
}

export default CalendarModal;
