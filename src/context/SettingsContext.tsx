import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'


export type Theme = "light" | "dark";

export type ThemeContextType = {
  themeMode: Theme | null | undefined;
  changeTheme: (theme: Theme) => void;
}

interface Props {
  children: ReactNode
}

const SettingsContext = createContext<ThemeContextType | null>(null)

const SettingsProvider: React.FC<Props> = ({ children }) => {

  const [theme, setThemeMode] = useState<Theme | null>();


  useEffect(() => {
    const stored = localStorage.getItem("themeMode") as Theme;
    stored ? setThemeMode(stored) : setThemeMode('dark')
  }, [])

  const changeTheme = (mode: Theme) => {
    localStorage.setItem('themeMode', mode);
    setThemeMode(mode);
  };

  const values = {
    themeMode: theme,
    changeTheme
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

export const useSettings = () => useContext(SettingsContext);