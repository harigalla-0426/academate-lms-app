import React from 'react'
// import SideNavBar from '../components/SideNav'
import Courses from '../../components/CoursesCards'

export default async function CoursesCards() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div>
          <Courses />
        </div>
      </main>
    </>
  )
}
