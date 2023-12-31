'use server'

import connectDB from '../config/db'
import usersModel from '../models/usersModel'
import coursesModel from '../models/coursesModel'

const getUser = async (payload, findById = false) => {
  await connectDB()

  try {
    if (findById) {
      const { firstName, userType } = await usersModel.findById(payload)
      // console.log(payload, firstName, userType)

      return { userId: payload, firstName, userType }
    } else {
      const {
        _id,
        userName,
        email,
        firstName,
        lastName,
        userType,
        courses,
      } = await usersModel.findOne({ email: payload })

      console.log('userType actions', userType)

      return {
        userId: _id.toString(),
        userName,
        email,
        firstName,
        lastName,
        userType,
        courses,
      }
    }
  } catch (error) {
    console.log('Error while finding the user in getUser', error)
    return null
  }
}

const getChats = async (chatId) => {
  await connectDB()

  try {
    const courseResp = await coursesModel.findById(chatId)

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
    const courseResp = await coursesModel.findById(chatId)

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
    const { title, announcements } = await coursesModel.findById(courseId)

    if (!announcements) {
      throw new Error('Could not find announcements for the given courseId!')
    }

    return { title, announcements }
  } catch (error) {
    console.log('Get announcements Error', error)
    return {
      success: false,
      message: error?.message || 'Oops! Something went wrong!',
    }
  }
}

const getSubmissions = async (courseId, assignmentTitle) => {
  await connectDB()

  try {
    const { assignments } = await coursesModel.findOne(
      {
        _id: courseId,
        'assignments.title': assignmentTitle,
      },
      { 'assignments.$': 1 },
    )

    if (!assignments || !assignments.length) {
      throw new Error('Could not find submissions for the given courseId!')
    }

    console.log('submissions', assignments[0]?.submissions)

    return {
      success: true,
      data: assignments[0]?.submissions,
    }
  } catch (error) {
    console.log('Get submissions Error', error)
    return {
      success: false,
      message: error?.message || 'Oops! Something went wrong!',
    }
  }
}

export {
  getUser,
  getChats,
  hasChatAccess,
  getAnnouncements,
  getCourses,
  getSubmissions,
}
