// libraries
import Head from 'next/head';
import { Box, Container } from '@mui/material';

// components
import Layout from '@/components/Layout';
import Infos from '@/components/Infos';
import TechStack from '@/components/TechStack';


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Volkan Karaali | Home</title>

        <meta name="description" content="volkan karaali" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code-slash.svg" />
      </Head>

      <Box sx={{ height: '100%' }}>
        <Container sx={{ mt: { xs: 5, sm: 20 } }}>
          <Infos />
          <TechStack />
        </Container>
      </Box>


    </Layout >
  )
}
