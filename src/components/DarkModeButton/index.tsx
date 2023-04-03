import { ThemeContextType, useSettings, Theme } from '@/context/SettingsContext';
import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


function DarkModeButton() {

  const { themeMode, changeTheme } = useSettings() as ThemeContextType;

  return (
    <>
      {
        themeMode === 'light'
          ? <DarkModeIcon color='primary' fontSize='large' sx={{ cursor: 'pointer' }} onClick={() => changeTheme('dark')} />
          : <LightModeOutlinedIcon color='primary' fontSize='large' sx={{ cursor: 'pointer' }} onClick={() => changeTheme('light')} />
      }
    </>
  )
}

export default DarkModeButton