"use client";
import axios from "axios";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

type Props = {};
type User = { name: string; archieved: boolean };

export default function Users({}: Props) {
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    // const res = await axios.get("/api/users");
    // console.log("res", res);
    // setusers(res?.data?.users);

    const res = await fetch("/api/users", { cache: "force-cache" });
    const data = await res.json(); // Parse JSON response
    console.log("data", data);
    setusers(data?.users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h4>Users</h4>
      <br />
      <Link href="/dashboard/archieved">Archieved users</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <table border={1}>
          <tr>
            <th>Name</th>
            <th>Active</th>
          </tr>
          {users?.map((u: User) => {
            return (
              <tr>
                <td>{u.name}</td>
                <td>{u.archieved ? "No" : "Yes"}</td>
              </tr>
            );
          })}
        </table>
      </Suspense>
    </div>
  );
}
