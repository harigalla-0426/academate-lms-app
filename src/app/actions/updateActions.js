'use server'

import connectDB from '../config/db'
import usersModel from '../models/usersModel'
import coursesModel from '../models/coursesModel'
import bcrypt from 'bcrypt'
import { pusherServer } from '../config/pusher'

async function changePassword(email, newPassword) {
  try {
    await connectDB()
    const user = await usersModel.findOne({ email })

    if (!user) {
      throw new Error('No user found with the email id')
    }

    const hashedPassword = await bcrypt.hash(newPassword, 11)

    user.password = hashedPassword
    await user.save()

    return { success: true, message: 'User password changed' }
  } catch (error) {
    return { success: false, message: error?.message }
  }
}

async function addChat(chatId, chatObj) {
  try {
    await connectDB()

    pusherServer.trigger(chatId, 'incoming-messages', chatObj)

    const isUpdated = await coursesModel.updateOne(
      { _id: chatId },
      { $push: { discussions: chatObj } },
    )

    if (!isUpdated.acknowledged) {
      throw new Error('Could not send your message! Try again!')
    }

    return { success: true, message: 'Chat message sent!' }
  } catch (error) {
    return { success: false, message: error.message || 'Something went wrong!' }
  }
}

async function addAnnouncement(courseId, annObj) {
  try {
    await connectDB()

    const isUpdated = await coursesModel.updateOne(
      { _id: courseId },
      { $push: { announcments: annObj } },
    )

    if (!isUpdated.acknowledged) {
      throw new Error('Could not post your announcement! Try again!')
    }

    return { success: true, message: 'Chat message sent!' }
  } catch (error) {
    return { success: false, message: error.message || 'Something went wrong!' }
  }
}

export { changePassword, addChat, addAnnouncement }
