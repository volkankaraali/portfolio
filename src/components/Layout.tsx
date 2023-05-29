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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="i am volkan karaali. i'm passionate frontend developer. i am currently using react,nextjs and react-native." />
        <meta name="keywords" content="frontend developer, frontend, developer,react,reactjs,nextjs,html,css,javascript,typescript,js,ts" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="volkan karaali" />

        <link rel="icon" href="/code-slash.svg" />
      </Head>
      <Header />
      {children}
    </>
  )
}

export default Layout