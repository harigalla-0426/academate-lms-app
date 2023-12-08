import mongoose from 'mongoose'

async function connectDB() {
  try {
    if (mongoose.connection.readyState == 1) return

    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@myfirstcluster0.q1bejuz.mongodb.net/${process.env.DB_NAME}`,
    )
  } catch (error) {
    console.log('Error while connecting to the DB', error)
  }
}

export default connectDB
