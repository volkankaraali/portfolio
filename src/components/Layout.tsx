import React, { ReactNode } from 'react'
import Header from './Header'
import Head from 'next/head'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <meta name="description" content="volkan karaali" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code-slash.svg" />
      </Head>
      <Header />
      {children}
    </>
  )
}

export default Layout