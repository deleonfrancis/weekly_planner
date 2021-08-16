import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function CalendarModal() {
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
        events={[
          {id:"1",
            title: "This Meeting",
            start: "2021-08-16T12:30:00",
            end: "2021-08-16T14:30:00",
          },
          {id:"2",
            title: "Eat Out",
            start: "2021-08-16T13:30:00",
            end: "2021-08-16T16:30:00",
          },
          {id:"3",
            title: "Eat Out",
            start: "2021-08-17",
            end: "2021-08-17",
          },
        ]}
        editable={true}
      />
    </div>
  );
}

export default CalendarModal;
