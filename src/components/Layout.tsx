import React, { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout