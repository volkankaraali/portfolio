import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


function Infos() {

  const [text, setText] = useState<string>("volkan");


  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          src={"/images/volkankaraali.jpg"}
          width={250}
          height={250}
          alt='volkan karaali'
          style={{
            borderRadius: '50%',
          }}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <motion.div
          style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                delay: 2,
                staggerChildren: 0.1,
              }
            }
          }}

        >
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>hi! i am  &nbsp; </Typography>
          {
            text.split("").map((char, i) => (
              <motion.div
                key={i}
                style={{
                  display: 'inline-block',
                }}
                variants={{
                  hidden: { opacity: 0.1, x: -5 },
                  visible: {
                    opacity: 1,
                    x: 0
                  }
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
              >
                <Typography color="primary" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}> {char}</Typography>
              </motion.div>
            ))
          }
        </motion.div>
        <Box component="ul" sx={{ py: 1, px: { xs: 0, sm: 4 } }}>
          <Box component="li">
            i am passionate <Typography color="primary" component="span">frontend developer</Typography>. i am currently using <Typography color="primary" component="span">react(*jsx,*tsx)</Typography>.
          </Box>
          <Box component="li">
            i am currently working at <Typography component="span" color="primary">-?-</Typography> company.
          </Box>
          <Box component="li">
            i live in <Typography component="span" color="primary">Istanbul, Turkey.</Typography>
          </Box>
          <Box component="li" >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <GitHubIcon />: <Typography component="a" target="_blank" href='https://github.com/volkankaraali' color="primary">/volkankaraali</Typography>
            </Box>
          </Box>
          <Box component="li">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LinkedInIcon />: <Typography component="a" target="_blank" href='https://www.linkedin.com/in/volkankaraali/' color="primary">/volkankaraali</Typography>
            </Box>
          </Box>
          <Box component="li">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon />: <Typography component="a" href='mailto:volkankaraali1@gmail.com' color="primary">volkankaraali1@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Infos