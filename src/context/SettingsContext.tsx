import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'


export type Theme = "light" | "dark";

export type ThemeContextType = {
  themeMode: Theme;
  changeTheme: (theme: Theme) => void;
}

interface Props {
  children: ReactNode
}

const SettingsContext = createContext<ThemeContextType | null>(null)

const SettingsProvider: React.FC<Props> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>("dark");


  useEffect(() => {
    console.log(localStorage.getItem("themeMode"))
    const stored = localStorage.getItem("themeMode") as Theme || null;
    stored && setTheme(stored)
  }, [])


  const values = {
    themeMode: theme,
    changeTheme: setTheme
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

export const useSettings = () => useContext(SettingsContext);