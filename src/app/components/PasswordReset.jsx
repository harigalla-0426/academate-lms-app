'use client'

import React from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { changePassword } from '../actions/updateActions'
import { redirect } from 'next/navigation'
import { cleanUpForgetToken } from '../actions/deleteActions'

function PasswordReset({ email, accessToken }) {
  // console.log('PasswordReset', email)
  const formRef = useRef('')

  const resetHandler = async (formData) => {
    const newPassword = formData.get('new-password')
    const confirmPassword = formData.get('confirm-password')

    formRef.current.reset()

    if (!newPassword.trim() || !confirmPassword.trim()) {
      toast.warn('Please fill in the password fields!')
      return
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(newPassword)) {
      toast.warn(`Enter a Valid Password! 
      (Atleast 8 chars with one uppercase, lowercase and digit)`)
      return
    }

    if (newPassword !== confirmPassword) {
      toast.warn('Passwords not matching!')
      return
    }

    const { success, message } = await changePassword(email, newPassword)
    const resp = await cleanUpForgetToken(accessToken)

    if (success && resp?.success) {
      toast.success(message)
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
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />
      <div className="text-blue-600 text-6xl mt-40 mb-10">Enter Password</div>
      <div className="bg-white p-8 rounded-xl shadow-lg w-auto">
        <form ref={formRef} action={resetHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="new-password"
            >
              New password
            </label>
            <input
              className="w-full rounded-xl py-2 px-3 border shadow text-black"
              name="new-password"
              type="password"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              New password
            </label>
            <input
              className="w-full rounded-xl py-2 px-3 border shadow text-black"
              name="confirm-password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="my-4">
            <button
              className="bg-green-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PasswordReset
