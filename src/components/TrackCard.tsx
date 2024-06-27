import { AspectRatio, Card, CardContent, Typography } from '@mui/joy';
import Chip from '@mui/material/Chip';
import * as React from 'react';
import { Release } from './TrackList';
import { useNavigate } from 'react-router-dom';

type TrackCardProps = {
    release: Release
};

export const defaultImgSrc = "https://media.istockphoto.com/id/108195157/photo/record-spinning-on-turn-table.jpg?s=2048x2048&w=is&k=20&c=fZctB2a91p00CC2p3IDDYxxO-TgzANl1pNbC0RoVThE=";

export default function TrackCard({ release } : TrackCardProps) {
    const navigate = useNavigate();
    function handleTrackClick(release: Release){
        localStorage.setItem("releaseDetails", JSON.stringify(release));
        navigate('/trackDetails/');
    }
    return (
            <Card
                variant="outlined"
                orientation="horizontal"
                sx={{
                    width: '75%',
                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}
            >
                <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <img
                        src={release.thumb ? release.thumb : defaultImgSrc}
                        loading="lazy"
                        alt="track_thumbnail"
                    />
                </AspectRatio>
                <CardContent sx={{ alignItems: 'center'}}>
                    <Typography level="title-lg" id="card-description">
                        {release.title}
                    </Typography>
                    <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                        {release.artist}
                    </Typography>
                    <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                        {release.year}
                    </Typography>
                    <Chip
                        label="Explore"
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => handleTrackClick(release)}
                        />
                </CardContent>
            </Card>
    );
}