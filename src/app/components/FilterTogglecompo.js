'use client'

import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

const FilterToggle = () => {
  const [selectedOption, setSelectedOption] = React.useState('all')

  const handleOptionChange = (event, newOption) => {
    if (newOption !== null) {
      setSelectedOption(newOption)
    }
  }

  return (
    <ToggleButtonGroup
      value={selectedOption}
      exclusive
      onChange={handleOptionChange}
      aria-label="filter options"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <ToggleButton
        value="all"
        style={{
          width: 92.88,
          height: 34.56,
          paddingLeft: 36,
          paddingRight: 36,
          paddingTop: 8,
          paddingBottom: 8,
          background: selectedOption === 'all' ? '#4285F4' : '#ECECEC',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            color: selectedOption === 'all' ? 'white' : 'black',
            fontSize: 12,
            fontFamily: 'Inter',
            fontWeight: 300,
            wordWrap: 'break-word',
          }}
        >
          All
        </div>
      </ToggleButton>
      <ToggleButton
        value="read"
        style={{
          width: 109.08,
          height: 34.56,
          paddingLeft: 36,
          paddingRight: 36,
          paddingTop: 8,
          paddingBottom: 8,
          background: selectedOption === 'read' ? '#4285F4' : '#ECECEC',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            color: selectedOption === 'read' ? 'white' : 'black',
            fontSize: 12,
            fontFamily: 'Inter',
            fontWeight: 300,
            wordWrap: 'break-word',
          }}
        >
          Read
        </div>
      </ToggleButton>
      <ToggleButton
        value="unread"
        style={{
          width: 122.04,
          height: 34.56,
          paddingLeft: 36,
          paddingRight: 36,
          paddingTop: 8,
          paddingBottom: 8,
          background: selectedOption === 'unread' ? '#4285F4' : '#ECECEC',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            color: selectedOption === 'unread' ? 'white' : 'black',
            fontSize: 12,
            fontFamily: 'Inter',
            fontWeight: 300,
            wordWrap: 'break-word',
          }}
        >
          Unread
        </div>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default FilterToggle
