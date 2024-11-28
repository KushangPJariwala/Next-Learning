import { dbConnect } from "@/db/db";

export default async function getMeetups() {
  try {
    const client = await dbConnect();
    const db = client.db();
    const meetups = db.collection("meetups");
    const result = await meetups.find().toArray();
    const data=JSON.stringify(result);
    return data;
  } catch (err) {
    console.log('err', err)
  }
}
