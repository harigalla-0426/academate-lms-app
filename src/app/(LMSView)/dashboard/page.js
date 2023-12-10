import React from 'react'
import Courses from '../../components/CoursesCards'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { processCourseInfo } from '../../actions/util'
import Announcing from '../../components/AnnouncementCards'
import { CalenderView } from '../../components/CalenderView'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  const {
    courseCardInfo,
    courseDeadlines,
    courseEvents,
  } = await processCourseInfo(session)

  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <Courses courseCardInfo={courseCardInfo} />
          <CalenderView courseEvents={courseEvents} />
        </div>
        <div className="md:w-1/4">
          <Announcing courseDeadlines={courseDeadlines} />
        </div>
      </div>
    </main>
  )
}
