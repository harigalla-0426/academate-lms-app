import { Schema, models, model } from 'mongoose'

const resetModel = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    accessToken: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      expires: 60 * 60 * 24, // 24h expiry
      default: Date.now,
    },
  },
  { collection: 'passwordResetDB' },
)

export default models.resetModel || model('resetModel', resetModel)
