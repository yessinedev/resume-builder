'use client';
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='shadow-sm'>
        <div className='max-w-7xl mx-auto p-3 flex items-center justify-between gap-3'>
        <Link href="/resumes" className='flex items-center gap-2'>
            <span className='text-xl font-bold tracking-tight'>Resumator</span>
        </Link>
        <UserButton
            appearance={{
                elements: {
                    avatarBox: {
                        width: 35,
                        height: 35,
                    }
                }
            }}
        />
        </div>
    </header>
  )
}

export default Navbar