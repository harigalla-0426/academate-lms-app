import React from 'react'

<<<<<<<< HEAD:lms-next-app/src/app/filterbar/page.js
import FilterToggle from '@/app/components/FilterTogglecompo'
========
import DueSoon from '../../components/Duesooncards'
>>>>>>>> b67581f4e706b0611a42b287ff2e3635b18f4785:lms-next-app/src/app/(LMSView)/duesoon/page.js

export default async function FilterTogglecompo() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div>
          <FilterToggle />
        </div>
      </main>
    </>
  )
}
