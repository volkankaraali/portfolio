// libraries
import React from 'react';

// components
import Layout from '@/components/Layout';
import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { getProjectData } from '../../utils/getProjectData';


type Props = {
  projects: []
  data?: {}
}

export type ProjectData = {
  title: string,
  description: string,
  img: string,
  github: string,
  live: string,
  techStack: [],
}

const Projects = (props: Props) => {

  const { projects } = props.data as Props;

  return (
    <Layout>
      <Head>
        <title>Volkan Karaali | Projects </title>
      </Head>

      <Box sx={{ py: 2 }}>
        <Container >
          <Grid container spacing={2}>
            {
              projects.map((project: ProjectData) => (
                <Grid key={project?.title} item md={4} sx={{ width: 400, height: 500 }}>
                  <ProductCard item={project} />
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default Projects

export async function getStaticProps() {
  const data = await getProjectData();

  return {
    props: {
      data
    },
  }
}