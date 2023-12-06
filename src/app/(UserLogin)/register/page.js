import RegisterForm from '../../components/RegisterForm'
import 'react-toastify/dist/ReactToastify.css'

export default async function Register() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen bg-indigo-100">
        <div className="text-blue-600 text-6xl mb-10">
          Academate Registration
        </div>
        <div className="bg-white p-10 rounded-xl shadow-lg xl:w-1/4 md:w-1/2 sm:w-full">
          <RegisterForm />
        </div>
      </main>
    </>
  )
}
