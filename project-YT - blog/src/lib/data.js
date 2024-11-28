import { Post, User } from "./models";
import { connectToDB } from "./utils";

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    // console.log("posts", posts);
    return posts;
  } catch (err) {
    console.log("err to get posts", err);
  }
};
export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    // console.log('post', post)
    return post;
  } catch (err) {
    console.log("err to get single post", err);
  }
};

export const getUser = async (id) => {
   try {
    connectToDB();
    const user = await User.findById({_id:id});
    // console.log("single user", user);
    return user;
  } catch (err) {
    console.log("err to get user", err);
  }
};
export const getUsers = async () => {
   try {
    connectToDB();
    const user = await User.find();
    // console.log("users", user);
    return user;
  } catch (err) {
    console.log("err to get user", err);
  }
};
