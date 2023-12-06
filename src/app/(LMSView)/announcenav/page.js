import React from 'react'

import Announcing from '../../components/AnnouncementCards'

export default async function AnnouncementCards() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div>
          <Announcing />
        </div>
      </main>
    </>
  )
}
