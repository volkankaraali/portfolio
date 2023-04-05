import React from 'react'
import { Box, Card, CardHeader, CardContent, CardActions, IconButton, Typography, CardMedia, Grid, Tooltip, Chip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';


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
      <CardMedia
        component="img"
        height="200"
        image={item.img}
        alt={item.title}
      />
      <Box
        sx={{
          height: 220,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
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
            <IconButton aria-label="add to favorites">
              <LaunchIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="source code" placement="top">
            <IconButton aria-label="share" >
              <GitHubIcon color="primary" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>


    </Card>
  )
}