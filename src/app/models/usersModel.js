import { Schema, models, model } from 'mongoose'

const usersModel = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    userType: {
      type: String,
      required: true,
      enum: ['admin', 'student', 'faculty'],
    },
    courses: {
      // For students courses holds courses they are enrolled in
      // For faculty courses holds courses they are the instructor for
      // For admin courses holds courses they have perms for
      type: Array,
      required: true,
      courseId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      grade: {
        type: Number,
        required: false,
      },
    },
  },
  { collection: 'usersDB' },
)

module.exports = models.usersDB || model('usersDB', usersModel)
