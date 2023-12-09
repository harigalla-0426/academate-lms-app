'use client'

import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

export const CalenderView = ({ courseEvents }) => {
  const localizer = momentLocalizer(moment)
  const events = []

  // console.log('courseEvents', courseEvents.flat())

  const eventLegend = {
    quiz: '#6FCF97',
    assignment: '#F2994A',
    exam: '#EB5757',
  }

  const eventPropGetterFunc = (event) => {
    const backgroundColor = eventLegend[event?.assignmentType] || '#0388FC'
    return { style: { backgroundColor } }
  }

  courseEvents.flat().map(({ title, dueDate, assignmentType }, index) => {
    const event = {
      id: index,
      start: dueDate,
      end: dueDate,
      allDay: true,
      title,
      assignmentType,
    }

    events.push(event)
  })

  // console.log('events', events)

  return (
    <>
      <div className="text-2xl font-semibold text-center mt-20">Calendar</div>
      <Calendar
        localizer={localizer}
        events={events}
        eventPropGetter={eventPropGetterFunc}
        style={{ height: 400, margin: '1rem 4rem 4rem 0rem' }}
      />
      <div className="mt-4 items-center justify-center">
        <div className="text-xl">Legend</div>
        <div className="flex items-center mt-4">
          <div className="mr-4 flex items-center">
            <div
              className="w-4 h-4 bg-green-500 rounded-full mr-2"
              style={{ backgroundColor: eventLegend.quiz }}
            ></div>
            <span>Quiz</span>
          </div>
          <div className="mr-4 flex items-center">
            <div
              className="w-4 h-4 bg-orange-500 rounded-full mr-2"
              style={{ backgroundColor: eventLegend.assignment }}
            ></div>
            <span>Assignment</span>
          </div>
          <div className="flex items-center">
            <div
              className="w-4 h-4 bg-red-500 rounded-full mr-2"
              style={{ backgroundColor: eventLegend.exam }}
            ></div>
            <span>Exam</span>
          </div>
        </div>
      </div>
    </>
  )
}
