import NextAuth from "next-auth/";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../../utils/database";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const users = await fetch("http://localhost:3000/api/users");
        const data = await users.json();

        for (let i = 0; i < data.length; i++) {
          if (credentials.username === data[i].username) {
            if (credentials.password === data[i].password) {
              console.log("user", data[i]);
              return { username: data[i].username };
            }
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
