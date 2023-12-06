'use client'

import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

export const CalenderView = () => {
  const localizer = momentLocalizer(moment)
  const events = [
    {
      id: 0,
      start: moment('2023-11-06T00:00:00').toDate(),
      end: moment('2023-11-06T00:00:00').toDate(),
      allDay: true,
      title: 'Quiz4',
    },
    {
      id: 1,
      start: moment('2023-12-18T14:00:00').toDate(),
      end: moment('2023-12-18T15:30:00').toDate(),
      allDay: true,
      title: 'Final Exam',
    },
  ]

  return (
    <>
      <div className="text-2xl font-semibold text-center mt-4">Calendar</div>
      <Calendar
        localizer={localizer}
        events={events}
        style={{ height: 400, margin: '1rem 4rem 4rem 0rem' }}
      />
    </>
  )
}
