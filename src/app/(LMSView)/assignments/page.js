import React from 'react'
import Announcing from '../../components/AnnouncementCards'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { processCourseInfo } from '../../actions/util'

export default async function AnnouncementCards() {
  const session = await getServerSession(authOptions)
  const { courseDeadlines } = await processCourseInfo(session)

  return (
    <>
      <main className="flex justify-start min-h-screen">
        <div>
          <Announcing
            courseDeadlines={courseDeadlines}
            viewAssignmentMode={true}
          />
        </div>
      </main>
    </>
  )
}
