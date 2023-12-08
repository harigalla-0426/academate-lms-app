'use client'

import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export const NavBar = () => {
  const { data: session } = useSession()
  console.log('session from navbar', session)

  return (
    <>
      <nav className="container min-w-full mx-auto p-4 dark:bg-gray-900 bg-slate-50 shadow-sm">
        <div className="flex justify-between">
          <div>
            <Image
              src="/Academate_Logo.png"
              alt="Academate Logo"
              width={150}
              height={80}
            />
          </div>
          <div className="flex space-x-12 text-xl">
            {session ? (
              <div className="flex items-center">
                <Image
                  className="w-10 h-10 rounded-full object-cover mx-5 mb-2"
                  src={
                    session?.user?.image ?? `/${session?.user?.userType}.png`
                  }
                  alt={session?.user?.name}
                  width={50}
                  height={50}
                />
                {/* <span className="ml-2">{session?.user?.name}</span> */}
                <a
                  href="/api/auth/signout"
                  className="p-3 pt-2 px-6 bg-red-500 rounded-full self-baseline"
                >
                  Sign Out
                </a>
              </div>
            ) : (
              <a
                className="p-3 pt-2 px-6 bg-green-800 rounded-full self-baseline"
                href="/api/auth/signin"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
