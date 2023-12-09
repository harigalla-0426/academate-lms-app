'use server'

import connectDB from '../config/db'
import usersModel from '../models/usersModel'
import coursesModel from '../models/coursesModel'

// shared variables
let courseResp = null

const getUser = async (payload, findById = false) => {
  await connectDB()

  try {
    if (findById) {
      const { firstName, userType } = await usersModel.findById(payload)
      // console.log(payload, firstName, userType)

      return { userId: payload, firstName, userType }
    } else {
      const getUserResp = await usersModel.findOne({ email: payload })

      return getUserResp
    }
  } catch (error) {
    console.log('Error while finding the user in getUser', error)
    return null
  }
}

const getChats = async (chatId) => {
  await connectDB()

  try {
    courseResp = courseResp || (await coursesModel.findById(chatId))

    if (!courseResp || !courseResp?.discussions) {
      throw new Error('ID not found in the courses DB!')
    }

    const { discussions, title } = courseResp

    return { discussions, title }
  } catch (error) {
    console.log('Get chats Error', error)
    return {
      success: false,
      message: 'Invalid Chat Id!',
    }
  }
}

const hasChatAccess = async (chatId, userId, userType) => {
  await connectDB()

  try {
    let hasAccess = false
    courseResp = courseResp || (await coursesModel.findById(chatId))

    if (userType === 'faculty') {
      hasAccess = courseResp?.instructor.toString() === userId
    } else {
      hasAccess = courseResp?.studentsEnrolled.some(
        (studentId) => studentId.toString() === userId,
      )
    }

    return hasAccess
  } catch (error) {
    console.log('Chats Error', error)
    return {
      success: false,
      message: 'Invalid Chat Id!',
    }
  }
}

const getCourses = async (courseList) => {
  await connectDB()

  try {
    const registeredCourses = await coursesModel.find({
      _id: { $in: courseList },
    })
    // console.log('registeredCourses', registeredCourses)

    if (!registeredCourses || !registeredCourses[0]?.title) {
      throw new Error('ID not found in the courses DB!')
    }

    const coursesObj = registeredCourses.map(
      ({
        _id,
        title,
        description,
        instructor,
        studentsEnrolled,
        assignments,
        discussions,
        announcements,
      }) => {
        return {
          courseId: _id.toString(),
          title,
          description,
          instructor,
          studentsEnrolled,
          assignments,
          discussions,
          announcements,
        }
      },
    )

    return coursesObj
  } catch (error) {
    console.log('Get courses Error', error)
    return {
      success: false,
      message:
        error?.message ||
        'Oops! Something went wrong while fetching your courses!',
    }
  }
}

const getAnnouncements = async (courseId) => {
  await connectDB()

  try {
    const { announcments: announcements } = await coursesModel.findById(
      courseId,
    )

    if (!announcements) {
      throw new Error('Could not find announcements for the given courseId!')
    }

    return announcements
  } catch (error) {
    console.log('Get announcements Error', error)
    return {
      success: false,
      message: error?.message || 'Oops! Something went wrong!',
    }
  }
}

export { getUser, getChats, hasChatAccess, getAnnouncements, getCourses }
