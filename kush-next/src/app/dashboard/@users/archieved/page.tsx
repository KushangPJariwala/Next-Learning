"use client";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

type Props = {};
type User = { name: string; active: boolean };

export default function ArchievedUsers({}: Props) {
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const res = await fetch(`/api/users?archieved=${true}`);
    const data = await res.json(); // Parse JSON response
    console.log("data", data);
    setusers(data?.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log("users", users);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h4>ArchievedUsers</h4>
      <Link href="/dashboard">All users</Link>

      {users.length !== 0 ? (
        <table border={1}>
          <tr>
            <th>Name</th>
            <th>Active</th>
          </tr>
          {users?.map((u: User) => {
            return (
              <tr>
                <td>{u.name}</td>
                <td>{u.active === false ? "No" : "Yes"}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
