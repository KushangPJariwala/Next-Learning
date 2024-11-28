import MeetupList from "@/components/meetups/MeetupList";
import getMeetups from "./api/get-meetups";
import { createContext, useContext } from "react";
import { Context } from "./_app";

export default function Home(props) {
  const { allMeetups, setAllMeetups } = useContext(Context);
  setAllMeetups(props.meetups);
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getMeetups();
  const meetups = JSON.parse(data);
  return {
    props: {
      meetups,
    },
  };
}
