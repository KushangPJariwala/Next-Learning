import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      throw new Error("Wrong credentials!");
    } else {
      console.log("user--", user);
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
   
    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials!");
    } else {
      console.log(" credentials.password", credentials.password);
      console.log(" user.password", user.password);
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        console.log("credentials-----------------", credentials);
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDB();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log("err in signin", err);
          return false;
        }
      }
      return true;
    },
  },
});
