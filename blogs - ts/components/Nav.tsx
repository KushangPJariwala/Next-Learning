/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use clinet"
import { BuiltInProviderType } from 'next-auth/providers/index';
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function Nav({}: Props) {

  const [providers, setProviders] = useState(null);

   useEffect(() => {
    (async () => {
      const res:Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <nav className='flex-between w-full mb-16 pt-3'>

         <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

{/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {
        // session?.user
        1===1
        ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' 
            // onClick={signOut}
             className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                // src={session?.user.image}
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) 
        : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}