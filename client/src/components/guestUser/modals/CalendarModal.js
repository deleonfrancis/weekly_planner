import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
// import { Calendar } from "@fullcalendar/core";
// import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function CalendarModal() {
  // let calendar = new Calendar(calendarEl, {
  //   plugins: [timeGridPlugin],
  //   initialView: "timeGridWeek",
  // });
  return (
    <div style={{ width: "800px", height: "700px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
        }}
      />
    </div>
  );
}

export default CalendarModal;
