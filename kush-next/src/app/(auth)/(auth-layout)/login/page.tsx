"use client"
import React, { useState } from 'react'

type Props = {}

export default function Login({}: Props) {
   const [text, settext] = useState(0)
  // console.log('path.satrats', path.startsWith('/login'))
  if(text>5){
    throw new Error("large num")
  }
  return (
    <>
     <input type="number" value={text} onChange={(e)=>settext(+e.target.value)}></input>
    <div>login</div>
    </>
  )
}