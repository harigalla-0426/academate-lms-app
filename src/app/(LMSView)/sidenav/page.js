import React from 'react'
import SideNavBar from '../../components/SideNav'

export default async function SideNav() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div>
          <SideNavBar />
        </div>
      </main>
    </>
  )
}
