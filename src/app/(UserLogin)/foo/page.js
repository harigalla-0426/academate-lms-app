import React from 'react'
import connectDB from '../../config/db'
import usersModel from '../../models/usersModel'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'

export default async function Foo() {
  const session = await getServerSession(authOptions)

  let loginData = null

  if (session) {
    console.log('session info', session.user)
    await connectDB()
    loginData = await usersModel.find({})
  }

  // if (!session) {
  //   redirect('/login?callbackUrl=/foo')
  // }

  console.log('Foo component called')

  return (
    <>
      <div className="text-xl font-medium text-white flex justify-center">
        Hello world
      </div>
      {session ? (
        <div>
          <div>{JSON.stringify(loginData)}</div>
          <div className="my-6">
            Hi, {session?.user?.name} - {session?.user?.userType}
            <button
              className="rounded-2xl m-2 text-white bg-blue-400 w-1/5 px-4 py-2 shadow-md hover:text-blue-400 
            hover:bg-white transition duration-200 ease-in"
              // onClick={() => redirect('/api/auth/signout')}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div> User Not logged in</div>
          <div>
            <button className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  )
}
