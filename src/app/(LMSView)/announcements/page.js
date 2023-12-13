import React from 'react'
import SearchBarcompo from '@/app/searchingbar/page'
import AnnounceListingcompo from '@/app/announcelist/page'

export default function Announcement() {
  return (
    <main>
      <div className="m-4 p-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">{title} Announcements</h1>
        </div>
        <div classNam-e="mb-4 flex items-center">
          <SearchBarcompo />
        </div>
        <AnnounceListingcompo announcements={announcementList} />
      </div>
    </main>
  )
}
