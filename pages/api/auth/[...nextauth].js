import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = {
          email: 'achref08fraj@gmail.com',
          password: 'achref123456'
        };

        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          return { email: user.email };
        } else {
          throw new Error('Invalid email or password');
        }
      },
    }),
  ],
  pages: {
    signIn: '/index',
  },
  secret: process.env.NEXTAUTH_SECRET,
  database: process.env.MONGODB_URI,
});
