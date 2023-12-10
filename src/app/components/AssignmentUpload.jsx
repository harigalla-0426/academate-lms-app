'use client'

import React from 'react'

function AssignmentUpload({ assignmentUploadObj }) {
  console.log('assignmentUploadObj', assignmentUploadObj)
  const {
    id: assignmentId,
    courseId,
    courseTitle,
    title,
    description,
    date: dueDate,
    points,
  } = assignmentUploadObj

  return (
    <>
      <div className="text-center text-2xl">AssignmentUpload</div>
      <div className="text-center m-4 text-lg">
        {assignmentId} - {courseTitle} - {title} - {description} - {dueDate} -
        {courseId} - {points}
      </div>
    </>
  )
}

export default AssignmentUpload
