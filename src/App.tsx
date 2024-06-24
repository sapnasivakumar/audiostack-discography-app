import * as React from 'react';
import './App.css';
import { Box, Container } from '@mui/material';
import SearchField from './components/SearchField';
import { Typography } from '@mui/joy';

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
          <SearchField />
      </Box>
      
    </Container>
  );
}

export default App;
