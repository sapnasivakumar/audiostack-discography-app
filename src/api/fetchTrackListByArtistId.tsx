const fetchTrackListByArtistId = async (artistId: number, pageNumber: number, itemsPerPage: number) => {

    const releases =  [
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
          "format": "CD, EP",
          "id": 4299404,
          "label": "Not On Label (Nickelback Self-released)",
          "resource_url": "http://api.discogs.com/releases/4299404",
          "role": "Main",
          "status": "Accepted",
          "thumb": "https://api-img.discogs.com/eFRGD78N7UhtvRjhdLZYXs2QJXk=/fit-in/90x90/filters:strip_icc():format(jpeg):mode_rgb()/discogs-images/R-4299404-1361106117-3632.jpeg.jpg",
          "title": "Hesher",
          "type": "release",
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
      ]

      const url = `https://api.discogs.com/artists/${artistId}/releases?page=${pageNumber}&per_page=${itemsPerPage}`;
      try{
          const response = await fetch(url);
          if(!response.ok){
              throw Error(response.status+' '+response.statusText);
          }
          const tracks = await response.json();

          return tracks;
         
      }catch(error){
          console.log("error in fetching the track list", error);
          return error;
  
      }

};

export default fetchTrackListByArtistId;
