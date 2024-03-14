import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React,{useEffect, useState} from 'react'
import axios from 'axios'
// import { response } from 'express'
export default function Calendar() {
const [events, setEvents] = useState([])
useEffect(() => {
  fetch('http://localhost:3001/goals')
    .then(response => response.json())
    .then(data => {
      const formattedEvents = data.map(item => ({
        title: item.goalName, 
        start: item.startDate, 
        end: item.endDate, 
       
      }));
      setEvents(formattedEvents);
    })
    .catch(error => {
      console.error('Error fetching events:', error);
    });
}, []); 

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
      events={events}
    />
    </div>
  )
}
//https://www.youtube.com/watch?v=X2zLbKimvQQ
