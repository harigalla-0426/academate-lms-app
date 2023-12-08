import { NavBar } from './components/NavBar'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session && session.user) {
    redirect('/dashboard')
  }

  return (
    <>
      <NavBar />
      <main>
        <div className="flex items-center justify-evenly m-4">
          <div>
            <Image
              src="/academate_homepage.png"
              alt="Academate Home"
              width={800}
              height={800}
            />
          </div>
          <div className="text-xl ml-10 xl:ml-4">
            Welcome to{' '}
            <span className="font-bold text-xl text-emerald-600">
              Academate
            </span>
            , your gateway to a seamless learning experience!
            <h2 className="text-2xl font-bold mb-4 underline">
              <a href="/api/auth/signin">Login to Your Account</a>
            </h2>
          </div>
        </div>
      </main>
    </>
  )
}
