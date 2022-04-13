import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import xhomeRight from 'assets/images/xhome-right.png';
import styles from './styles';

function HomePage() {
  const { bannerText, helloText } = styles;
  return (
    <Box sx={{ background: '#727272' }}>
      <Container maxWidth='lg' sx={{ pt: 4.5, background: '#727272' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={8} md={6}>
            <Box sx={bannerText}>
              <Typography sx={helloText}>Hello</Typography>
              <Typography sx={{ fontSize: '3.5rem', m: '10px 0' }}>I am Tin Trieu Minh</Typography>
              <Typography sx={{ fontSize: '1.8rem' }}>Front-End Developer</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={6}>
            <Box component='img' src={xhomeRight}></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
