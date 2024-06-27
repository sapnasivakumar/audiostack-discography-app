import fetch, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();
import fetchTrackListByArtistId from './fetchTrackListByArtistId';


beforeEach(() => {
  fetch.resetMocks();
});


test('should successfully fetch the track list', async () => {

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
        "main_release": 3128432,
        "resource_url": "http://api.discogs.com/masters/173767",
        "role": "Main",
        "thumb": "https://api-img.discogs.com/12LXbUV44IHjyb6drFZOTQxgCqs=/fit-in/90x90/filters:strip_icc():format(jpeg):mode_rgb()/discogs-images/R-1905922-1251540516.jpeg.jpg",
        "title": "Leader Of Men",
        "type": "master",
        "year": 1999
      }
    ];
    fetch.mockResponseOnce(JSON.stringify(releaseList))
    
    const products = await fetchTrackListByArtistId(3128432, 1, 5)

    expect(products).toStrictEqual(releaseList)

});