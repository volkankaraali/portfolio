import React from 'react';
import { Box, Typography } from '@mui/material';
import palette from '@/theme/palette';
import Form from './Form';


function ContactForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: { xs: 0, sm: 15, md: 35 }
      }}
    >
      <Typography sx={{ mb: 2 }}> send me a message</Typography>
      <Form />
    </Box>
  )
}

export default ContactForm