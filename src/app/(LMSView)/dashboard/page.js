import React from 'react'
import Courses from '../../components/CoursesCards'
import { getCourses } from '@/app/actions/getActions'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import Announcing from '../../components/AnnouncementCards'
import { CalenderView } from '../../components/CalenderView'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  const {
    user: { courses },
  } = session

  const courseList = courses.map((x) => x?.courseId)

  const coursesObj = await getCourses(courseList)
  // console.log('coursesObj', coursesObj)

  const courseCardInfo = coursesObj.map(({ courseId, title, description }) => {
    let { courseGPA } = courses.find((cs) => cs.courseId === courseId)

    if (!courseGPA) {
      courseGPA = 0
    }

    return { courseId, title, description, courseGPA }
  })

  const courseEvents = coursesObj.map((course) => course?.assignments)

  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <Courses courseCardInfo={courseCardInfo} />
          <CalenderView courseEvents={courseEvents} />
        </div>
        <div className="md:w-1/4">
          <Announcing />
        </div>
      </div>
    </main>
  )
}
