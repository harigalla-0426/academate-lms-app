import { Schema, models, model } from 'mongoose'

const submissionsModel = new Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    submissionDate: {
      type: Date,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
      required: false,
      default: 0,
    },
    instructorComments: {
      type: Array,
      required: false,
      commentDate: {
        type: Date,
        required: true,
      },
      body: {
        type: Text,
        required: true,
      },
    },
  },
  { collection: 'submissionsDB' },
)

module.exports =
  models.submissionsDB || model('submissionsDB', submissionsModel)
