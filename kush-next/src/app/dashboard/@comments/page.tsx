"use client";
import axios from "axios";
import React, { FormEvent } from "react";

type Props = {};

export default function Comments({}: Props) {
  const addUser = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const id = formData.get("id");

    const res = await axios.post("/api/users", {
      body: { name, id },
    });
    console.log("res", res);
  };
  return (
    <div>
      <h4>Add User</h4>
      <form onSubmit={addUser} method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <br />
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" required />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
