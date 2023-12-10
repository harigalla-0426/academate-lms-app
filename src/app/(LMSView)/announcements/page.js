import React from 'react'
import SearchBarcompo from '@/app/searchingbar/page'
import AnnounceListingcompo from '@/app/announcelist/page'

export default function Announcement() {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="md">
          <SearchBarcompo />
          <AnnounceListingcompo />
        </div>
      </div>
    </main>
  )
}
