/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { ReactNode } from 'react'
import '@styles/global.css'
import Nav from '@components/Nav';
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
type Props = {
  children:ReactNode
}

export default function RootLayout({children}: Props) {
  return (
   <html lang='en'>
    <body>
      {/* <Provider> */}
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      {/* </Provider> */}
    </body>
  </html>
  )
}