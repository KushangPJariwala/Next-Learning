import { dbConnect } from "@/helper/db";
import { MongoClient } from "mongodb";

export default async function getAllPosts() {
  try {
    const client = await dbConnect();
    const db = client.db("blogDb");
    let data = await db.collection("blogs").find().toArray();
    const posts = data.map((res) => {
      return {
        ...res,
        _id: res._id.toString(),
      };
    });
    client.close();
    return posts;
    // res.status(201).json(data);
  } catch (err) {
    console.log(err.message);
    // res.json({ err: "error", e: err.message });
  }
}
