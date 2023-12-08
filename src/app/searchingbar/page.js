'use client'
import React from 'react'
import SearchBar from '../components/SearchBarcompo'
import FilterToggle from '../components/FilterTogglecompo'

const SearchBarcompo = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          top: '-350px', // Adjust this value as needed
          width: '100%',
          zIndex: 999,
        }}
      >
        <main className="flex flex-col justify-center items-center min-h-screen">
          <div className="flex items-center">
            <SearchBar />
            <div style={{ marginLeft: '72px' }}>
              <FilterToggle />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default SearchBarcompo
