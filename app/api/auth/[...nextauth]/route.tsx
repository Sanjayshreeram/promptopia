import NextAuth, { NextAuthOptions } from "next-auth";
import { Provider } from "next-auth/providers";
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from "next-auth/react";


// type props={
//     ClientId:string,
//     ClientSecret:string
// }

const handler =NextAuth ({
    providers: [
        GoogleProvider({
            clientId: "",
            clientSecret: "",
        })
    ],
    async session({session}:{session:any}) {
        

    },
    async signIn({ profile }: { profile: any }) {

    }
});

// const handler = NextAuth(options);

export { handler as GET, handler as POST };
