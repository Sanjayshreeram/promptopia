import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDatabase } from '@utils/database'
import User from '@models/user'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID||" ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET|| " ",
      authorization: {
        params: {
          prompt: 'consent',
         
        }
      }
    })
  ],
  
  callbacks: {
    async session ({ session }:{session:any}) {
      await connectToDatabase()
      const sessionUser = await User.findOne({ email: session.user.email })
      session.user.id = sessionUser._id.toString()
      return session
    },
    async signIn ({ profile,account,user,credentials }:{profile:any,account:any,user:any,credentials:any}) {
      try {
        await connectToDatabase()
        const uesrExists = await User.findOne({ email: profile.email })
        if (!uesrExists) {
          await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture
          })
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }