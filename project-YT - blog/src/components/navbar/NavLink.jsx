"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from './navbar.module.css'

export default function NavLink({ link }) {
    const pathName= usePathname()
  return (
    <div>
      <Link href={link.path} key={link.path} className={`${styles.navlink} ${pathName===link.path && styles.active}`}>
        {link.title}
      </Link>
    </div>
  );
}
