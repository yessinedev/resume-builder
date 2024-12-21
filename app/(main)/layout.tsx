import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function Layout({children}: Props) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout