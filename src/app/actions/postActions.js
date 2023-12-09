'use server'

import connectDB from '../config/db'
import usersModel from '../models/usersModel'
import resetPasswordModel from '../models/resetPasswordModel'
import coursesModel from '../models/coursesModel'
import bcrypt from 'bcrypt'
import sgMail from '@sendgrid/mail'

async function handleLogin(userName, userPass) {
  try {
    await connectDB()

    console.log('After connecting to the DB')

    let loginResp = null
    if (/^\S+@\S+\.\S+$/.test(userName)) {
      loginResp = await usersModel.findOne({ email: userName })
    } else {
      loginResp = await usersModel.findOne({ userName })
    }

    if (!loginResp) {
      return {
        success: false,
        message: 'Invalid Combination of username and password!',
      }
    } else {
      const isAuthenticated = await bcrypt.compare(
        userPass,
        loginResp?.password,
      )

      if (isAuthenticated) {
        const {
          _id,
          userName,
          email,
          firstName,
          lastName,
          userType,
          courses,
        } = loginResp

        return {
          success: true,
          message: 'Credentials Validated!',
          user: {
            userId: _id.toString(),
            userName,
            email,
            firstName,
            lastName,
            userType,
            courses,
          },
        }
      }

      return { success: false, message: 'Wrong Password!' }
    }
  } catch (error) {
    return { success: false, message: 'Error Accessing the Database!' }
  }
}

async function handleRegistration({
  userName,
  userPass,
  firstName,
  lastName,
  email,
  userType,
  courseOptions,
}) {
  try {
    if (!/^[a-zA-Z0-9_]{4,20}$/.test(userName)) {
      return { success: false, message: 'Please enter a valid username!' }
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(userPass)) {
      return {
        success: false,
        message: `Enter a Valid Password! 
        (At least 8 chars with one uppercase, lowercase and digit)`,
      }
    }

    if (!/^[a-zA-Z]{2,15}$/.test(firstName)) {
      return { success: false, message: 'Please enter a valid first name!' }
    }

    if (!/^[a-zA-Z]{2,12}$/.test(lastName)) {
      return { success: false, message: 'Please enter a valid last name!' }
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return { success: false, message: 'Please enter a valid email!' }
    }

    console.log('everything valid')
    await connectDB()

    const validCourses = await coursesModel.find({
      _id: { $in: courseOptions },
    })

    if (validCourses.length !== courseOptions.length) {
      return {
        success: false,
        message: 'Course id not found',
      }
    }

    const hashedPass = await bcrypt.hash(userPass, 11)

    const newUser = new usersModel({
      userName,
      email,
      password: hashedPass,
      firstName,
      lastName,
      userType,
    })

    try {
      const loginUser = await newUser.save()

      if (loginUser) {
        return {
          success: true,
          message: 'User registration successful!',
        }
      }
    } catch (error) {
      if (error.code === 11000) {
        return {
          success: false,
          message: 'Email ID or Username already in use!',
        }
      }
      console.log('database error', error)
      return { success: false, message: 'Error Accessing the Database!' }
    }
  } catch (error) {
    console.log('unknown error', error)
    return { success: false, message: 'Oops! Something went wrong!' }
  }
}

async function handleForgetPassword(userEmail) {
  try {
    await connectDB()

    const userFound = await usersModel.findOne({ email: userEmail })

    if (!userFound) {
      return { success: false, message: 'Email id not registered!' }
    }

    const accessToken = bcrypt.hashSync(Date.now().toString(), 10)

    try {
      const forgotEntry = new resetPasswordModel({
        email: userEmail,
        accessToken,
      })

      await forgotEntry.save()

      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const msg = returnEmailTemplate(userEmail, accessToken)

      sgMail
        .send(msg)
        .then(() => console.log('Email sent'))
        .catch((error) => console.error('mail send failed', error))

      return {
        success: true,
        message:
          'Verification Link sent! Check your email and reset within 24h!',
      }
    } catch (error) {
      if (error.code === 11000) {
        return {
          success: false,
          message: 'Verification Link already sent!',
        }
      }
      console.log('database error', error)
      return { success: false, message: 'Error Accessing the Database!' }
    }
  } catch (error) {
    console.error('Unknown Error', error)
    return { success: false, message: 'Oops something went wrong!' }
  }
}

const returnEmailTemplate = (userEmail, accessToken) => {
  return {
    to: userEmail,
    from: 'hgalla@iu.edu',
    subject: 'Forgot Password - Academate',
    text: `Forgot Your Password? 
    Hi there, 
    You recently requested to reset your password. 
    To proceed, click on the link below: 
    Reset Password 
    If you didn't request a password reset, please ignore this email. 
    Thank you!`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Forgot Password</title>
    </head>
    <body style="font-family: Arial, sans-serif;">
    
        <h1>Forgot Your Password?</h1>
    
        <p>
            Hi there,
        </p>
    
        <p>
            You recently requested to reset your password. To proceed, click on the link below:
        </p>
    
        <p>
            <a href="${process.env.NEXTAUTH_URL}/forgot?accessToken=${accessToken}" target="_blank">Reset Password</a>
        </p>
    
        <p>
            If you didn't request a password reset, please ignore this email.
        </p>
    
        <p>
            Thank you!
        </p>
    
    </body>
    </html>`,
  }
}

export { handleLogin, handleRegistration, handleForgetPassword }
