import React from 'react';
import { render, screen } from '@testing-library/react';
import TrackCard from './TrackCard';
import { defaultImgSrc } from './TrackCard';

const release =  {
    "artist": "Nickelback",
    "id": 173765,
    "main_release": 3128432,
    "resource_url": "http://api.discogs.com/masters/173765",
    "role": "Main",
    "thumb": "",
    "title": "Curb",
    "type": "master",
    "year": 1996,
    "stats": {
        "community": {
            "in_wantlist": 251,
            "in_collection": 31
        }
    }
  };

test('render release details withint the TrackCard', () => {
    render(<TrackCard  release ={release} />);
    const titleElement = screen.getByText(/Curb/i);
    expect(titleElement).toBeInTheDocument();

    const yearElement = screen.getByText(/1996/i);
    expect(yearElement).toBeInTheDocument();

    const artistElement = screen.getByText(/Nickelback/i);
    expect(artistElement).toBeInTheDocument();

});

test('renders default image if thumbnail from API is empty', () => {
    const { getByAltText } = render(<TrackCard  release ={release} />);

    const image = getByAltText('track_thumbnail');
    expect(image).toHaveAttribute('src', defaultImgSrc);

});
    