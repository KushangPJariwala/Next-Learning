"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeProvider from "@/components/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const path: string = usePathname();

 
  return (
    <html lang="en">
     
        <body className={inter.className}>
          <header className="header">
            <h1 className="text-3xl font-bold">header</h1>
            <div className="nav">
              <Link href="/" style={{ fontWeight: path === "/" ? 700 : 500 }}>
                home
              </Link>
              <Link
                href="/login"
                style={{ fontWeight: path.startsWith("/login") ? 700 : 500 }}
              >
                login
              </Link>
              <Link
                href="/register"
                style={{ fontWeight: path.startsWith("/register") ? 700 : 500 }}
              >
                register
              </Link>
              <Link
                href="/docs"
                style={{ fontWeight: path.startsWith("/docs") ? 700 : 500 }}
              >
                docs
              </Link>
              <Link
                href="/dashboard"
                style={{
                  fontWeight: path.startsWith("/dashboard") ? 700 : 500,
                }}
              >
                dashboard
              </Link>
            </div>
          </header>
           <ThemeProvider>
          <div className="main">{children}</div>
      </ThemeProvider>
          <footer className="footer">
            <h1 className="text-3xl font-bold">Footer</h1>
          </footer>
        </body>
    </html>
  );
}
