import React from 'react';
import { render, screen } from '@testing-library/react';
import TrackList from './TrackList';

const releaseList = [ 
    {
    "artist": "Nickelback",
    "id": 173765,
    "main_release": 3128432,
    "resource_url": "http://api.discogs.com/masters/173765",
    "role": "Main",
    "thumb": "",
    "title": "Curb",
    "type": "master",
    "year": 1996
  },
  {
    "artist": "Nickelback",
    "id": 173767,
    "main_release": 1905922,
    "resource_url": "http://api.discogs.com/masters/173767",
    "role": "Main",
    "thumb": "https://api-img.discogs.com/12LXbUV44IHjyb6drFZOTQxgCqs=/fit-in/90x90/filters:strip_icc():format(jpeg):mode_rgb()/discogs-images/R-1905922-1251540516.jpeg.jpg",
    "title": "Leader Of Men",
    "type": "master",
    "year": 1999
  }
];

test('render releaseList as a list of Track Cards', () => {
    render(<TrackList releases= {releaseList}/>);

    const titleElementOne = screen.getByText(/Curb/i);
    expect(titleElementOne).toBeInTheDocument();

    const titleElementTwo = screen.getByText(/Leader Of Men/i);
    expect(titleElementTwo).toBeInTheDocument();

});


    