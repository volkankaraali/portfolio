import SettingsProvider from '@/context/SettingsContext'
import ThemeProvider from '@/theme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <ThemeProvider >
        <Component {...pageProps} />
      </ThemeProvider>
    </SettingsProvider>

  )
}
