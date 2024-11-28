import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../_app";
import Card from "../../components/ui/Card";
import classes from "../../components/meetups/MeetupItem.module.css";

export default function MeetupDetail() {
  const router = useRouter();
  const mid = router.query.meetupId;

  const { allMeetups, setAllMeetups } = useContext(Context);
  return (
    <>
      <center><h1>Meetup Detail</h1></center>
      {
        allMeetups?.map(
          (m) =>
            m.id === mid && (
              <Card>
                <div className={classes.image}>
                  <img src={m.image} alt="image" />
                </div>
                <div className={classes.content}>
                  <h3>{m.title}</h3>
                  <address>{m.address}</address>
                  <h4>{m.description}</h4>
                </div>
              </Card>
            )
        )
      }
    </>
  );
}
