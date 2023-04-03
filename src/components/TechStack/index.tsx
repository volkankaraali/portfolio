import React from 'react'
import Marquee from "react-fast-marquee";
import { Box } from '@mui/material';
import Image from 'next/image';
import { TECHSTACK } from '@/constants';

function TechStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Marquee
        gradient={false}
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {
          TECHSTACK.map(tech => (
            <Box
              key={tech.name}
              sx={{ mr: 2 }}
            >
              <Image
                src={tech.svg}
                width={50}
                height={50}
                alt={tech.name}
              />
            </Box>

          ))
        }
      </Marquee>
    </Box>
  )
}

export default TechStack