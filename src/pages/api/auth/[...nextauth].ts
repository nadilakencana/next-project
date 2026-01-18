import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session:{
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // definisi form login
            credentials: {
                email: { 
                    label: "Email", 
                    type: "email", 
                },
                fullname: { 
                    label: "Full Name", 
                    type: "string", 
                },
                password: { 
                    label: "Password",
                    type: "password"
                },
            },
            async authorize(credentials) {
                const {email, password, fullname} = credentials as {
                    email: string;
                    fullname: string;
                    password: string;

                };
                const user:any = {
                    id: "1",
                    email: email,
                    fullname: fullname,
                    password: password
                };

                if(user){
                    console.log("user:", user);
                    return user;
                }else{
                    return null;
                }
             }
        })
    ],
    callbacks:{
        jwt({token, account, user} : any){
            if(account?.provider === "credentials"){
                token.email = user.email;
                token.fullname = user.fullname;
            }
            console.log("token:", token, "account:", account, "user:", user);
            return token;
        },

        async session({session, token} : any){
            if("email" in token){
                session.user.email = token.email as string;
                session.user.fullname = token.fullname as string;
            }
            console.log("session:", session, "token:", token);
            return session;
        }
    }
}

export default NextAuth(authOptions);