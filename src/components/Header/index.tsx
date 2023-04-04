// libraries
import React from 'react';
import { Box, Container } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

// palette
import palette from '@/theme/palette';
import { PATHS } from '@/constants';
import { ThemeContextType, useSettings } from '@/context/SettingsContext';
import DarkModeButton from '../DarkModeButton';


function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { themeMode } = useSettings() as ThemeContextType;

  return (
    <Box component="header">
      <Container sx={{ height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {
          PATHS.map(path => (
            <Box
              key={path.name}
              component={Link}
              href={path.route}
              sx={{
                px: 2,
                py: 0.5,
                mr: 1,
                borderRadius: 2,
                color: themeMode === 'dark' ? palette.dark.grey[200] : palette.dark.grey[900],
                borderBottom: currentRoute === path.route ? `2px solid ${palette.dark.primary.main}` : '',
                textDecoration: 'none',
                ":hover": {
                  color: palette.dark.primary.main,
                  transition: '0.3s linear',
                }
              }}
            >
              {path.name}
            </Box>
          ))
        }
        <DarkModeButton />
      </Container >
    </Box >
  )
}

export default Header