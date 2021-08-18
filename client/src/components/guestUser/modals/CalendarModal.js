import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { openCreateEventModal, setDateClicked } from "../../../redux/actions/eventActions";

function CalendarModal() {
  const { events } = useSelector((state) => state.eventReducer);
  const dispatch = useDispatch();
  // console.log(events);
  useEffect(() => {
    // console.log(events);
  }, [events]);

  const handleOpenDateClickedModal = (date) => {
    dispatch(setDateClicked(date))
    dispatch(openCreateEventModal());
  };
  return (
    <div style={{ width: "900px", height: "800px" }}>
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
        editable={true}
      />
    </div>
  );
}

export default CalendarModal;
