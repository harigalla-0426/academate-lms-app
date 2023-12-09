'use client'

import React, { useState } from 'react'
import { Container, Paper, Typography, IconButton, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded'
import EventIcon from '@mui/icons-material/Event'

const AnnounceDueSoon = ({ courseDeadlines }) => {
  // Announcing state
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Forming Teams for A2',
      course: 'CSCI-B551',
      date: 'Oct 25 at 6:30pm',
    },
    {
      id: 2,
      title: 'Project: Week12',
      course: 'CSCI-P465-565',
      date: 'Oct 24 at 8:30pm',
    },
    {
      id: 3,
      title: 'R&N Reasoning Under Uncertainty',
      course: 'CSCI-B551',
      date: 'Oct 24 at 2:30pm',
    },
    {
      id: 4,
      title: 'Forming Teams for A2',
      course: 'CSCI-B551',
      date: 'Oct 25 at 6:30pm',
    },
  ])

  const handleRemoveAnnouncement = (id) => {
    setAnnouncements(
      announcements.filter((announcement) => announcement.id !== id),
    )
  }

  const sortedDeadlines = courseDeadlines
    .filter((event) => new Date(event.date.split('|')[0].trim()) >= new Date())
    .sort(
      (a, b) =>
        new Date(a.date.split('|')[0].trim()) -
        new Date(b.date.split('|')[0].trim()),
    )

  // DueSoon state
  const [notifications, setNotifications] = useState(
    sortedDeadlines.slice(0, 4),
  )

  const handleRemoveNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id),
    )
  }

  const handleClearAllNotifications = () => {
    setNotifications([])
  }

  const renderAnnouncingCard = (announcement) => (
    <Paper
      key={announcement.id}
      elevation={3}
      style={{
        marginBottom: 16,
        padding: 12,
        position: 'relative',
        maxWidth: '100%',
        fontSize: 12,
      }}
    >
      <Typography
        variant="h6"
        style={{ marginBottom: 3 }}
        fontSize={18}
        fontFamily="Inter"
        fontWeight={400}
      >
        {announcement.title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ marginBottom: 3 }}
      >
        Course: {announcement.course}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        Date: {announcement.date}
      </Typography>
      <IconButton
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
        }}
        onClick={() => handleRemoveAnnouncement(announcement.id)}
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  )

  const renderDueSoonCard = (notification) => (
    <Box key={notification.id} mb={2} width="100%" maxWidth="100%">
      <Paper
        elevation={3}
        style={{
          marginBottom: '16px',
          padding: '12px',
          position: 'relative',
          maxWidth: '100%',
          fontSize: '12px',
          borderBottom: '1px rgba(122.67, 124.63, 128.56, 0.46) solid',
        }}
      >
        <Box p={2}>
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h6"
              mb={1}
              color="black"
              fontSize={18}
              fontFamily="Inter"
              fontWeight={400}
            >
              {notification.title}
            </Typography>
            <Typography
              variant="body2"
              mb={1}
              color="#4E5155"
              fontSize={14}
              fontFamily="Inter"
              fontWeight={400}
            >
              {notification.subtitle}
            </Typography>
            <Typography
              variant="caption"
              color="#4C5054"
              fontSize={12}
              fontFamily="Inter"
              fontWeight={400}
            >
              {notification.date}
            </Typography>
          </Box>
        </Box>
        <IconButton
          style={{ position: 'absolute', top: 15, right: 15 }}
          onClick={() => handleRemoveNotification(notification.id)}
        >
          <ClearRoundedIcon />
        </IconButton>
      </Paper>
    </Box>
  )

  return (
    <Container maxWidth="xs" style={{ padding: 16 }}>
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        style={{ marginBottom: 16 }}
      >
        <div style={{ width: 16, height: 16, position: 'relative' }}>
          <div
            style={{
              width: 1,
              height: 11,
              left: 7.5,
              top: 2.5,
              position: 'absolute',
              border: '0.88px #545454 solid',
            }}
          ></div>
        </div>
        <EventIcon />
        <Typography variant="h6" gutterBottom>
          Upcoming Events
        </Typography>
      </Box>
      <Box>
        {announcements.map((announcement) =>
          renderAnnouncingCard(announcement),
        )}
      </Box>
      <Box marginTop={2}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <PriorityHighRoundedIcon style={{ color: '#545454', fontSize: 24 }} />
          <Typography
            variant="h3"
            color="black"
            fontSize={24}
            fontFamily="Inter"
            fontWeight={400}
          >
            Due Soon
          </Typography>
          <IconButton onClick={handleClearAllNotifications}>
            <ClearAllRoundedIcon style={{ fontSize: 24 }} />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          {notifications.map((notification) => renderDueSoonCard(notification))}
        </Box>
      </Box>
    </Container>
  )
}

export default AnnounceDueSoon
