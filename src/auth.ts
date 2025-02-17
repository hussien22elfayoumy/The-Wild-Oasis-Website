import NextAuth, { Session, User } from 'next-auth';
import Google from 'next-auth/providers/google';
import { createGuest, getGuest } from './lib/data-service';

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized: async ({ auth, request }: { auth: Session | null; request: Request }) => {
      // NOTE: !! is for converting any value into boolean
      return !!auth?.user;
    },
    // signIn: async ({ user, profile, account }: { user: User }) => {
    signIn: async ({ user }: { user: User }) => {
      try {
        const existingUser = await getGuest(user?.email);
        if (!existingUser) {
          await createGuest({ fullName: user.name, email: user.email });
        }

        return true;
      } catch {
        return false;
      }
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
