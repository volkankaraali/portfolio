import { Analytics } from '@vercel/analytics/react';
import SettingsProvider from '@/context/SettingsContext'
import ThemeProvider from '@/theme'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';


// toastify css import
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <ThemeProvider >
        <Component {...pageProps} />
        <Analytics />
        <ToastContainer />
      </ThemeProvider>
    </SettingsProvider>

  )
}
