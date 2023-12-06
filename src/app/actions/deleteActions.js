'use server'

import connectDB from '../config/db'
import resetPasswordModel from '../models/resetPasswordModel'

async function cleanUpForgetToken(accessToken) {
  try {
    await connectDB()
    const isDeleted = await resetPasswordModel.deleteOne({ accessToken })

    if (!isDeleted) {
      throw new Error(`User token couldn't be deleted!`)
    }

    return { success: true, message: 'User token deleted!' }
  } catch (error) {
    return { success: false, message: error?.message }
  }
}

export { cleanUpForgetToken }
