import React, { useState } from "react";
import { getAllFeedbacks } from "../api/routes";

export default function FeedBacks(props) {
  const [feedback, setFeedback] = useState();
  const getFeedbackDetails = async (fid) => {
    const res = await fetch(`/api/${fid}`);
    const f = await res.json();
    console.log('f', f)
    setFeedback(f);
  };
  return (
    <div>
      <div>
        <h4> {feedback ? "Details: " + feedback.email : ""}</h4>
      </div>
      <h3>FeedBacks : </h3>
      {props.feedbacks.map((f) => (
        <li key={f.id}>
          {f.text}{" "}
          <button onClick={() => getFeedbackDetails(f.id)}>Details</button>
        </li>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const feedbacks = getAllFeedbacks();

  return {
    props: {
      feedbacks: feedbacks,
    },
  };
}
