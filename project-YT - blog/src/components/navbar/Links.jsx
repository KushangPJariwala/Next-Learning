"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import NavLink from "./NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
export default function Links({session}) {
  // console.log('session', session)
  const [open, setopen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((l) => (
          <NavLink link={l} key={l.path} />
        ))}
        {session?.user ? (
          <>
            {session.user.isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
            <button className={styles.logout} >Logout</button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setopen((prev) => !prev)}
        className={styles.menuBtn}
      ></Image>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((l) => (
            <NavLink link={l} key={l.path} />
          ))}
        </div>
      )}
    </div>
  );
}
