'use client'

import React, { useState } from 'react'
import {
  Box,
  Typography,
  Avatar,
  Modal,
  Button,
  TextField,
  TextareaAutosize,
  IconButton,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'

import { useSession } from 'next-auth/react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { postAnnouncements } from '@/app/actions/postActions'

const AnnounceList = ({ announcements, courseId }) => {
  const [announcementList, setAnnouncementList] = useState(announcements)
  const [openModal, setOpenModal] = useState(false)
  const { data: session } = useSession()

  const isFaculty = session?.user?.userType === 'faculty'

  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newDate, setNewDate] = useState('')

  const handleAnnouncementSubmit = async (event) => {
    event.preventDefault()

    if (!newTitle.length || !newDescription.length || !newDate.length) {
      toast.warn('Please fill all the required fields!')
      return
    }

    if (newTitle.length > 50) {
      toast.warn('Title length too long! Please keep it below 50 characters')
      return
    }

    if (newDescription.length > 250) {
      toast.warn(
        'Description length too long! Please keep it below 250 characters',
      )
      return
    }

    if (new Date(newDate) < new Date()) {
      toast.warn('Timestamp date cannot be in the past')
      return
    }

    const postResp = await postAnnouncements({
      courseId,
      title: newTitle,
      description: newDescription,
      timestamp: new Date(newDate).toISOString(),
    })

    if (!postResp?.success) {
      toast.error(postResp?.messageFail)
      return
    }

    toast.success(postResp?.messageSuccess)

    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const date = new Date(newDate)
    const timestamp = date.toLocaleDateString('en-US', options)

    setAnnouncementList([
      ...announcementList,
      {
        title: newTitle,
        description: newDescription,
        timestamp,
      },
    ])

    setNewTitle('')
    setNewDescription('')
    setNewDate('')

    setOpenModal(false)
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />

      {/* Announcements Cards */}

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

      {/* Add Announcement Modal */}

      {isFaculty ? (
        <>
          {' '}
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6"
            startIcon={<AddIcon />}
            onClick={() => setOpenModal(true)}
          >
            Make Faculty Announcement
          </Button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            className="flex items-center justify-center"
          >
            <div className="w-96 h-auto bg-gray-100 rounded-lg p-6 flex flex-col items-center">
              <IconButton
                onClick={() => setOpenModal(false)}
                className="self-end -mt-3 -mr-3"
              >
                <ClearIcon />
              </IconButton>
              <form className="w-full flex flex-col items-center">
                <Typography variant="h5" className="mb-3 self-start">
                  Title
                </Typography>
                <TextField
                  label="Title"
                  name="title"
                  variant="outlined"
                  fullWidth
                  className="mb-3"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <Typography variant="h5" className="mt-1 mb-3 self-start">
                  Description
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={4}
                  placeholder="Enter a brief about the announcement..."
                  name="description"
                  className="w-full resize-none mb-4"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <Typography variant="h5" className="mt-1 mb-2 self-start">
                  Release Date
                </Typography>
                <TextField
                  name="date"
                  label="Date"
                  variant="outlined"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ max: '9999-12-31' }}
                  className="mb-3"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="bg-green-600 text-white hover:bg-green-800"
                  onClick={(e) => handleAnnouncementSubmit(e)}
                >
                  Create
                </Button>
              </form>
            </div>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default AnnounceList
