// libraries
import Head from 'next/head';
import { Box, Container, Divider } from '@mui/material';

// components
import Layout from '@/components/Layout';
import Infos from '@/components/Infos';
import TechStack from '@/components/TechStack';
import ContactForm from '@/components/ContactForm';
import palette from '@/theme/palette';


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Volkan Karaali | Home</title>

        <meta name="description" content="volkan karaali" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code-slash.svg" />
      </Head>

      <Box sx={{ height: '100%', pb: 2 }}>
        <Container sx={{ mt: { xs: 5, sm: 5 } }}>

          <Infos />
          <TechStack />
          <Divider sx={{ my: 2, backgroundColor: palette.dark.primary.main }} />
          <ContactForm />
        </Container>
      </Box>


    </Layout >
  )
}
