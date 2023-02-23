import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}:{ children: JSX.Element }) => {
  return (<>
    <Navbar />
    {children}
  </>
  )
}

export default Layout