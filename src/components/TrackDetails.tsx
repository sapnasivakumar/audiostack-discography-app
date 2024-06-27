import { AspectRatio, Card, CardContent, CardOverflow, Typography } from '@mui/joy';
import { Release } from './TrackList';
import * as React from 'react';

export type TrackDetailsProps = {
    release: Release
};


export default function TrackDetails(){
    const release : Release = JSON.parse(localStorage.getItem("releaseDetails") || "");

    return (
        <Card
        size="lg"
        variant="plain"
        orientation="horizontal"
        sx={{
          marginTop: 8,
          textAlign: 'center',
          maxWidth: '100%',
          width: '75%',
          // to make the demo resizable
          resize: 'horizontal',
          overflow: 'auto',
        }}
      >
        <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
          <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
            <img
              alt="release thumbnail"
              src={release.thumb}
            />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg">{release.title}</Typography>
            <Typography fontSize="sm" sx={{ mt: 0.5 }}>
             {release.artist}
            </Typography>
            <Typography fontSize="sm" sx={{ mt: 0.5 }}>
             {release.year}
            </Typography>
            <Typography fontSize="sm" sx={{ mt: 0.5 }}>
             No of people having it in collection: {release.stats.community.in_collection}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      );
}