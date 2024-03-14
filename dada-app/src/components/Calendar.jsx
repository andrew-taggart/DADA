import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


export default function Calendar() {


  return (
    <div className="calendar-container">
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth" 
      headerToolbar = {{
        start: "prev,next",
        center: "title",
        end: "dayGridMonth, timeGridWeek, timeGridDay"
      }} height="520px"      
    />
    </div>
  )
}
