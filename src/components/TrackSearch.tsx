import * as React from 'react';
import TrackList from './TrackList';
import { Box, Pagination } from '@mui/material';
import { Release } from './TrackList';
import fetchTrackListByArtistId from '../api/fetchTrackListByArtistId';
import AutoCompleteSearch from './AutoCompleteSearch';



export default function TrackSearch() {
    const [artistId, setArtistId] = React.useState<number>(0);
    const [releases, setReleases ] = React.useState<Array<Release>>([]);
    const [error, setError] = React.useState<Boolean>(false);
    const [numberOfPages,setNumberOfPages] = React.useState<number>(0);
    const itemsPerPage = 5;


    function queryTrackList (artistId: number, page: number, itemsPerPage: number){
        const trackListResponse = fetchTrackListByArtistId(artistId, page, itemsPerPage);
        trackListResponse.then((response)=> {
            if(typeof(response) === 'string' && response.includes("Error")){
                console.log("Error");
                setError(true);
            } else {
                const releases = response.releases as Array<Release>;
                setReleases(releases);
                setNumberOfPages(response.pagination.pages);
                setArtistId(artistId);
            }
        });
    }
    function onPageChange(event: React.ChangeEvent<unknown>, page: number){
        queryTrackList(artistId, page, itemsPerPage);
    }

    function handleSearch(artistId: number){
        queryTrackList( artistId, 1, itemsPerPage);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}>
            <AutoCompleteSearch onChange={handleSearch} />
            <TrackList releases={releases} />
            {numberOfPages ? <Pagination count={numberOfPages} onChange={onPageChange} sx={{marginTop: 4}}/> : null}
        </Box>
    )
};
