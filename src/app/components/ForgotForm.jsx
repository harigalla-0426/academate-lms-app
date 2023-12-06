'use client'

import { useRef } from 'react'
// import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import { handleForgetPassword } from '../actions/postActions'

const ForgotForm = () => {
  const formRef = useRef('')

  // const { data: session } = useSession({ required: true })

  const verifyEmail = async (data) => {
    // console.log('forgot form data', data.get('user-email'))
    formRef.current.reset()
    const userEmail = data.get('user-email')

    if (!userEmail.trim()) {
      toast.error(`Don't forget to enter an email!`)
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
      toast.error('Please enter a valid email!')
      return
    }

    const { success, message } = await toast.promise(
      handleForgetPassword(userEmail),
      {
        pending: 'Sending a verification mail...',
      },
    )

    if (success) {
      toast.success(message)
    } else {
      toast.warn(message)
    }
  }

  return (
    <>
      <>
        <div className="text-blue-600 text-6xl mt-40 mb-10">
          Forgot Password?
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg w-auto">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
          />
          <form ref={formRef} action={verifyEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="usermail"
              >
                Registered Email
              </label>
              <input
                className="w-full rounded-xl py-2 px-3 border shadow text-black"
                name="user-email"
                type="text"
                placeholder="Enter your email"
                autoComplete="off"
              />
            </div>
            <div className="my-4">
              <button
                className="bg-green-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Email Link
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  )
}

export default ForgotForm
