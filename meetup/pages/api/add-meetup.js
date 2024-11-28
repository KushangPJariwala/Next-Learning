import { dbConnect } from "@/db/db";

export default async function handler(req, res) {
  try {
    const NewMeetup = req.body;

    const client = await dbConnect();
    const db = client.db();
    const meetups = db.collection("meetups");
    await meetups.insertOne(NewMeetup);
    res.status(201).json({ success: "new meetup added" });
  } catch (err) {
    res.status(201).json({ error: err.message });
  }
}
