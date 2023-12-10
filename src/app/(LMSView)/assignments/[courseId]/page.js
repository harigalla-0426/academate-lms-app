import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { processCourseInfo } from '@/app/actions/util'
import AssignmentUpload from '@/app/components/AssignmentUpload'

export default async function CourseAssignments({ params: { courseId } }) {
  const session = await getServerSession(authOptions)
  const { courseDeadlines } = await processCourseInfo(
    session,
    courseId.split('-')[0],
  )
  let assignmentUploadObj = null

  if (courseId.split('-')[1]) {
    assignmentUploadObj = courseDeadlines.filter(
      (assignment) => assignment.id === courseId,
    )
  }

  const assignmentTypes = {}

  // console.log('courseDeadlines', courseDeadlines)

  courseDeadlines.forEach((assignment) => {
    const type = assignment.title.trim()
    if (!assignmentTypes[type]) {
      assignmentTypes[type] = []
    }
    assignmentTypes[type].push(assignment)
  })

  return (
    <>
      <main className="flex flex-col">
        {assignmentUploadObj ? (
          <>
            <AssignmentUpload assignmentUploadObj={assignmentUploadObj[0]} />
          </>
        ) : (
          <>
            <div className="text-3xl font-bold m-6">
              {courseDeadlines[0]?.courseTitle} Assignments
            </div>
            <div className="flex flex-wrap justify-start">
              {Object.entries(assignmentTypes).map(([type, assignments]) => (
                <div key={type} className="m-4">
                  <h2 className="text-2xl font-semibold mb-4">{type}</h2>
                  {assignments.map((assignment) => (
                    <div
                      key={assignment.title}
                      className="bg-white border rounded shadow-md p-4 m-2 w-64"
                    >
                      <div className="text-xl font-semibold mb-2">
                        {assignment.title}
                      </div>
                      <div className="text-gray-600 mb-2">
                        Deadline: {assignment.date}
                      </div>
                      <div className="text-gray-600 flex justify-between">
                        <div>Points: {assignment.points}</div>
                        <a
                          href={`/assignments/${assignment?.id}`}
                          className="hover:underline hover:text-blue-500"
                        >
                          <div className="cursor-pointer">View Assignment</div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  )
}
