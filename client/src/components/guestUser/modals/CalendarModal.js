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
import UpdateAndDeleteEvent from "../eventsFolder/UpdateAndDeleteEvent";

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
    dispatch(openUpdateOrDeleteEventModal(event));
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
        eventClick={(event) => handleEventClicked(event)}
        editable={true}
      />
      <UpdateAndDeleteEvent />
    </div>
  );
}

export default CalendarModal;
