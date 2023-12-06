import SideNavBar from '../components/SideNav'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function LoginLayout({ children }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }

  // Make the notification component global if you can
  return (
    <section>
      <div className="flex">
        <div className="md:w-1/5">
          <SideNavBar />
        </div>
        <div className="md:w-4/5">{children}</div>
      </div>
    </section>
  )
}
