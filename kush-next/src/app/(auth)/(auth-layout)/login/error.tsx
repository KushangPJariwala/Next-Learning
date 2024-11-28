"use client"
import React from 'react'

type Props = {
    error:Error,
    reset:()=>void
}

export default function ErrorBoundary({error,reset}: Props) {
  return (
    <div>
        {error.message}..........
        <button onClick={reset}>try again</button>
        </div>
  )
}