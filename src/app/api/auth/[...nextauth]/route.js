import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { getUser } from '../../../actions/getActions'

let loggedUser = null

export const authOptions = {
  providers: [
    Credentials({
      type: 'credentials',
      credentials: {},
      authorize(user, req) {
        if (user?.email && user?.userId) {
          if (!user?.email.endsWith('@iu.edu')) {
            return false
          }

          console.log('login confirmed...', user?.email, user?.userType)
          loggedUser = user

          return user
        } else {
          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    signIn: async ({ account, profile }) => {
      // Allowing only users with iu.edu
      // console.log('profile email', profile, account)
      if (account.provider === 'google') {
        if (!profile.email_verified || !profile.email.endsWith('@iu.edu')) {
          return null
        }

        // check if the user exists in database
        const user = await getUser(profile.email)

        if (user?.email) {
          loggedUser = user
          return true
        }

        return null
      }
      return true
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      if (user && loggedUser) {
        token.user.userId = loggedUser.userId
        token.user.userType = loggedUser.userType
        token.user.courses = loggedUser.courses
      }
      console.log('user jwt token', token)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    },
    redirect() {
      return '/'
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
