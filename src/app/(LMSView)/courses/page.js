import React from 'react'
import Courses from '../../components/CoursesCards'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { processCourseInfo } from '../../actions/util'

export default async function CoursesCards() {
  const session = await getServerSession(authOptions)

  const { courseCardInfo } = await processCourseInfo(session)

  return (
    <>
      <main className="flex min-h-screen">
        <div>
          <Courses courseCardInfo={courseCardInfo} />
        </div>
      </main>
    </>
  )
}
