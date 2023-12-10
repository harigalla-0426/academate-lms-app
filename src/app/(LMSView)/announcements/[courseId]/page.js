import React from 'react'
import { getAnnouncements } from '@/app/actions/getActions'
import SearchBarcompo from '@/app/components/SearchBarcompo'
import AnnounceListingcompo from '@/app/components/AnnounceListingcompo'

async function CourseAnnouncements({ params: { courseId } }) {
  const { title, announcements } = await getAnnouncements(courseId)
  //   console.log('announcements', announcements)
  let announcementList = null

  if (announcements && announcements.length) {
    announcementList = announcements.map((announcement) => {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      const date = new Date(announcement?.timestamp)
      announcement.timestamp = date.toLocaleDateString('en-US', options)

      return announcement
    })
  }

  return (
    <div className="m-4 p-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">{title} Announcements</h1>
      </div>
      <div className="mb-4 flex items-center">
        <SearchBarcompo />
      </div>
      <AnnounceListingcompo announcements={announcementList} />
    </div>
  )
}

export default CourseAnnouncements
