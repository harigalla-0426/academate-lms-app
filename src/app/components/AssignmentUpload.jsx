'use client'

import React, { useCallback, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useDropzone } from 'react-dropzone'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AssignmentViewer from './AssignmentViewer'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { postSubmission } from '@/app/actions/postActions'

function AssignmentUpload({ assignmentUploadObj }) {
  // console.log('assignmentUploadObj', assignmentUploadObj)
  const { data: session } = useSession()

  const currentUserId = session?.user?.userId

  const {
    courseId,
    courseTitle,
    title,
    description,
    date: dueDate,
    points,
  } = assignmentUploadObj

  const [files, setFiles] = useState([])

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      // console.log('acceptedFiles', acceptedFiles)
      setFiles((previousFiles) => [...previousFiles, ...acceptedFiles])
    }

    if (rejectedFiles?.length) {
      toast.warn('File type not supported or size exceeding 1MB')
      return
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'text/word': ['.doc', '.docx'],
      'text/pdf': ['.pdf'],
    },
    maxFiles: 6,
    maxSize: 1024 * 1000,
  })

  const removeFile = (file_name) => {
    setFiles(files.filter((file) => file.name !== file_name))
  }

  const uploadFiles = async (e) => {
    e.preventDefault()

    if (!files.length) {
      return
    }

    const formData = new FormData()
    files.forEach((file) => formData.append('file', file))
    formData.append('upload_preset', 'academate_lms')

    toast.loading('Trying to upload your files...')

    const URL = 'https://api.cloudinary.com/v1_1/dnpcmxcrl/upload'

    const data = await fetch(URL, {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())

    console.log('upload data', data)

    if (!data?.secure_url) {
      toast.error('Something went wrong while uploading file to cloud!')
      return
    }

    const resp = await postSubmission(
      courseId,
      currentUserId,
      title,
      data?.secure_url,
    )

    toast.dismiss()

    if (!resp?.success) {
      toast.error(resp?.messageFail)
    } else {
      toast.success(resp?.messageSuccess)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />
      <div className="text-center text-3xl font-bold m-6 text-indigo-800">
        Assignment Upload
      </div>
      <div className="container mx-auto mb-10 p-6 bg-gray-100 rounded-md shadow-md">
        <div className="text-xl font-semibold text-indigo-800 mb-6">
          Assignment Details:
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <span className="font-bold text-gray-700">Course Title: </span>
            {courseTitle}
          </div>
          <div>
            <span className="font-bold text-gray-700">Assignment Title: </span>
            {title}
          </div>
          <div>
            <span className="font-bold text-gray-700">Description: </span>
            {description}
          </div>
          <div>
            <span className="font-bold text-gray-700">Due Date: </span>
            {dueDate}
          </div>
          <div>
            <span className="font-bold text-gray-700">Points: </span>
            {points}
          </div>
        </div>
      </div>

      {session?.user?.userType === 'faculty' ? (
        <>
          <AssignmentViewer courseId={courseId} assignment_title={title} />
        </>
      ) : (
        <>
          {/* Upload Component*/}
          <form>
            <div className="text-2xl text-indigo-800 font-semibold mb-6">
              Upload your assignment files here
            </div>
            <div
              {...getRootProps({
                className: `p-12 border cursor-pointer  border-dashed border-indigo-800 text-indigo-700 
              text-lg ${isDragActive ? 'bg-indigo-100' : ''}`,
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-center">
                  <CloudUploadIcon className="text-4xl mb-2 m-4" />
                  Drop the files here ...
                </p>
              ) : (
                <p className="text-center">
                  <CloudUploadIcon className="text-4xl mb-2 mx-4" />
                  Drag and drop some files here, or click to select files
                </p>
              )}
            </div>

            {/* Preview List*/}
            {files.length ? (
              <div className="text-lg text-indigo-800 font-semibold mt-8 mb-4">
                Files to be uploaded
              </div>
            ) : null}
            <ul>
              {files.map((file) => (
                <div className="flex m-6 p-4" key={file.name}>
                  <li>{file.name}</li>
                  <IconButton
                    className="self-end -mt-2 ml-2"
                    onClick={() => removeFile(file.name)}
                  >
                    <ClearIcon />
                  </IconButton>
                </div>
              ))}
            </ul>
            {files.length ? (
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 
            rounded-full max-w-sm"
                onClick={(e) => uploadFiles(e)}
              >
                Upload Files
              </button>
            ) : null}
          </form>
        </>
      )}
    </>
  )
}

export default AssignmentUpload
