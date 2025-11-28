import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth,signIn,signOut } = NextAuth({
    providers: [GoogleProvider({

        authorization:{
            params:{
                access_type:"offline",
                prompt:"consent",
                response_type:"code",
            }   
        }
    })],
    session:{
        strategy:"jwt",
    }
});

