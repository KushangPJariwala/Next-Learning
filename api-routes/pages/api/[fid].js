import { getAllFeedbacks } from "./routes";

export default function handler(req, res) {
  const feedbacks = getAllFeedbacks();
  const fid = req.query.fid;

  const feedback = feedbacks.find((f) => f.id === fid);
  res.status(201).json( feedback);
}
