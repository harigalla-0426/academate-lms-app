'use client'
import React from 'react'
import { Box, Paper, Avatar, styled } from '@mui/material'

const AnnounceList = () => {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    width: 1182,
    height: 68,
    margin: '8px 0', // Adjusted margin to 8px
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
  }))

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 36,
    height: 36,
    position: 'absolute',
    background: theme.palette.grey[400],
    borderRadius: theme.shape.borderRadius,
  }))

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: '#FDFDFD',
        borderRadius: 12,
        border: '1px rgba(0, 0, 0, 0.34) solid',
        position: 'relative',
      }}
    >
      {[...Array(7)].map((_, index) => (
        <StyledPaper key={index} style={{ top: `${index * 80}px` }}>
          <StyledAvatar style={{ left: '16px', top: '16px' }} />
          <Box
            sx={{
              position: 'absolute',
              left: '60px',
              top: '8px',
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '600',
              wordWrap: 'break-word',
            }}
          >
            No Office Hours 27th November Monday, 4 PM to 6 PM
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: '60px',
              top: '28px',
              color: 'black',
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '200',
              wordWrap: 'break-word',
            }}
          >
            Hello everyone, there will not be any Office Hours today from 4 PM
            to 6 PM, Monday, Nov 27th. If you have...
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: '960px',
              top: '8px',
              color: 'black',
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '300',
              wordWrap: 'break-word',
            }}
          >
            Applied Algorithms
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: '940px',
              top: '28px',
              color: 'black',
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '200',
              wordWrap: 'break-word',
            }}
          >
            Nov 27, 2023, at 2:48 PM
          </Box>
        </StyledPaper>
      ))}
    </Box>
  )
}

export default AnnounceList
