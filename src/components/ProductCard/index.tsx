import React from 'react'
import { Box, Card, CardHeader, CardContent, CardActions, IconButton, Typography, Tooltip, Chip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';


interface Props {
  item: {
    title: string,
    description: string,
    img: string,
    github: string,
    live: string,
    techStack: [],
  }
}

export default function ProductCard({ item }: Props) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <CardHeader
        title={item.title}
        titleTypographyProps={{
          color: 'primary'
        }}
      />
      <Image
        width={373}
        height={200}
        sizes="100vw"
        style={{
          width: '100%',
        }}
        src={`${item.img}`}
        alt={item.title}
      />

      <Box
        sx={{
          height: 213,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <Tooltip placement="top" title={item.description} >
            <Typography variant="body2" noWrap sx={{ mb: 2, overflow: "hidden", textOverflow: "ellipsis", }}>
              {item.description}
            </Typography>
          </Tooltip>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {
              item.techStack.map((tech, i) => (
                <Chip key={i} size="small" color="primary" variant='outlined' label={tech} />
              ))
            }
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="live demo" placement="top">
            <IconButton aria-label="live" component="a" href={item.live} target="_blank" disabled={!item.live ? true : false} sx={{ opacity: !item.live ? 0.2 : 1 }}>
              <LaunchIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="source code" placement="top">
            <IconButton aria-label="share" component="a" href={item.github} target="_blank"  >
              <GitHubIcon color="primary" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  )
}
