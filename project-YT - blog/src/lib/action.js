"use server";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcryptjs";

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

export const register = async ( formData) => {
   const { username, email, password, img, passwordRepeat } =Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    console.log( "Passwords do not match")
    return { error: "Passwords do not match" };
  }

  try {
    connectToDB();

    const user = await User.findOne({ email });

    if (user) {
      console.log("User already exists")
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      // password,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log("err in login action",err.message);

    // if (err.message.includes("CredentialsSignin")) {
    //   console.log("Invalid username or password")
    //   return { error: "Invalid username or password" };
    // }
    // throw err;
  }
};