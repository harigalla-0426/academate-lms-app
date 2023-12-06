import mongoose from 'mongoose'

async function connectDB() {
  try {
    if (mongoose.connection.readyState == 1) return

    console.log(
      'Env variables ... ',
      process.env.NEXTAUTH_URL,
      process.env.NEXTAUTH_SECRET,
      process.env.DB_USER,
      process.env.DB_NAME,
      process.env.GOOGLE_CLIENT_ID,
    )

    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@myfirstcluster0.q1bejuz.mongodb.net/${process.env.DB_NAME}`,
    )
  } catch (error) {
    console.log('Error while connecting to the DB', error)
  }
}

export default connectDB
