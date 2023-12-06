import React from 'react'
import Courses from '../../components/CoursesCards'
import Announcing from '../../components/AnnouncementCards'
import { CalenderView } from '../../components/CalenderView'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function Dashboard() {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <Courses />
          <CalenderView />
        </div>
        <div className="md:w-1/4">
          <Announcing />
        </div>
      </div>
    </main>
  )
}
