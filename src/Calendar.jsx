import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'; // Renamed import
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Configure moment as the date library
const localizer = momentLocalizer(moment);

function Calendar() { // Renamed component to avoid conflict
  // Example task data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Task 1',
      start: new Date(2024, 9, 23, 10, 0),
      end: new Date(2024, 9, 23, 12, 0),
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Meeting with Team',
      start: new Date(2024, 9, 25, 9, 30),
      end: new Date(2024, 9, 25, 11, 0),
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Project Deadline',
      start: new Date(2024, 9, 30, 14, 0),
      end: new Date(2024, 9, 30, 16, 0),
      status: 'Pending',
    },
  ]);

  // Define how each task should be displayed in the calendar
  const eventStyleGetter = (event) => {
    let backgroundColor = event.status === 'Completed' ? '#28a745' : event.status === 'In Progress' ? '#ffc107' : '#dc3545';
    return {
      style: {
        backgroundColor,
        color: 'white',
        borderRadius: '5px',
        border: 'none',
      },
    };
  };

  return (
    <div className="task-calendar">
      <h2>Task Calendar</h2>
      <BigCalendar
        localizer={localizer}
        events={tasks}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}

export default Calendar;