import * as React from 'react';
import TrackCard from './TrackCard';
import { Box, Stack } from '@mui/joy';

type TrackListProps = {
    releases: Array<Release>
}
 
export type Release = {
    title: string,
    artist: string,
    year: number,
    thumb: string,
    id: number

}
export default function TrackList({ releases }: TrackListProps) {
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                width= '100%'
            >
                {releases.map((release)=> {
                    return <TrackCard release={release}/>
                })}
            </Stack>
            
        </Box>
    )
}