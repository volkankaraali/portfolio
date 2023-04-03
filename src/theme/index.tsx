import React, { ReactNode, useMemo } from 'react'
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import palette from './palette';
import { ThemeContextType, useSettings } from '@/context/SettingsContext';


type Props = {
  children?: ReactNode
}

const ThemeProvider = ({ children }: Props) => {

  const { themeMode } = useSettings() as ThemeContextType;

  const themeOptions: {} = useMemo(
    () => ({
      palette: themeMode === 'dark' ? palette.dark : palette.light,
      typography: {
        fontFamily: 'Poppins'
      }
    }), [themeMode]
  )

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider