import { Calendar, dayjsLocalizer, Event } from "react-big-calendar";
import dayjs from "dayjs";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dayjsLocalizer(dayjs);
/* const defDate = new Date();
const finalDate = new Date(defDate.getDate() + 1); */
const defDate = new Date();
const finalDate = new Date(defDate.getDate() + 1);

export const MyCalendar = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Learn cool stuff",
      start: defDate,
      end: finalDate,
    },
  ]);
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        backgroundEvents={[{
          title: 'Available for Clients',
          start: new Date(2024, 10, 10, 6),
          end: new Date(2024, 10, 10, 18),
        }]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
