import LoginForm from '../../components/LoginForm'

export default async function Login() {
  //   await connectDB()
  //   const loginData = await loginModel.find({})

  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen bg-indigo-100">
        <div className="text-blue-600 text-6xl mb-10">Academate Login</div>
        <div className="bg-white p-8 rounded-xl shadow-lg w-auto">
          <LoginForm />
        </div>
      </main>
    </>
  )
}
