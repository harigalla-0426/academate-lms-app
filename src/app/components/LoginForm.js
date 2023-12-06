'use client'

import { useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
// import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { handleLogin } from '../actions/postActions'
import { GoogleLoginButton } from 'react-social-login-buttons'
// import { redirect } from 'next/navigation'

const LoginForm = () => {
  const formRef = useRef('')
  const searchParams = useSearchParams()

  // const { data: session } = useSession({ required: true })

  async function validateCredentials(data) {
    formRef.current.reset()

    const userName = data.get('username')
    const userPass = data.get('password')

    if (!userName.trim() || !userPass.trim()) {
      toast.error('Please enter your username and password!')
      return
    }

    const { success, message, user } = await toast.promise(
      handleLogin(userName, userPass),
      {
        pending: 'Trying to Sign you in...',
      },
    )

    if (success && user) {
      toast.success(message)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      signIn('credentials', user)
    } else {
      toast.error(message)
    }
  }

  return (
    <>
      <>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
        />
        <form ref={formRef} action={validateCredentials}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full rounded-xl py-2 px-3 border shadow text-black"
              name="username"
              type="text"
              placeholder="Username or Email"
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
              name="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-6">
            <button
              className="bg-green-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="mx-auto text-lg text-slate-900 my-6 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <div className="mb-6">
            <GoogleLoginButton onClick={() => signIn('google')} />
          </div>

          <div className="flex justify-between">
            <a
              className="text-sm text-blue-500 hover:text-blue-700 hover:cursor-pointer"
              href="/register"
            >
              New User?
            </a>
            <a
              className="text-sm text-blue-500 hover:text-blue-700 hover:cursor-pointer"
              href="/forgot"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </>
    </>
  )
}

export default LoginForm
