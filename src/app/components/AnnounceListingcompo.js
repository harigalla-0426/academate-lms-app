'use client'

import React, { useState } from 'react'
import { Box, Typography, Avatar } from '@mui/material'

const AnnounceList = ({ announcements }) => {
  const [announcementList, setAnnouncementList] = useState(announcements)

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: '#FDFDFD',
        borderRadius: 12,
        border: '1px rgba(0, 0, 0, 0.34) solid',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {announcementList ? (
        <>
          {announcementList.map((announcement, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                height: 68,
                background: '#FEFEFE',
                borderRadius: 12,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                p: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  background: '#CCCCCC',
                  borderRadius: 8,
                  mr: 2,
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  {announcement.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: 200, color: 'gray' }}
                >
                  {announcement.description}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: 200, color: 'gray' }}
                >
                  {announcement.timestamp}
                </Typography>
              </Box>
            </Box>
          ))}
        </>
      ) : (
        <>
          <div className="text-center text-xl">No Announcements Yet!</div>
        </>
      )}
    </Box>
  )
}

export default AnnounceList
