import * as React from 'react';
import './App.css';
import { Box, Container } from '@mui/material';
import { Typography } from '@mui/joy';
import TrackSearch from './components/TrackSearch';

function App() {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <Typography level="h1">Discography Catalogue</Typography>
          <TrackSearch />
      </Box>
    </Container>
  );
}

export default App;
