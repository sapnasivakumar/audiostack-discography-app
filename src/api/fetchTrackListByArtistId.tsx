const fetchTrackListByArtistId = async (artistId: number, pageNumber: number, itemsPerPage: number) => {

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
