/* eslint-disable @typescript-eslint/no-empty-object-type */
import Feed from '@components/Feed';
import React from 'react'

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

type Props = {
}

export default function Home({}: Props) {
  return (
   <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed/>
   </section>
  )
}