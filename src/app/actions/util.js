'use server'

import { getCourses, getUser } from '@/app/actions/getActions'

let coursesObj = null
let courseListing = null
let courseCardInfo = null
let courseEvents = null

const processCourseInfo = async (session, courseIdFilter = null) => {
  let {
    user: { email, courses },
  } = session

  // console.log('courses list', courses)

  if (!coursesObj) {
    if (typeof courses[0] !== 'object') {
      const getUserResp = await getUser(email)
      courses = getUserResp?.courses
    }

    const courseList = courses.map((x) => x?.courseId)

    coursesObj = await getCourses(courseList)
  }

  // console.log('coursesObj', coursesObj)
  if (!courseListing) {
    courseListing = coursesObj.map(({ courseId, title }) => {
      courseId, title
    })
  }

  if (!courseCardInfo) {
    courseCardInfo = coursesObj.map(({ courseId, title, description }) => {
      let { courseGPA } = courses.find((cs) => cs.courseId === courseId)

      if (!courseGPA) {
        courseGPA = 0
      }

      return { courseId, title, description, courseGPA }
    })
  }

  if (!courseEvents) {
    courseEvents = coursesObj.map((course) => course?.assignments)
  }

  const courseDeadlines = getCourseDeadlines(coursesObj, courseIdFilter)

  return {
    coursesObj,
    courseCardInfo,
    courseDeadlines,
    courseEvents,
    courseListing,
  }
}

const getCourseDeadlines = (coursesObj, courseIdFilter = null) => {
  let courseDeadlines = []

  if (courseIdFilter) {
    coursesObj.forEach(
      ({
        courseId,
        title: courseTitle,
        description: courseDescription,
        assignments,
      }) => {
        if (courseId === courseIdFilter) {
          assignments.forEach((assignment, index) => {
            const courseId = courseIdFilter
            const title = assignment.title
            const dueDate = new Date(assignment.dueDate)
            const formattedDate = dueDate.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
            const points = assignment.points || 0
            const description = assignment.description

            const event = {
              id: `${courseId}-${index + 1}`,
              courseId,
              courseTitle,
              courseDescription,
              title,
              description,
              date: formattedDate,
              points,
            }

            courseDeadlines.push(event)
          })
        }
      },
    )
  } else {
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
  }

  return courseDeadlines
}

export { processCourseInfo }
