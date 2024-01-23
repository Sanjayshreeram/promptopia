import NextAuth from "next-auth";

import GoogleProvider from 'next-auth/providers/google';
import { signIn } from "next-auth/react";
import { connectToDatabase } from "@utils/database";


// type props={
//     ClientId:string,
//     ClientSecret:string
// }

console.log({   clientId:process.env.GOOGLE_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,})
// const secret:any=203524816905-a7c2m8i309ca7480sgetodiqqoqvvvfk.apps.googleusercontent.com;
// const secretid:any=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;

const handler =NextAuth ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID||" ",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET||" ",
        })
    ],
    async session({session}:{session:any}){
        
        

    },
    async signIn({ profile }:{profile:any}){

        try{
            await connectToDatabase();
            //check if a user already exists

            //if not create a new user

            return true

        }
        catch(error)
        {
            console.log(error);
            return false;
        }
      
       

    }
});

// const handler = NextAuth(options);

export { handler as GET, handler as POST };
