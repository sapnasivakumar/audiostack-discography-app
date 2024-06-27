import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Box, Container } from '@mui/material';
import { Typography } from '@mui/joy';
import TrackSearch from './components/TrackSearch';
import TrackDetails, { TrackDetailsProps } from './components/TrackDetails';

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
        <Routes>
          <Route path="/" element={<TrackSearch />} />
          <Route 
            path="/trackDetails" element = {<TrackDetails />}          
            />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
