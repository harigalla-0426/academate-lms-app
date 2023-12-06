import React from 'react'
import ForgotForm from '../../components/ForgotForm'
import PasswordReset from '../../components/PasswordReset'
import connectDB from '../../config/db'
import resetPasswordModel from '../../models/resetPasswordModel'
import 'react-toastify/dist/ReactToastify.css'

export default async function Forgot({ searchParams }) {
  let showResetForm = false
  let user = null

  const accessToken = searchParams?.accessToken

  if (accessToken) {
    await connectDB()
    user = await resetPasswordModel.findOne({ accessToken })

    if (user) {
      console.log('accessToken confirmed!', user)
      showResetForm = true
    }
  }

  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-indigo-100">
        {showResetForm ? (
          <PasswordReset email={user?.email} accessToken={accessToken} />
        ) : (
          <ForgotForm />
        )}
      </main>
    </>
  )
}
