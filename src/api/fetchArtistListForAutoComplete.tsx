const fetchArtistListForAutoComplete = async (searchParam: string) => {

    console.log("Env variable$$$$", process.env);

    const url = `https://api.discogs.com/database/search?q=${searchParam}&token=${process.env.REACT_APP_DISCOG_TOKEN}&type=artist`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw Error(response.status+' '+response.statusText);
        }
        const searchResponse = await response.json();
        return searchResponse.results;
       
    }catch(error){
        console.log("error in fetching artists list for autocomplete", error);
        return error;

    }

};

export default fetchArtistListForAutoComplete;