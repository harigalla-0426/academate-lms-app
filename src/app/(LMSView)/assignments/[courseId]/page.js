import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { processCourseInfo } from '@/app/actions/util'

const AssignmentCard = ({ title, date, points }) => {
  return (
    <div className="bg-white border rounded shadow-md p-4 m-2 w-64">
      <div className="text-xl font-semibold mb-2">{title}</div>
      <div className="text-gray-600 mb-2">Deadline: {date}</div>
      <div className="text-gray-600">Points: {points}</div>
    </div>
  )
}

export default async function CourseAssignments({ params: { courseId } }) {
  const session = await getServerSession(authOptions)
  const { courseDeadlines } = await processCourseInfo(session, courseId)

  const sortedAssignments = courseDeadlines.sort((a, b) =>
    a.title.localeCompare(b.title),
  )

  const assignmentTypes = {}

  sortedAssignments.forEach((assignment) => {
    const type = assignment.title.split(' ')[0]
    if (!assignmentTypes[type]) {
      assignmentTypes[type] = []
    }
    assignmentTypes[type].push(assignment)
  })

  return (
    <>
      <main className="flex flex-col">
        <div className="flex flex-wrap justify-center">
          {Object.entries(assignmentTypes).map(([type, assignments]) => (
            <div key={type} className="m-4">
              <h2 className="text-2xl font-semibold mb-4">{type}</h2>
              {assignments.map((assignment) => (
                <AssignmentCard key={assignment.title} {...assignment} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
