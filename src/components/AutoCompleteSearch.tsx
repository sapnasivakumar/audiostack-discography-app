import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import * as React from 'react';
import fetchArtistListForAutoComplete from '../api/fetchArtistListForAutoComplete';

export type SearchFieldProps = {
    onChange: Function
};

interface OptionType {
    id: number
    name: string;
  }

export default function AutoCompleteSearch (props : SearchFieldProps) {
    const [ artistId, setArtistId ] = React.useState('');
    const [options, setOptions] = React.useState<OptionType[]>([]);
    const [error, setError] = React.useState<Boolean>(false);

    const handleChange = (event: { target: { value: any; }; }) => {
        const searchResponse = fetchArtistListForAutoComplete(event.target.value);
        searchResponse.then((response)=> {
            if(typeof(response) === 'string' && response.includes("Error")){
                console.log("Error");
                setError(true);
            } else {
                const artistOptions = response.map((result: any) => {
                    return {id: result.id, name: result.title};
                });
                setOptions(artistOptions)
            }
        });
        
      };
    
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}>
            <Autocomplete
                id="artist"
                style={{ width: '75%' }}
                getOptionLabel={option =>
                    typeof option === "string" ? option : option.name
                }
                filterOptions={x => {
                    return x;
                }}
                options={options}
                autoComplete
                includeInputInList
                freeSolo
                onChange={(event: any, newValue: OptionType | null | string) => {
                    if(newValue !== null && typeof newValue !== 'string'){
                        props.onChange(newValue.id)
                    }
                }}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Artist name:"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                )}
                renderOption={(props, option) => {
                    const id = typeof option === 'string' ? option : option.id
                    const newProps = {...props, key: id}
                    return (
                        <li {...props} key={id}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                {typeof option === 'string' ? option : option.name}
                            </Grid>
                        </Grid>
                        </li>
                    );
                }}
                noOptionsText="No Artists"
            />
        </Box>
        
    );
}
