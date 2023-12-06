import React from 'react'

import AnnounceList from '../components/AnnounceListingcompo'

export default async function AnnounceListingcompo() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div>
          <AnnounceList />
        </div>
      </main>
    </>
  )
}