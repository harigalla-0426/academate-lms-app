import React from 'react'
import Courses from '../../components/CoursesCards'
import { getCourses, getUser } from '@/app/actions/getActions'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import Announcing from '../../components/AnnouncementCards'
import { CalenderView } from '../../components/CalenderView'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  let {
    user: { email, courses },
  } = session

  // console.log('courses list', courses)

  if (typeof courses[0] !== 'object') {
    const getUserResp = await getUser(email)
    courses = getUserResp?.courses
  }

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

  let courseDeadlines = []

  coursesObj.forEach(({ courseId, title: courseTitle, assignments }) => {
    assignments.forEach((assignment, index) => {
      const eventId = `${courseId}-${index + 1}`
      const title = assignment.title
      const subtitle = courseTitle
      const dueDate = new Date(assignment.dueDate)
      const formattedDate = dueDate.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      const points = assignment.points || 0

      const event = {
        id: eventId,
        title,
        subtitle,
        date: `${formattedDate} | ${points} points`,
      }

      courseDeadlines.push(event)
    })
  })

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
