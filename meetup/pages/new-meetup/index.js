import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Loader from "@/components/ui/loader";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function NewMeetup() {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const addMeetup = async (meetup) => {
    setLoading(true);
    try {
      const res = await fetch("/api/add-meetup", {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("data", data);
      if (data.success) {
        toast.success(data.success, { position: "top-right" });
      }

      if (data.error) {
        toast.error(data.error, { position: "top-right" });
      }
      setLoading(false);
      router.replace('/')
    } catch (err) {
      toast.error(err, { position: "top-right" });

      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <NewMeetupForm onAddMeetup={addMeetup} />
    </>
  );
}
