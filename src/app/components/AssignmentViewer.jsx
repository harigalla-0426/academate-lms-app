'use client'

import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getSubmissions } from '@/app/actions/getActions'

function AssignmentViewer({ courseId, assignment_title }) {
  const [submissions, setSubmissions] = useState([])
  const [frameLink, setFrameLink] = useState(null)

  useEffect(() => {
    async function fetchSubmissions() {
      const { success, data, message } = await getSubmissions(
        courseId,
        assignment_title,
      )

      if (!success) {
        toast.error(message)
        return
      }

      setSubmissions(data)
    }

    fetchSubmissions()
  }, [courseId, assignment_title])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />
      <div className="mb-6">
        <div className="text-2xl text-indigo-800 font-semibold mb-4">
          Submissions:
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {submissions.map((submission, index) => (
            <li key={index} className="cursor-pointer mb-4">
              <div className="flex items-center">
                <span className="mr-2">&#8226;</span> {/* Bullet point */}
                <div>User ID: {submission.userId}</div>
                <button
                  className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => setFrameLink(submission.file_URL)}
                >
                  Show Submission
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {frameLink ? (
        <>
          <div className="w-full h-screen">
            <iframe
              title="Document Viewer"
              className="w-full h-full border-none"
              src={frameLink}
              frameBorder="0"
            ></iframe>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default AssignmentViewer
