import { Button } from '@mui/joy';
import Input from '@mui/joy/Input';
import { Box } from '@mui/material';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

export type SearchFieldProps = {
    onChange: Function
};


export default function SearchField (props : SearchFieldProps) {
    const [ artistId, setArtistId ] = React.useState('');
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}>
            <Input size="lg" sx={{ width: '75%' }} placeholder="Type in Artist ID..." onChange={(event) => setArtistId(event.target.value)}/>
            <Typography
                color="neutral"
                level="body-sm"
                variant="plain"
            >Sample Artist Ids: 1395715, 564596, 453020</Typography>
            <Button type="submit" sx={{ marginTop: 2}} onClick={() => props.onChange(artistId)}>Search</Button>
        
        </Box>
        
    );
}
