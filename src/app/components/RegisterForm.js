'use client'

import React from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { handleRegistration } from '../actions/postActions'
import { redirect } from 'next/navigation'

const RegisterForm = () => {
  const formRef = useRef('')

  const courseOptions = [
    {
      courseId: '6540251f5baebb7598f23131',
      courseTitle: 'Test_ComputerScience',
    },
    { courseId: '654d379ea7b90d1ca63b5b92', courseTitle: 'Test_Mathematics' },
    { courseId: '654d37c4a7b90d1ca63b5b93', courseTitle: 'Test_English' },
    {
      courseId: '6540251f5baebb7598f23132',
      courseTitle: 'Elements of AI',
    },
    {
      courseId: '654d379ea7b90d1ca63b5b94',
      courseTitle: 'Applied Machine Learning',
    },
    {
      courseId: '654d37c4a7b90d1ca63b5b95',
      courseTitle: 'Software Engineering I',
    },
  ]

  async function validateCredentials(formData) {
    const firstName = formData.get('first-name')
    const lastName = formData.get('last-name')
    const userName = formData.get('username')
    const email = formData.get('email')
    const userPass = formData.get('password')
    const confirmPassword = formData.get('confirm-pass')
    const userType = formData.get('user-type')

    const courseOption1 = formData.get('course-option-0')
    const courseOption2 = formData.get('course-option-1')
    const courseOption3 = formData.get('course-option-2')

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !userName.trim() ||
      !email.trim() ||
      !userPass.trim() ||
      !confirmPassword.trim()
    ) {
      toast.warn('Please enter all the fields!')
      return
    }

    if (!email.endsWith('iu.edu')) {
      toast.warn('Please an iu email address!')
      return
    }

    if (userPass !== confirmPassword) {
      toast.warn('Passwords not Matching!')
      return
    }

    if (
      courseOption1 === courseOption2 ||
      courseOption1 === courseOption3 ||
      courseOption2 === courseOption3
    ) {
      toast.warn('Please select different course options!')
      return
    }

    formRef.current.reset()

    const { success, message } = await toast.promise(
      handleRegistration({
        userName,
        userPass,
        firstName,
        lastName,
        email,
        userType,
      }),
      {
        pending: 'Trying to Register you...',
      },
    )

    if (success) {
      toast.success(message)
      toast.loading('Redirecting you to login page...')
      await new Promise((resolve) => setTimeout(resolve, 2000))
      redirect('/api/auth/signin')
    } else {
      toast.error(message)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={true}
        closeOnClick
      />
      <form ref={formRef} action={validateCredentials}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="w-full rounded-xl py-2 px-3 border shadow text-black"
            id="first-name"
            name="first-name"
            type="text"
            placeholder="Enter your First Name"
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="w-full rounded-xl py-2 px-3 border shadow text-black"
            id="last-name"
            name="last-name"
            type="text"
            placeholder="Enter your Last Name"
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full rounded-xl py-2 px-3 border shadow text-black"
            id="username"
            name="username"
            type="text"
            placeholder="Enter a Username"
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full rounded-xl py-2 px-3 border shadow text-black"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full rounded-xl py-2 px-3 border shadow text-black"
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-pass"
          >
            Confirm Password
          </label>
          <input
            className="w-full rounded-xl py-2 px-3 border shadow text-black"
            id="confirm-pass"
            name="confirm-pass"
            type="password"
            placeholder="Confirm your Password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="user-type"
          >
            User Type
          </label>
          <select
            className="w-full rounded-xl py-2 px-3 border shadow text-black"
            id="user-type"
            name="user-type"
            defaultValue="student"
          >
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
        </div>
        {Array.from({ length: 3 }, (_, index) => (
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={`course-option-${index}`}
              key={`course-option-${index}`}
            >
              Course Option {index + 1}
            </label>
            <select
              className="w-full rounded-xl py-2 px-3 border shadow text-black"
              id={`course-option-${index}`}
              name={`course-option-${index}`}
            >
              {courseOptions.map((course, index) => (
                <option
                  key={`${course?.courseId}-${index}`}
                  value={course?.courseId}
                >
                  {course?.courseTitle}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="mb-6">
          <button
            className="bg-green-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
