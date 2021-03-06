import React, {useState} from 'react';
import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography,  } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles';

function List( {places }) {
    const [ type, setType ] = useState('restaurants');
    const [ rating, setRating ] = useState('');

   

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurant, Hotels & Attractions around you
                <FormControl className={classes.formcontrol}>
                    <InputLabel id="type">Type</InputLabel>

                    <Select value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurant</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formcontrol}>
                    <InputLabel id="rating">Rating</InputLabel>

                    <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={3}>Above 3.0 </MenuItem>
                        <MenuItem value={4}>Above 4.0</MenuItem>
                        <MenuItem value={4.5}>Above 4.5</MenuItem>
                    </Select>
                </FormControl>

                <Grid container spacing={3} className={classes.list}>
                    {places?.map((place, i) => (
                        <Grid item key={i} xs={12}>
                            <PlaceDetails place={place} />
                        </Grid>
                    ))}
                </Grid>
            </Typography>
        </div>
    )
}

export default List
