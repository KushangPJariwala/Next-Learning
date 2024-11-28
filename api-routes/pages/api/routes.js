// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

const getFilePath = () => {
  const f = path.join(process.cwd(), "data", "feedback.json");
  return f;
};
const getFileData = () => {
  const f = getFilePath();
  const fData = fs.readFileSync(f);

  return fData;
};

export const getAllFeedbacks = () => {
  const fData = getFileData();
  const data = JSON.parse(fData);
  return data;
};
export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: new Date().toLocaleString(),
      email,
      text,
    };

    const f = getFilePath();
    const fData = getFileData();
    const data = JSON.parse(fData);
    data.push(newFeedback);
    fs.writeFileSync(f, JSON.stringify(data));
    res.status(201).json({ msg: "success", feedback: newFeedback });
  } else {
    const data = getAllFeedbacks();
    res.status(201).json({ feedback: data });
  }
}
