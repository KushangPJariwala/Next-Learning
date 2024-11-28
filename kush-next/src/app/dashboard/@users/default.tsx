import { useTheme } from "@/components/theme";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {};

export default function DefaultUsers({}: Props) {

  const theme = useTheme()
  console.log('theme', theme)
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h4 style={{color:theme.colors.primary}}>Users</h4>
      <br />
      <Link href="/dashboard/archieved">Archieved users</Link>
    </div>
  );
}
