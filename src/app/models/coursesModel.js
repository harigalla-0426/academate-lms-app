import { Schema, models, model } from 'mongoose'

const coursesModel = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    studentsEnrolled: {
      type: Array,
      required: true,
    },
    discussions: {
      type: Array,
      required: true,
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'usersDB',
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
    assignments: {
      type: Array,
      required: true,
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      dueDate: {
        type: Date,
        required: true,
      },
      assignmentType: {
        type: String,
        required: true,
        enum: ['exam', 'quiz', 'assignment'],
      },
    },
    announcements: {
      type: Array,
      required: true,
      header: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: false,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  },
  { collection: 'coursesDB' },
)

module.exports = models.coursesDB || model('coursesDB', coursesModel)
