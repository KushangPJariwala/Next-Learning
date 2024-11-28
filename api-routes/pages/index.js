import React, { useRef, useState } from "react";

export default function Home() {
  const email = useRef();
  const text = useRef();
  // const [feedbacks, setFeedbacks] = useState([]);
  const submitFormHandler = async (e) => {
    e.preventDefault();
    const em = email.current.value;
    const t = text.current.value;

    const res = await fetch("/api/routes", {
      method: "POST",
      body: JSON.stringify({ email: em, text: t }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
  };

  // const loadFeedbacks = async () => {
  //   const res = await fetch("/api/routes");
  //   const data = await res.json();
  //   setFeedbacks(data.feedback);
  // };
  return (
    <>
      <div>Home</div>

      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={email} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={text}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      {/* <div>
        <button onClick={loadFeedbacks}>Load Feedback</button>
      </div> */}
      {/* <div>
        <h3>FeedBacks : </h3>
        {feedbacks.map((f) => (
          <li key={f.id}>{f.text}</li>
        ))}
      </div> */}
    </>
  );
}
